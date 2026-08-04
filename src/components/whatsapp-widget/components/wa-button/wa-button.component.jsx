import React, { useContext } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { ChatContext } from '../../contexts/chat.context';
import styles from './wa-button.module.css';

const defaultProps = {
    position: 'right',
};

const WaButton = ({ position = defaultProps.position }) => {
    const { isChatOpen, setIsChatOpen } = useContext(ChatContext);

    const handleToggle = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <button
            type="button"
            aria-label={isChatOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
            aria-expanded={isChatOpen}
            aria-controls="whatsapp-chat-box"
            className={`${styles.root} ${
                position === 'left' ? styles.positionLeft : styles.positionRight
            }`}
            onClick={handleToggle}
        >
            <FaWhatsapp aria-hidden="true" focusable="false" />
        </button>
    );
};

export default WaButton;
