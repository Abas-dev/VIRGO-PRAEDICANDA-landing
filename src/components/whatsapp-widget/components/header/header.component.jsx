import React, { useContext } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { ChatContext } from '../../contexts/chat.context';
import styles from './header.module.css';

const defaultProps = {
    companyName: 'Support',
    replyTimeText: 'Typically replies within a day',
};

const Header = ({
    CompanyIcon,
    companyName = defaultProps.companyName,
    replyTimeText = defaultProps.replyTimeText,
}) => {
    const { setIsChatOpen } = useContext(ChatContext);

    const handleClose = () => {
        setIsChatOpen(false);
    };

    return (
        <div className={styles.root}>
            <button
                type="button"
                className={styles.close_btn}
                onClick={handleClose}
                aria-label="Close chat"
            >
                <AiOutlineClose aria-hidden="true" focusable="false" />
            </button>
            <div className={styles.logo} aria-hidden="true">
                {(CompanyIcon && <CompanyIcon />) || <FaGraduationCap />}
            </div>
            <div className={styles.texts}>
                <span className={styles.texts_h1}>{companyName}</span>
                <span className={styles.texts_span}>{replyTimeText}</span>
            </div>
        </div>
    );
};

export default Header;
