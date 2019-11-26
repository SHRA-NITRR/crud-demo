import * as actions from '../actions';
import * as constants from '../constants';

export const login=(email, password)=> {
    console.log(email, password);
    

    return (dispatch)=>{
        if (email===constants.userName && password===constants.password){
            dispatch({
                type:actions.LOG_IN
            })
        }
        else{
            dispatch({
                type: actions.LOG_IN_ERROR
            })
        }
    }
}