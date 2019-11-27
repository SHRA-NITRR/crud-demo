import {connect} from 'react-redux';
import AddUserModal from './add-modal';
import {closeModal, addUser, updateUser} from '../action-creators/add-user';


const mapStateToProps = ({addUser}, ownprops) => {  
    const userObjectToUpdate = addUser.userList.find( ({ userName }) => userName === addUser.userToUpdate ); 
    if(userObjectToUpdate){
        return {
           ... userObjectToUpdate,
           isModalOpen: addUser.isModalOpen,
           userToUpdate: addUser.userToUpdate
        }
    }
    return {
            isModalOpen: addUser.isModalOpen
        };
}

const mapDispatchToProps = (dispatch) => {
    return {
      closeModal: () => dispatch(closeModal()),
      addUser: (name, userName, email)=> dispatch(addUser(name, userName, email)),
      updateUser: (name, userName, email)=> dispatch(updateUser(name, userName, email))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUserModal);