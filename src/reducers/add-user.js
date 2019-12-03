import * as actions from '../actions';

const deleteUserAndReturn = (users, userNameToDelete) => {
  return users.filter(user => user.userName !== userNameToDelete);
};

const updateUserAndReturn = (users, name, userName, email, role) => {
  return users.map(user => {
    if (user.userName === userName) {
      return {
        ...user,
        name,
        email,
        role
      };
    }
    return user;
  });
};
const addUserTostate = (state, action) => {
  return {
    ...state,
    userList: [...state.userList, action.user],
    isModalOpen: false,
    userToUpdate: ''
  };
};

const setUserTOEdit = (state, action) => {
  return {
    ...state,
    userToUpdate: action.userToUpdate,
    isModalOpen: true
  };
};

const updateUser = (state, action) => {
  return {
    ...state,
    userList: updateUserAndReturn(
      state.userList,
      action.name,
      action.userName,
      action.email,
      action.role
    ),
    isModalOpen: false,
    userToUpdate: ''
  };
};

const deleteUser = (state, action) => {
  return {
    ...state,
    userList: deleteUserAndReturn(state.userList, action.userName)
  };
};

const closeModal = state => {
  return {
    ...state,
    isModalOpen: false,
    userToUpdate: ''
  };
};

const openModal = state => {
  return {
    ...state,
    isModalOpen: true
  };
};

const addUser = (
  state = { userList: [], isModalOpen: false, userToUpdate: '' },
  action
) => {
  const actionHandlers = {
    [actions.ADD_USER]: addUserTostate,
    [actions.SET_USET_TO_EDIT]: setUserTOEdit,
    [actions.UPDATE_USER]: updateUser,
    [actions.DELETE_USER]: deleteUser,
    [actions.CLOSE_MODAL]: closeModal,
    [actions.OPEN_MODAL]: openModal
  };
  const reducer = actionHandlers[action.type];

  return reducer ? reducer(state, action) : state;
};

export default addUser;
