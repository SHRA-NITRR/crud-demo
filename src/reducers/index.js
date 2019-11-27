import { combineReducers } from 'redux'
import * as actions from '../actions';

const deleteUser=(users, userNameToDelete)=>{
    return users.filter((user)=>user.userName!==userNameToDelete);
}
const updateUser=(users, name, userName, email)=>{
    return users.map((user)=>{
        if(user.userName===userName){
            return{
               ...user, 
               name,
               email
            }
        } 
        return user;
    }
    );
}

const addUser = (state = {userList:[], isModalOpen: false, userToUpdate:''}, action) => {
    switch (action.type) {
  
        case actions.ADD_USER:
            return {
                ...state,
                userList:[...state.userList, action.user],
                isModalOpen: false,
                userToUpdate:''
            }
        case actions.SET_USET_TO_EDIT:
            return {
                ...state,
                userToUpdate: action.userToUpdate,
                isModalOpen: true
            }
        case actions.UPDATE_USER:
            return {
                ...state,
                userList:updateUser(state.userList, action.name, action.userName, action.email),
                isModalOpen: false,
                userToUpdate:''
            }
        case actions.DELETE_USER:
            return {
                ...state,
                userList: deleteUser(state.userList, action.userName)
            }
        case actions.CLOSE_MODAL:
            return {
                ...state,
                isModalOpen: false,
                userToUpdate:''
            }
        case actions.OPEN_MODAL:
            return {
                ...state,
                isModalOpen: true
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