import React from 'react';
import ReactDOM from 'react-dom/client';

import { AuthContextProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
);
