import React, { useContext, Fragment, useEffect } from 'react';
import { ChatContext } from '../../contexts/chat.context';
import ChatBox from '../chat-box/chat-box.component';
import Header from '../header/header.component';
import SendButton from '../send-button/send-button';
import WaButton from '../wa-button/wa-button.component';
import styles from './app.module.css';

const App = (props) => {
    const { isChatOpen, setIsChatOpen } = useContext(ChatContext);

    useEffect(() => {
        if (props.open) {
            setIsChatOpen(true);
        }
    }, [props.open, setIsChatOpen]);

    // Close the chat with the Escape key (listener cleaned up on unmount/close)
    useEffect(() => {
        if (!isChatOpen) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsChatOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isChatOpen, setIsChatOpen]);

    return (
        <Fragment>
            <div
                id="whatsapp-chat-box"
                role="dialog"
                aria-modal="false"
                aria-label={`Chat with ${props.companyName || 'us'} on WhatsApp`}
                aria-hidden={!isChatOpen}
                className={`${styles.root} ${
                    isChatOpen ? styles.open : styles.close
                } ${props.position === 'left' ? styles.positionLeft : styles.positionRight}`}
            >
                <Header {...props} />
                <ChatBox {...props} />
                <SendButton {...props} />
            </div>
            <WaButton {...props} />
        </Fragment>
    );
};

export default App;
