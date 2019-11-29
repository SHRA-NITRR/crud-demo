import React from 'react';
import PropTypes from "prop-types";
import Radio from "../common/radio";

const Question =(props)=>{
    const {question, questionId}=props;
    const onSelect=(e)=>{
        props.handleselect(questionId, e.target.value);
    }

    return (
        <li className="columns user-item">
            <p>
             {question.questionStatement}
            </p>
            <div className="control">
                {question.answerOptions.map((answerOption)=>{
                    return(
                        <Radio
                            label={answerOption.answer}
                            handleOnchange={onSelect}
                            value={answerOption.ansID}
                            key={answerOption.ansID}
                            isSelected={ props.selectedAnsID == answerOption.ansID} 
                        />
                    )
                })}
            </div>
        </li>
    )

}

export default Question;