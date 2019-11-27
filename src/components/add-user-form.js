import React, {Component} from 'react';
import Input from './input';
import Button from "./button";
import { validateEmail } from "../utility/validate-email";

class AddUserForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          email:'',
          userName:'',
          name:'',
          error: {
            emailValid: true,
            userNameValid:true,
            nameValid: true
        }
      };
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
            error: {
                emailValid: true,
                userNameValid:true,
                nameValid: true
            }
        })
    }

    validateBeforeSubmit=(name, userName, email)=>{
        const error={
            emailValid: true,
            userNameValid:true,
            nameValid: true
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
        this.setState({
            error
        })
        
        return Object.keys(error).every((key)=>error[key]===true)

    }

    submit=()=>{
        const {name, userName, email}=this.state;

        if(this.validateBeforeSubmit(name, userName, email)){
            if(this.props.userToUpdate){
                this.props.updateUser(name, userName, email); 
            } else{
                this.props.addUser(name, userName, email);
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

    cancel=()=>{
        this.resetState();
        this.props.closeModal();
    }

    render() {
      let {name, userName, email, error } = this.state;
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

export default AddUserForm;