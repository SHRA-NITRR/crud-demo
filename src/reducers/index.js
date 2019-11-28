import { combineReducers } from 'redux'
import { addUser } from "./add-user";
import { logIn } from "./login";

const rootReducer = combineReducers({
    addUser,
    logIn
})
  
export default rootReducer;