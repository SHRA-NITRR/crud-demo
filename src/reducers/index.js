import { combineReducers } from 'redux';
import addUser from './add-user';
import logIn from './login';
import student from './student';

const rootReducer = combineReducers({
  addUser,
  logIn,
  student
});

export default rootReducer;
