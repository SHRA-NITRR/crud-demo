import {login} from '../action-creators/login';
import {openModal} from '../action-creators/add-user';
import {connect} from 'react-redux';
import Admin from "../components/admin";

const mapStateToProps = (state) => {    
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.logIn.isLoginSuccess,
    loginError: state.logIn.loginError,
    userList: state.addUser.userList,
    isModalOpen: state.addUser.isModalOpen
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    openModal: () => dispatch(openModal())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);