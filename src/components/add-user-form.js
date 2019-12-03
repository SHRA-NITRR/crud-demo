import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './common/input';
import Button from './common/button';
import Select from './common/select';
import { validateEmail } from '../utility/validate-email';
import { userRoles } from '../constants';

class AddUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      userName: '',
      name: '',
      role: '',
      isModalOpen: true,
      error: {
        emailValid: true,
        userNameValid: true,
        nameValid: true,
        roleValid: true
      }
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isModalOpen !== prevState.isModalOpen) {
      return {
        error: {
          emailValid: true,
          userNameValid: true,
          nameValid: true,
          roleValid: true
        }
      };
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    const { email, userName, name, userToUpdate } = this.props;
    if (prevProps.userToUpdate !== userToUpdate) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        email,
        userName,
        name
      });
    }
  }

  resetState = () => {
    this.setState({
      email: '',
      userName: '',
      name: '',
      role: '',
      error: {
        emailValid: true,
        userNameValid: true,
        nameValid: true,
        roleValid: true
      }
    });
  };

  validateBeforeSubmit = (name, userName, email, roleValid) => {
    const error = {
      emailValid: true,
      userNameValid: true,
      nameValid: true,
      roleValid: true
    };
    const { userToUpdate } = this.props;
    if (userToUpdate === '' && !this.validateUserName(userName)) {
      error.userNameValid = false;
    }
    if (!validateEmail(email)) {
      error.emailValid = false;
    }
    if (name.length === 0) {
      error.nameValid = false;
    }
    if (roleValid.length === 0) {
      error.roleValid = false;
    }
    this.setState({
      error
    });

    return Object.keys(error).every(key => error[key] === true);
  };

  submit = () => {
    const { name, userName, email, role } = this.state;
    const { userToUpdate, addUser, updateUser } = this.props;

    if (this.validateBeforeSubmit(name, userName, email, role)) {
      if (userToUpdate) {
        updateUser(name, userName, email, role);
      } else {
        addUser(name, userName, email, role);
      }
      this.resetState();
    }
  };

  setName = e => {
    const name = e.target.value;
    this.setState(prevState => ({
      name,
      error: {
        ...prevState.error,
        nameValid: name.length > 0
      }
    }));
  };

  validateUserName = userName => {
    const { userList } = this.props;
    return (
      userName !== '' && !userList.some(user => user.userName === userName)
    );
  };

  setUserName = e => {
    const userName = e.target.value;
    const { error } = this.state;
    this.setState({
      userName: e.target.value,
      error: {
        ...error,
        userNameValid: this.validateUserName(userName)
      }
    });
  };

  setEmail = e => {
    const email = e.target.value;
    const { error } = this.state;
    this.setState({
      email,
      error: {
        ...error,
        emailValid: validateEmail(email)
      }
    });
  };

  setRole = role => {
    this.setState({
      role
    });
  };

  cancel = () => {
    const { closeModal } = this.props;
    this.resetState();
    closeModal();
  };

  render() {
    const { name, userName, email, error, role } = this.state;

    const { userToUpdate } = this.props;
    return (
      <div className="column">
        <Input
          label="Name"
          value={name}
          placeholder="Text input"
          onChange={this.setName}
          inputClass={error.nameValid ? 'input' : 'input is-danger'}
          message={error.nameValid ? '' : 'This Field Is Required!'}
          messageClass="is-danger"
        />
        <Select
          selectPlaceholder="--- Select a Role ---"
          selectOptions={userRoles}
          handleSelect={this.setRole}
          selectedValue={role}
          label="Role"
          selectClass={error.roleValid ? 'select' : 'select is-danger'}
          message={error.roleValid ? '' : 'Select a valid role'}
          messageClass="is-danger"
        />

        <Input
          label="Username"
          value={userName}
          placeholder="Username"
          onChange={this.setUserName}
          disabled={Boolean(userToUpdate)}
          inputClass={
            error.userNameValid || userToUpdate ? 'input' : 'input is-danger'
          }
          message={
            error.userNameValid || userToUpdate
              ? ''
              : 'Invalid UserName or Already Exists!'
          }
          messageClass="is-danger"
        />

        <Input
          label="Email"
          value={email}
          placeholder="Email"
          onChange={this.setEmail}
          inputType="email"
          inputClass={error.emailValid ? 'input' : 'input is-danger'}
          message={error.emailValid ? '' : 'Invalid Email!'}
          messageClass="is-danger"
        />

        <div className="field is-grouped">
          <Button
            buttonClass="button is-link"
            onClick={this.submit}
            label="Submit"
          />
          <Button
            buttonClass="button is-link is-light"
            onClick={this.cancel}
            label="Cancel"
          />
        </div>
      </div>
    );
  }
}

AddUserForm.defaultProps = {
  email: '',
  userName: '',
  name: ''
};

AddUserForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  email: PropTypes.string,
  userName: PropTypes.string,
  name: PropTypes.string
};

export default AddUserForm;
