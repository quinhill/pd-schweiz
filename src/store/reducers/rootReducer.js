import authReducer from './authReducer';
import langReducer from './langReducer';
import courseReducer from './courseReducer';
import newUser from './userReducer';
import isLoading from './isLoadingReducer';
import hasErrored from './hasErroredReducer';
import responsive from './responsiveReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  language: langReducer,
  course: courseReducer,
  newUser,
  isLoading,
  hasErrored,
  responsive,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer;