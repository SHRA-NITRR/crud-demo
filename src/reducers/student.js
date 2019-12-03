import * as actions from '../actions';

const addUserMarks = (state, action) => {
  return {
    ...state,
    userMarks: [
      ...state.userMarks,
      { userName: action.userName, marks: action.marks }
    ]
  };
};

const student = (state = { userMarks: [] }, action) => {
  const actionHandlers = {
    [actions.EVALUATE_ANSWERS]: addUserMarks
  };
  const reducer = actionHandlers[action.type];

  return reducer ? reducer(state, action) : state;
};
export default student;
