import authReducer from './authReducer';
import langReducer from './langReducer';
import courseReducer from './courseReducer';
import selectReducer from './selectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  language: langReducer,
  course: courseReducer,
  selected: selectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer;