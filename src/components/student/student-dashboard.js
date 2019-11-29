import React, { Component } from 'react';
import PropTypes from "prop-types";
import Questions from './questions';
import { questions } from "../../data/questions";

class StudentDashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return(
        <section className="section">
            <div className='container'>
                <div className="columns">
                    <div className="column question-container">
                        <Questions
                            questions={questions}
                            evaluateAnswer={this.props.evaluateAnswer}
                        />
                    </div>
                </div>
                
            </div>
        </section>
    )
 
  }
}

StudentDashboard.propTypes = {}

export default StudentDashboard;