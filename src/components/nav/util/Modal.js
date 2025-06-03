import React from 'react';
import './Modal.css'; // Create a CSS file for styling the modal

import resumePdf from "../../../assets/evan-trafton-resume.pdf"; 


const Modal = ({ onClose }) => {
    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content' onClick={onClose}>
                <a className='resume-download'
                
                          href={resumePdf}
                          download="Evan_Trafton_Resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                
            
                    <img
                        src="/icons/download.webp" 
                        alt="YouTube"
                    />
                    <div className='resume-text'>Download</div>
                </a>

                <div className='resume-content'>
                    <img src='/images/resume.webp'/>
                </div>
            </div>
        </div>
    );
};

export default Modal;
