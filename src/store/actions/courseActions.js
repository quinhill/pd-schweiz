export const courseSignup = (id) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

    const profile = getState().firebase.profile;
    const course = getState().firestore.data.courses[id];
    let participants = getState().firestore.data.courses[id].participants;
    participants = [...participants, profile]

    firestore.collection('courses').doc(id).set({
      ...course,
      participants
    })
  }
};