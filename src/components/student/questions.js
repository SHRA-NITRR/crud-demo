import React, {useState} from 'react';
import PropTypes from "prop-types";
import Question from "./question";
import Button from "../common/button";
const Questions =(props)=>{
    const {questions}=props;
    const [answers, setAnswers]=useState({});
    const setUserAnswer=(questionId, ansID)=>{

        setAnswers({
            ...answers,
            [questionId]:ansID
        })
    }
    const evaluate=()=>{
        props.evaluateAnswer(answers);
    }
        
    return (
        <React.Fragment>
            <ul className="questions">
                {questions.map((question)=>{
                    return(
                        <Question
                            key={question.id}
                            questionId={question.id}
                            handleselect={setUserAnswer}
                            question={question}
                            selectedAnsID={answers[question.id]}
                        />
                    )
                })}
            </ul>
            <Button 
                buttonClass={"button is-success"}
                onClick={evaluate}
                label={'Submit'}
            />
        </React.Fragment>
    )

}

export default Questions;