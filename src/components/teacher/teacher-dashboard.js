/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import MarksList from './marks-list';

class TeacherDasboard extends Component {
  render() {
    const { userMarks } = this.props;
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <MarksList markslist={userMarks} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

TeacherDasboard.propTypes = {};

export default TeacherDasboard;
