import { connect } from 'react-redux';
import TeacherDashboard from '../components/teacher/teacher-dashboard';

const mapStateToProps = state => {
  return {
    userMarks: state.student.userMarks
  };
};

export default connect(mapStateToProps)(TeacherDashboard);
