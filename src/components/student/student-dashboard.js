/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Questions from './questions';
import { questions } from '../../data/questions';

class StudentDashboard extends Component {
  render() {
    const { evaluateAnswer } = this.props;
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column question-container">
              <Questions
                questions={questions}
                evaluateAnswer={evaluateAnswer}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

StudentDashboard.propTypes = {};

export default StudentDashboard;
