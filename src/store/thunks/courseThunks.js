import {
  isLoading,
  courseSignupSuccess,
  courseSignupError,
  courseCancelSuccess,
  courseCancelError,
} from '../actions';


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
      const response = await firestore.collection(
        'courses'
        ).doc(id).set({
        ...course,
        participants
      })
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const responseTwo = await firestore.collection(
        'users'
        ).doc(uid).set({
        ...profile,
        courses
      })
      if (!responseTwo.ok) {
        throw Error(responseTwo.statusText)
      }
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
      const response = await firestore.collection('courses').doc(id).set({
        ...course,
        participants
      })
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const responseTwo = await firestore.collection('users').doc(uid).set({
        ...profile,
        courses
      })
      if (!responseTwo.ok) {
        throw Error(responseTwo.statusText)
      }
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
      const response = await firestore.collection(
        'courses'
        ).doc(data.id).set({
        ...course,
        participants: [...participants, data.user]
      })
      if (!response.ok) {
        throw Error(response.statusText)
      }
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
