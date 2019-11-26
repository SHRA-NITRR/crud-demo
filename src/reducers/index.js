import { combineReducers } from 'redux'
import * as actions from '../actions';

const addUser = (state = {userList:[], isModalOpen: false}, action) => {
    switch (action.type) {
  
      case actions.ADD_USER:
        return {
            ...state,
            userList:[state.userList, action.userToAdd]
        }
        case actions.OPEN_MODAL:
        return {
            ...state,
            isModalOpen: true
        }
        case actions.CLOSE_MODAL:
        return {
            ...state,
            isModalOpen: false
        }
      default:
        return state
    }
}

const logIn = (state = {isLoginSuccess:false}, action) => {
    switch (action.type) {
  
      case actions.LOG_IN:
        return {
            ...state,
            isLoginSuccess: true
        }
      default:
        return state
    }
}

const rootReducer = combineReducers({
    addUser,
    logIn
  })
  
  export default rootReducer;