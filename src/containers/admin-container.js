import { connect } from 'react-redux';
import { login, logOut } from '../action-creators/login';
import { openModal } from '../action-creators/add-user';
import Admin from '../components/admin';

const mapStateToProps = state => {
  return {
    isLoginSuccess: state.logIn.isLoginSuccess,
    loginError: state.logIn.loginError,
    userList: state.addUser.userList,
    isModalOpen: state.addUser.isModalOpen,
    loggedInUserRole: state.logIn.loggedInUserRole
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    logOut: () => dispatch(logOut()),
    openModal: () => dispatch(openModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
