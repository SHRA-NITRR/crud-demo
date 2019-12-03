import * as actions from '../actions';

const getLoggedIn=(state, action)=>{
    return {
        ...state,
        isLoginSuccess: true,
        loggedInUser: action.email,
        loggedInUserRole: action.role
    }
}

const defaultState=()=>{
   return{ isLoginSuccess: false,
    loggedInUser: '',
    loggedInUserRole: ''
}
}
export const logIn = (state = defaultState(), action) =>{
    const actionHandlers = {
        [actions.LOG_IN]: getLoggedIn,
        [actions.LOG_OUT]: defaultState
    };
    const reducer = actionHandlers[action.type];

    return reducer ?
        reducer(state, action) :
        state;
}