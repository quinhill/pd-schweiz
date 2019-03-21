import {
  isLoading,
  courseSignupSuccess,
  courseSignupError,
  courseCancelSuccess,
  courseCancelError,
} from '../actions';
import { request } from 'http';


export const courseSignup = (id) => {
  return async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    let courses = getState().firebase.profile.courses;

    courses = [...courses, id];

    const course = getState().firestore.data.courses[id];
    let participants = getState().firestore.data.courses[id].participants;

    participants = [...participants, profile];

    try {
      dispatch(isLoading(true));
      await firestore.collection(
        'courses'
        ).doc(id).set({
        ...course,
        participants
      })
      await firestore.collection(
        'users'
        ).doc(uid).set({
        ...profile,
        courses
      })
      await dispatch(courseSignupSuccess({
        ...profile, 
        ...course
        })
      )
      dispatch(isLoading(false));
    }
    catch(err) {
      dispatch(courseSignupError(err))
    }
  }
};


export const courseCancel = (id) => {
  return async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    
    const uid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    let courses = getState().firebase.profile.courses;
    
    courses = courses.filter(courseId => courseId !== id);
    
    const course = getState().firestore.data.courses[id];
    let participants = getState().firestore.data.courses[id].participants;
    
    participants = participants.filter(participant => participant.uid !== uid);

    try {
      dispatch(isLoading(true));
      await firestore.collection('courses').doc(id).set({
        ...course,
        participants
      })
      await firestore.collection('users').doc(uid).set({
        ...profile,
        courses
      })
      await dispatch(courseCancelSuccess(
        {...profile, ...course})
      );
      dispatch(isLoading(false))
    }
    catch(err) {
      dispatch(courseCancelError(err.message))
    }
  }
};

export const anonCourseSignup = (data) => {
  return async (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    
    const course = getState().firestore.data.courses[data.id];
    const participants = getState().firestore.data.courses[data.id].participants;
    
    try {
      dispatch(isLoading(true));
      await firestore.collection(
        'courses'
        ).doc(data.id).set({
        ...course,
        participants: [...participants, data.user]
      })
      await dispatch(courseSignupSuccess(
        { ...data.user, ...course}
      ))
      dispatch(isLoading(false));
    }
    catch (err) {
      dispatch((courseSignupError(err.message)))
    }
  }
};
