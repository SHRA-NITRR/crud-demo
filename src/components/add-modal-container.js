import {connect} from 'react-redux';
import AddUserModal from './add-modal';
import {closeModal} from '../action-creators/add-user';

const mapStateToProps = (state, ownprops) => {    
    return {
        isModalOpen: state.addUser.isModalOpen
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      closeModal: () => dispatch(closeModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUserModal);