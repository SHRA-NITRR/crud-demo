import {connect} from 'react-redux';
import User from './user';
const mapStateToProps = (state, ownprops) => {    
    return {
        ...ownprops
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      login: (email, password) => dispatch(login(email, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);