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
                <img src='/icons/inverseGithub.webp' alt="GitHub" />
            </a>
            <a href='https://www.linkedin.com/in/evan-trafton'>
                <img src='/icons/inverseLinkedIn.webp' alt="LinkedIn" />
            </a>
            <a href="#resume" onClick={(event) => { event.preventDefault(); openModal(); }}>
                <img src='/icons/inverseResume.webp' alt="Resume" />
            </a>
            {isModalOpen && <Modal onClose={closeModal} />}
        </div>
    );
}

export default NavIcons;