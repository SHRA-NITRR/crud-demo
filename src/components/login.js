/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import Input from './common/input';
import Button from './common/button';

const LoginPage = props => {
  return (
    <div className="card log-in">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">Log In</p>
          </div>
        </div>
        <Input
          inputType="email"
          placeholder="email"
          onChange={props.setEmail}
          value={props.email}
          label="User Name"
        />
        <Input
          inputType="password"
          placeholder="Password"
          onChange={props.setPassword}
          value={props.password}
          label="Password"
        />
        <Button className="button is-success" onClick={props.onSubmit} />
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default LoginPage;
