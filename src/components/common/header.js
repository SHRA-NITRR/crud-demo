import React from 'react';
import Button from './button';

const Header = props => {
  const { logOut } = props;
  return (
    <nav id="navbar" className="bd-navbar navbar has-shadow is-spaced">
      <div className="container">
        <div className="navbar-brand">
          <span> Student Progess Monitor</span>
        </div>
      </div>
      <Button
        className="button is-danger"
        onClick={logOut}
        label="LOGOUT"
        mainClass="contral align-right"
      />
    </nav>
  );
};

export default Header;
