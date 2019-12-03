import * as actions from '../actions';

export const openModal = () => {
  return {
    type: actions.OPEN_MODAL
  };
};

export const closeModal = () => {
  return {
    type: actions.CLOSE_MODAL
  };
};

export const addUser = (name, userName, email, role) => {
  return {
    type: actions.ADD_USER,
    user: {
      name,
      userName,
      email,
      role
    }
  };
};

export const openModalAndSetUserToUpdate = userName => {
  return {
    type: actions.SET_USET_TO_EDIT,
    userToUpdate: userName
  };
};

export const updateUser = (name, userName, email, role) => {
  return {
    type: actions.UPDATE_USER,
    name,
    userName,
    email,
    role
  };
};

export const deleteUser = userName => {
  return {
    type: actions.DELETE_USER,
    userName
  };
};
