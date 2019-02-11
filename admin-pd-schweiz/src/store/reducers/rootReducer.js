import authReducer from './authReducer';
import classReducer from './classReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  classes: classReducer
});

export default rootReducer;