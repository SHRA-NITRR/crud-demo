import React, {Component} from 'react';
import PropTypes from "prop-types";
import Input from './common/input';
import Button from "./common/button";
import Select from "../components/common/select";
import { validateEmail } from "../utility/validate-email";
import { userRoles } from "../constants";

class AddUserForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          email:'',
          userName:'',
          name:'',
          role: '',
          isModalOpen: true,
          error: {
            emailValid: true,
            userNameValid:true,
            nameValid: true,
            roleValid: true
        }
      };
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.isModalOpen!==prevState.isModalOpen){
            return {
                error: {
                    emailValid: true,
                    userNameValid:true,
                    nameValid: true,
                    roleValid: true
                }
            }
        }
        return null;
    }

    componentDidUpdate(prevProps) {
        const {email, userName, name, userToUpdate}=this.props;
        if (prevProps.userToUpdate !== userToUpdate) {
            this.setState({
                email,
                userName,
                name
            });
        }
    }

    resetState=()=>{
        this.setState({
            email:'',
            userName:'',
            name:'',
            role: '',
            error: {
                emailValid: true,
                userNameValid:true,
                nameValid: true,
                roleValid: true
            }
        })
    }

    validateBeforeSubmit=(name, userName, email, roleValid)=>{
        const error={
            emailValid: true,
            userNameValid:true,
            nameValid: true,
            roleValid: true
        };
        if(this.props.userToUpdate==='' && !this.validateUserName(userName)){
            error.userNameValid=false;
        }
        if(!validateEmail(email)){
            error.emailValid=false;
        }
        if(name.length===0){
            error.nameValid=false;
        }
        if(roleValid.length===0){
            error.roleValid=false;
        }
        this.setState({
            error
        })
        
        return Object.keys(error).every((key)=>error[key]===true)

    }

    submit=()=>{
        const {name, userName, email, role}=this.state;

        if(this.validateBeforeSubmit(name, userName, email, role)){
            if(this.props.userToUpdate){
                this.props.updateUser(name, userName, email, role); 
            } else{
                this.props.addUser(name, userName, email, role);
            }
            this.resetState();
        }
    }
    
    setName=(e)=>{
        const name=  e.target.value;
        this.setState({
            name: e.target.value,
            error:{
                ...this.state.error,
                nameValid: name.length>0
            }
        });
    }

    validateUserName=(userName)=>{
        return  userName!=='' && !this.props.userList.some((user)=>user.userName===userName);
    }

    setUserName=(e)=>{
        const userName=  e.target.value;
        this.setState({
            userName: e.target.value,
            error:{
                ...this.state.error,
                userNameValid: this.validateUserName(userName)
            }
            
        });
    }
    
    setEmail=(e)=>{
        const email=e.target.value;

        this.setState({
            email,
            error:{
                ...this.state.error,
                emailValid: validateEmail(email)
            }
            
        });
    }
    setRole=(role)=>{
        this.setState({
            role 
        });
    }
    cancel=()=>{
        this.resetState();
        this.props.closeModal();
    }

    render() {
      let {name, userName, email, error, role } = this.state;
      
      const {userToUpdate}=this.props;
          return (
            <div className="column">
                <Input 
                    label={'Name'}
                    value={name}
                    placeholder={"Text input"}
                    onChange={this.setName}
                    inputClass={error.nameValid? 'input': 'input is-danger'}
                    message={error.nameValid? '': 'This Field Is Required!'}
                    messageClass={'is-danger'}
                />
                <Select
                    selectPlaceholder={'--- Select a Role ---'}
                    selectOptions={userRoles}
                    handleSelect={this.setRole}
                    selectedValue={role}
                    label={'Role'}
                    selectClass={error.roleValid? 'select': 'select is-danger'}
                    message={error.roleValid? '': 'Select a valid role'}
                    messageClass={'is-danger'}

                />

                <Input 
                    label={'Username'}
                    value={userName}
                    placeholder={"Username"}
                    onChange={this.setUserName}
                    disabled={Boolean(userToUpdate)}
                    inputClass={error.userNameValid || userToUpdate? 'input': 'input is-danger'}
                    message={error.userNameValid || userToUpdate ? '': 'Invalid UserName or Already Exists!'}
                    messageClass={'is-danger'}
                />

                <Input 
                    label={'Email'}
                    value={email}
                    placeholder={"Email"}
                    onChange={this.setEmail}
                    inputType={'email'}
                    inputClass={error.emailValid? 'input': 'input is-danger'}
                    message={error.emailValid? '': 'Invalid Email!'}
                    messageClass={'is-danger'}
                />

                <div className="field is-grouped">
                    <Button 
                        buttonClass={'button is-link'}
                        onClick={this.submit}
                        label={'Submit'}
                    />
                    <Button 
                        buttonClass={'button is-link is-light'}
                        onClick={this.cancel}
                        label={'Cancel'}
                    />
            </div>
          </div>
          );
      }
}

AddUserForm.defaultProps = {
    email:'',
    userName:'',
    name:''
}

AddUserForm.propTypes = {
    closeModal: PropTypes.func.isRequired,
    email: PropTypes.string,
    userName: PropTypes.string,
    name: PropTypes.string,
    userToUpdate: PropTypes.string
};

export default AddUserForm;