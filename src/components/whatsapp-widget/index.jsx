import React from 'react';
import App from './components/app/app.component.jsx';
import { ChatProvider } from './contexts/chat.context.jsx';

export const WhatsAppWidget = (props) => {
    return (
        <ChatProvider>
            <App {...props} />
        </ChatProvider>
    );
};
