import {connect} from 'react-redux';
import User from './user';
const mapStateToProps = (state, ownprops) => {    
    return {
        ...ownprops
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
}

export default connect(mapStateToProps)(User);