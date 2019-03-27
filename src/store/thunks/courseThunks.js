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

    try {
      dispatch(isLoading(true));
      await firestore.collection('courses').doc(id).collection('participants').doc(uid).set(profile);
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

    try {
      dispatch(isLoading(true));
      await firestore.collection('courses').doc(id).collection(
        'participants'
      ).doc(uid).delete();
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
    
    try {
      dispatch(isLoading(true));
      await firestore.collection(
        'courses'
        ).doc(data.id).collection('participants').add({ ...data.user})
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
