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
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false));
      await dispatch(loginSuccess());
    }
    catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}

export const signOut = () => {
  return async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    try {
      dispatch(isLoading(true))
      const response = await firebase.auth().signOut()
      if (!response.ok) {
        throw Error(response.statusText)
      }
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
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const user = await firestore.collection('users').doc(
        response.user.uid
        ).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          address: newUser.address,
          uid: response.user.uid,
          courses: []
        })
      if (!user.ok) {
        throw Error(newUser.statusText)
      }
      dispatch(isLoading(false));
      await dispatch(signupSuccess());
      await dispatch(newUserCourse());
    }
    catch(err) {
      dispatch(signupError(err.message))
    }
  }
};