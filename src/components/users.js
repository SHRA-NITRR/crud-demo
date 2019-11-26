import React from 'react';
import User from './user';
import AddUserModal from './add-modal';

const Users=(props)=>{
    return(
        <article className="panel is-primary">
            <p className="panel-heading">
             {'Users'}
            </p>
            <div className="columns">
                
            <div className="column margin-top-10">
                <button className="button is-link is-pulled-right" onClick ={props.openModal}>ADD  USER</button>
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
                                key={user.name}
                            />
                            )
                    }): <div>{'NO USER FOUND'}</div>}
                </div>
            </div>
            <AddUserModal isModalOpen={props.isModalOpen}/>
        </article>

    );
}

export default Users;