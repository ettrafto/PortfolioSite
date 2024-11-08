import React from 'react';
import './Modal.css'; // Create a CSS file for styling the modal

const Modal = ({ onClose }) => {
    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content' onClick={onClose}>
                <div className='resume-content'>
                    <img src='/images/resume.png'/>
                </div>
            </div>
        </div>
    );
};

export default Modal;
