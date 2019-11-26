import React from 'react';
import AddUserForm from './add-user-form';

const AddUserModal=(props)=>{
    const {isModalOpen}=props;
    const modalClass=isModalOpen? 'modal is-active': 'modal';
    return(
        <div className={modalClass}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                <p className="modal-card-title">Modal title</p>
                <button className="delete" aria-label="close" onClick={props.closeModal}></button>
                </header>
                <section className="modal-card-body">
                  <AddUserForm/>
                </section>
            </div>
        </div>
    )
}

export default AddUserModal;