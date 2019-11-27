import React, {Component} from 'react';
import Input from './input';
import Button from "./button";

class AddUserForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          email:'',
          userName:'',
          name:''
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
            name:''
        })
    }

    submit=()=>{
        const {name, userName, email}=this.state;
        if(this.props.userToUpdate){
            this.props.updateUser(name, userName, email); 
        } else{
            this.props.addUser(name, userName, email);
        }
        this.resetState();
    }
    
    setName=(e)=>{
        this.setState({name: e.target.value});
    }

    setUserName=(e)=>{
        this.setState({userName: e.target.value});
    }
    
    setEmail=(e)=>{
        this.setState({email: e.target.value});
    }

    render() {
      let {name, userName, email} = this.state;
      const {userToUpdate}=this.props;
          return (
            <div className="column">
                <Input 
                    label={'Name'}
                    value={name}
                    placeholder={"Text input"}
                    onChange={this.setName}
                />
                <Input 
                    label={'Username'}
                    value={userName}
                    placeholder={"Username"}
                    onChange={this.setUserName}
                    disabled={Boolean(userToUpdate)}
                />

                <Input 
                    label={'Email'}
                    value={email}
                    placeholder={"Email"}
                    onChange={this.setEmail}
                    inputType={'email'}
                />

                <div className="field is-grouped">
                    <Button 
                        buttonClass={'button is-link'}
                        onClick={this.submit}
                        label={'Submit'}
                    />
                    <Button 
                        buttonClass={'button is-link is-light'}
                        onClick={this.props.closeModal}
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