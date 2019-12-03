import { connect } from 'react-redux';
import User from '../components/user';
import {
  deleteUser,
  updateUser,
  openModalAndSetUserToUpdate
} from '../action-creators/add-user';

const mapStateToProps = (state, ownprops) => {
  return {
    ...ownprops
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: userName => dispatch(deleteUser(userName)),
    editUser: () => dispatch(updateUser('name', 'userName', 'email')),
    openModalAndSetUserToUpdate: userName =>
      dispatch(openModalAndSetUserToUpdate(userName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
