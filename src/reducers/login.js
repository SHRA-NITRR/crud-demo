import * as actions from '../actions';

const getLoggedIn=(state, action)=>{
    return {
        ...state,
        isLoginSuccess: true
    }
}

export const logIn = (state = {isLoginSuccess:false}, action) =>{
    const actionHandlers = {
        [actions.LOG_IN]: getLoggedIn
    };
    const reducer = actionHandlers[action.type];

    return reducer ?
        reducer(state, action) :
        state;
}