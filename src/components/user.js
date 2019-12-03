import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
  const {
    userName,
    name,
    role,
    openModalAndSetUserToUpdate,
    deleteUser
  } = props;
  return (
    <div className="columns user-item">
      <div className="column is-10">
        <div className="columns">
          <div className="column">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{name}</p>
              </div>
            </div>
          </div>
          <div className="column">
            <span className="title  is-6">{role}</span>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="columns">
          <div className="column">
            <button
              className="button is-warning"
              onClick={() => openModalAndSetUserToUpdate(userName)}
              type="button"
            >
              EDIT
            </button>
          </div>
          <div className="column">
            <button
              className="button is-danger"
              onClick={() => deleteUser(userName)}
              type="button"
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  openModalAndSetUserToUpdate: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default User;
