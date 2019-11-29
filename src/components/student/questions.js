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
            <div className="content">
                <ol type="1">
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
                </ol>
            </div>
            <Button 
                buttonClass={"button is-success is-pulled-right"}
                onClick={evaluate}
                label={'Submit'}
            />
        </React.Fragment>
    )

}

export default Questions;