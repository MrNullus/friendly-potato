import { useState, useEffect, createContext, useReducer } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const AuthContext = createContext(AuthContext);
  const INITIAL_STATE = {
    chatId: "null",
    user: {}
  };

  chatReducer = (state, acition) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId: 
          currentUser.uid > action.payload.uid 
            ? currentUser.uid + action.payload.uid 
            : action.payload.uid + currentUser.uid,
        };
    
      default:
        return state;
    }
  };

  const [state, dispath] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{
      state: { state, dispath }
    }}>
      { children }
    </ChatContext.Provider>
  );
}


export { ChatContext, ChatContextProvider };