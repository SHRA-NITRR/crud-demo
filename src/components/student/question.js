import React from 'react';
import Radio from '../common/radio';

const Question = props => {
  const { question, questionId } = props;
  const onSelect = e => {
    props.handleselect(questionId, e.target.value);
  };

  return (
    <li className="questions">
      <div className="question-statement">{question.questionStatement}</div>
      <div className="control answer-items">
        {question.answerOptions.map(answerOption => {
          return (
            <Radio
              label={answerOption.answer}
              handleOnchange={onSelect}
              value={answerOption.ansID}
              key={answerOption.ansID}
              isSelected={props.selectedAnsID === String(answerOption.ansID)}
            />
          );
        })}
      </div>
    </li>
  );
};

export default Question;
