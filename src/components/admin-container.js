import React, { Component } from 'react';
import  Loginpage from './login';
import {login} from '../action-creators/login';
import {openModal} from '../action-creators/add-user';
import {connect} from 'react-redux';
import Users from './users';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email:'',
        password:''
    };
  }

  setEmail=(email)=>{
      this.setState({
        email
      })
  }
  setPassword=(password)=>{
    this.setState({
        password
    })
}

onSubmit=()=> {
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }

  render() {
    let {email, password} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
    if(isLoginSuccess){
        return (
            <Users 
                users={this.props.userList}
                openModal={this.props.openModal}
                isModalOpen={this.props.isModalOpen}
            />
        
        )
    }else{
        return(
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
}

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