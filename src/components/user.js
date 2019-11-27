import React from 'react';

const User=(props)=>{
    return(
        <div className="columns user-item">
            <div className="column is-10">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">
                            {props.name}
                        </p>
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

export default User;