import { combineReducers } from 'redux';
import authReducer from './authReducer';
import courseReducer from './courseReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  courses: courseReducer
})

export default rootReducer;