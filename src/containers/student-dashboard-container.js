import { connect } from 'react-redux';
import { evaluateAnswer } from '../action-creators/student';
import StudentDashboard from '../components/student/student-dashboard';

const mapStateToProps = state => {
  return {
    question: state.student.question
  };
};

const mapDispatchToProps = dispatch => {
  return {
    evaluateAnswer: answers => dispatch(evaluateAnswer(answers))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);
