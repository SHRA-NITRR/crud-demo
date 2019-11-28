import React from 'react';
import PropTypes from "prop-types";
import User from '../containers/user-container';
import AddUserModal from '../containers/add-modal-container';

const Users=(props)=>{
    return(
        <article className="panel is-primary">
            <p className="panel-heading">
             {'Users'}
            </p>
            <div className="columns">
                
                <div className="column margin-add-button">
                    <button 
                        className="button is-link is-pulled-right" 
                        onClick ={props.openModal}
                    >
                        {'ADD  USER'}
                    </button>
                </div>
            </div>
            <div className="card">
                <div className="card-content">
                    {props.users.length>0?
                    props.users.map((user)=>
                    {
                        return (
                            <User
                                name={user.name}
                                userName={user.userName}
                                key={user.name}
                            />
                            )
                    }): <div>{'NO USER FOUND'}</div>}
                </div>
            </div>
            <AddUserModal/>
        </article>

    );
}

Users.propTypes = {
    openModal: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
};

export default Users;