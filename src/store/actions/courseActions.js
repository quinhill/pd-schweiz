export const courseSignup = (id) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

    const uid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    let courses = getState().firebase.profile.courses;

    courses = [...courses, id];

    const course = getState().firestore.data.courses[id];
    let participants = getState().firestore.data.courses[id].participants;

    participants = [...participants, profile];

    firestore.collection('courses').doc(id).set({
      ...course,
      participants
    }).then(() => {
      dispatch({ type: 'COURSE_SIGNUP_SUCCESS' })
    }).catch((err) => {
      dispatch({ type: 'COURSE_SIGNUP_ERROR', err })
    })

    firestore.collection('users').doc(uid).set({
      ...profile,
      courses
    })
  }
};

export const courseCancel = (id) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

    const uid = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    let courses = getState().firebase.profile.courses;

    courses = courses.filter(courseId => courseId !== id);

    const course = getState().firestore.data.courses[id];
    let participants = getState().firestore.data.courses[id].participants;

    participants = participants.filter(participant => participant.uid !== uid);

    firestore.collection('courses').doc(id).set({
      ...course,
      participants
    }).then(() => {
      dispatch({ type: 'COURSE_SIGNUP_SUCCESS' })
    }).catch((err) => {
      dispatch({ type: 'COURSE_SIGNUP_ERROR', err })
    })

    firestore.collection('users').doc(uid).set({
      ...profile,
      courses
    })
  }
}