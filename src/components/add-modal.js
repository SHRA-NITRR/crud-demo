import React from 'react';
import PropTypes from 'prop-types';
import AddUserForm from './add-user-form';

const AddUserModal = props => {
  const {
    isModalOpen,
    email,
    userName,
    name,
    userToUpdate,
    closeModal,
    addUser,
    updateUser,
    userList
  } = props;

  const modalClass = isModalOpen ? 'modal is-active' : 'modal';
  const ModalHeader = userToUpdate ? 'Update User' : 'Add User';
  return (
    <div className={modalClass}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{ModalHeader}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={closeModal}
            type="button"
          />
        </header>
        <section className="modal-card-body">
          <AddUserForm
            addUser={addUser}
            updateUser={updateUser}
            closeModal={closeModal}
            email={email}
            userName={userName}
            name={name}
            userToUpdate={userToUpdate}
            userList={userList}
            isModalOpen={isModalOpen}
          />
        </section>
      </div>
    </div>
  );
};

AddUserModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  addUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  email: PropTypes.string,
  userName: PropTypes.string,
  name: PropTypes.string,
  userToUpdate: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  userList: PropTypes.array.isRequired
};
AddUserModal.defaultProps = {
  email: '',
  userName: '',
  name: ''
};

export default AddUserModal;
