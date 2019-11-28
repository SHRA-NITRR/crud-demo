import {connect} from 'react-redux';
import AddUserModal from '../components/add-modal';
import {closeModal, addUser, updateUser} from '../action-creators/add-user';


const mapStateToProps = ({addUser}, ownprops) => {  
    const userObjectToUpdate = addUser.userList.find( ({ userName }) => userName === addUser.userToUpdate ); 
    if(userObjectToUpdate){
        return {
           ...userObjectToUpdate,
           isModalOpen: addUser.isModalOpen,
           userToUpdate: addUser.userToUpdate,
           userList: addUser.userList
        }
    }
    return {
            isModalOpen: addUser.isModalOpen,
            userToUpdate: addUser.userToUpdate,
            userList: addUser.userList
        };
}

const mapDispatchToProps = (dispatch) => {
    return {
      closeModal: () => dispatch(closeModal()),
      addUser: (name, userName, email, role)=> dispatch(addUser(name, userName, email, role)),
      updateUser: (name, userName, email, role)=> dispatch(updateUser(name, userName, email, role))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUserModal);