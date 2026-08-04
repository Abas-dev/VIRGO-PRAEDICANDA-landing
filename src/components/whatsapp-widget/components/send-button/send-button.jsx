import React, { useContext, useEffect, useRef, useState } from 'react';
import { ChatContext } from '../../contexts/chat.context';
import styles from './send-button.module.css';

const defaultProps = {
    sendButtonText: 'Send',
    inputPlaceHolder: 'Type a message',
};

const SendButton = ({
    phoneNumber,
    inputPlaceHolder = defaultProps.inputPlaceHolder,
    sendButtonText = defaultProps.sendButtonText,
}) => {
    const [message, setMessage] = useState('');
    const { isChatOpen } = useContext(ChatContext);
    const inputRef = useRef(null);

    // Move focus into the input when the chat opens
    useEffect(() => {
        if (isChatOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isChatOpen]);

    const handleSend = (e) => {
        e.preventDefault();

        // wa.me expects digits only (country code + number, no "+", spaces or dashes)
        const sanitizedPhone = (phoneNumber || '').replace(/\D/g, '');
        if (!sanitizedPhone) {
            window.alert('Invalid phone number');
            return;
        }

        const trimmedMessage = message.trim();
        if (!trimmedMessage) {
            // Empty message guard: keep focus in the input instead of opening a blank chat
            if (inputRef.current) {
                inputRef.current.focus();
            }
            return;
        }

        window.open(
            `https://wa.me/${sanitizedPhone}?text=${encodeURIComponent(trimmedMessage)}`,
            '_blank',
            'noopener,noreferrer'
        );
        setMessage('');
    };

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <form className={styles.root} onSubmit={handleSend}>
            <input
                ref={inputRef}
                type="text"
                placeholder={inputPlaceHolder}
                aria-label={inputPlaceHolder}
                className={styles.input}
                onChange={handleChange}
                value={message}
            />
            <button type="submit" className={styles.button}>
                {sendButtonText}
            </button>
        </form>
    );
};

export default SendButton;
