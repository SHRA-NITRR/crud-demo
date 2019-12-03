import * as actions from '../actions';
import { answers } from '../data/answers';

const calculateMarks = userAnswer => {
  let marks = 0;
  Object.keys(userAnswer).forEach(questionId => {
    if (answers[questionId] === userAnswer[questionId]) {
      marks += 10;
    }
  });
  return marks;
};

export const evaluateAnswer = userAnswer => {
  return (dispatch, getState) => {
    const marks = calculateMarks(userAnswer);

    window.alert(`you got ${marks} out of 40.`);

    dispatch({
      type: actions.EVALUATE_ANSWERS,
      userName: getState().logIn.loggedInUser,
      marks
    });
  };
};
