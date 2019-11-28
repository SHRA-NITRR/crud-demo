import React from 'react';
import PropTypes from "prop-types";

const User=(props)=>{
    return(
        <div className="columns user-item">
            <div className="column is-10">
                <div className="columns">
                    <div className="column">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">
                                    {props.name}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <span className="title  is-6">
                            {props.role}
                        </span>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="columns">
                <div className="column">
                    <button 
                        className="button is-warning"
                        onClick={()=>props.openModalAndSetUserToUpdate(props.userName)}
                    >
                        {'EDIT'}
                    </button>
                </div>
                <div className="column">
                    <button 
                        className="button is-danger"
                        onClick={()=>props.deleteUser(props.userName)}
                    >
                        {'DELETE'}
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}

User.propTypes = {
    openModalAndSetUserToUpdate: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default User;