import React, { Component } from 'react';
import PropTypes from "prop-types";
import  Loginpage from '../components/login';
import Users from '../components/users';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email:'',
        password:''
    };
  }

  setEmail=(e)=>{
      this.setState({
        email: e.target.value
      })
  }
  setPassword=(e)=>{
    this.setState({
        password: e.target.value
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
    let {isLoginSuccess} = this.props;
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

Admin.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    openModal: PropTypes.func.isRequired,
    isLoginSuccess: PropTypes.bool.isRequired,
    userList: PropTypes.array.isRequired
};

export default Admin;