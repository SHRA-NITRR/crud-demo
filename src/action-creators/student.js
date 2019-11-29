import * as actions from '../actions';
import {answers} from "../data/answers";

const calculateMarks=(userAnswer)=>{
    let marks=0; 
    for (const questionId in userAnswer) {
        if(answers[questionId]===userAnswer[questionId]){
            marks+=10;
        }
    }
    return marks;
}

export const evaluateAnswer=(userAnswer)=> {

    return (dispatch, getState)=>{
        dispatch(
            {
                type:actions.EVALUATE_ANSWERS,
                userName: getState().logIn.loggedInUser,
                marks: calculateMarks(userAnswer)
            }
        );
    }

 }