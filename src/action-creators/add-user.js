import * as actions from '../actions';

export const openModal=()=> {

   return  {
        type:actions.OPEN_MODAL
    }
}

export const closeModal=()=> {

    return  {
         type:actions.CLOSE_MODAL
     }
 }