import React, { Component } from 'react';
import PropTypes from "prop-types";
import MarksList from './marks-list';

class TeacherDasboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return(
        <section className="section">
            <div className='container'>
                <div className="columns">
                    <div className="column">
                        <MarksList
                            markslist={this.props.userMarks}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
 
  }
}

TeacherDasboard.propTypes = {}

export default TeacherDasboard;