import * as actions from '../actions';
import * as constants from '../constants';


const findRole=(userName, password, userList)=>{
    const userStored=userList.find((user)=>user.userName===userName); 

    if (userName===constants.userName && password===constants.password){
        return  "ADMIN"
    } else if(password===constants.password && userStored){
        return userStored.role;
    }
   return null;
}

export const login=(email, password)=> { 
    return (dispatch, getState)=>{
        console.log(getState().addUser.userList);
        const userList=getState().addUser.userList;
        
        const role= findRole(email, password, userList); 
        if (role){
            dispatch({
                type:actions.LOG_IN,
                email,
                role
            })
        }
        else{
            dispatch({
                type: actions.LOG_IN_ERROR,
                email
            })
        }
    }
}

export const logOut=()=> { 
    return{
        type: actions.LOG_OUT
    }
}