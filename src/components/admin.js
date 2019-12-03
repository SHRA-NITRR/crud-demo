import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loginpage from './login';
import Users from './users';
import StudentDashboard from '../containers/student-dashboard-container';
import TeacherDashboard from '../containers/teacher-dashboard-container';
import Header from './common/header';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  setEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  setPassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  onSubmit = () => {
    const { login } = this.props;
    const { email, password } = this.state;
    login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
    const { userList, openModal, isModalOpen, logOut } = this.props;
    const components = {
      ADMIN: (
        <Users
          users={userList}
          openModal={openModal}
          isModalOpen={isModalOpen}
        />
      ),
      TEACHER: <TeacherDashboard />,
      STUDENT: <StudentDashboard />
    };
    const { email, password } = this.state;
    const { isLoginSuccess, loggedInUserRole } = this.props;
    if (isLoginSuccess) {
      return (
        <div>
          <Header logOut={logOut} />
          {components[loggedInUserRole]}
        </div>
      );
    }
    return (
      <Loginpage
        setEmail={this.setEmail}
        setPassword={this.setPassword}
        onSubmit={this.onSubmit}
        email={email}
        password={password}
      />
    );
  }
}

Admin.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  isLoginSuccess: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  userList: PropTypes.array.isRequired
};

export default Admin;
