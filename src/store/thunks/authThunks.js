import { 
  isLoading,
  hasErrored,
  loginSuccess,
  signoutSuccess,
  signupSuccess,
  signupError,
  newUserCourse
} from '../actions';

export const signIn = (credentials) => {
  return async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    try {
      dispatch(isLoading(true))
      const response  = await firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      )
      if (!response.user) {
        throw Error()
      }
      await dispatch(loginSuccess());
      dispatch(isLoading(false));
    }
    catch (error) {
      dispatch(hasErrored(error))
    }
  }
}

export const signOut = () => {
  return async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    try {
      dispatch(isLoading(true))
      await firebase.auth().signOut()
      dispatch(isLoading(false))
      await dispatch(signoutSuccess())
    }
    catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}

export const signUp = (newUser) => {
  return async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    try {
      dispatch(isLoading(true));
      const response = await firebase.auth().createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
      )
      if (!response.user) {
        throw Error(response)
      }
      await firestore.collection('users').doc(
          response.user.uid
        ).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          address: newUser.address,
          uid: response.user.uid,
          courses: []
        });
      await dispatch(signupSuccess());
      await dispatch(newUserCourse());
      dispatch(isLoading(false));
    }
    catch(err) {
      dispatch(signupError(err))
    }
  }
};