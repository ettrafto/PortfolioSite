import React, {useState}from 'react';
import Modal from './util/Modal';

import './NavIcons.css'

const NavIcons = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='icons-container'>
            <a href='https://github.com/ettrafto'>
                <img src='/icons/inverseGithub.png'/>
            </a>
            <a href='https://www.linkedin.com/in/evan-trafton'>
                <img src='/icons/inverseLinkedIn.png'/>
            </a>
            <a onClick={openModal}>
                <img src='/icons/inverseResume.png'/>
            </a>
            {isModalOpen && <Modal onClose={closeModal} />}
        </div>
    );
}

export default NavIcons;