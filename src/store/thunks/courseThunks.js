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

    const signedUp = getState().firestore.data.course_participants[id].participants;

    const participants = [...signedUp, profile];

    courses = [...courses, id];

    const course = getState().firestore.data.courses[id];

    try {
      dispatch(isLoading(true));
      await firestore.collection(
        'users'
        ).doc(uid).set({
        ...profile,
        courses
      })
      await firestore.collection(
        'course_participants'
      ).doc(id).set({participants});
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
    const signedUp = getState().firestore.data.course_participants[id].participants;

    const participants = signedUp.filter(participant => {
      return participant.uid !== uid;
    });
    
    courses = courses.filter(courseId => courseId !== id);
    
    const course = getState().firestore.data.courses[id];

    try {
      dispatch(isLoading(true));
      await firestore.collection('users').doc(uid).set({
        ...profile,
        courses
      })
      await firestore.collection('course_participants').doc(id).set({participants})
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
    const signedUp = getState().firestore.data.course_participants[data.id].participants;

    const participants = [...signedUp, data.user];
    
    try {
      dispatch(isLoading(true));
      await firestore.collection(
        'course_participants'
        ).doc(data.id).set({participants})
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
