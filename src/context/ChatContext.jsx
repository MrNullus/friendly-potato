import {
  createContext,
  useContext,
  useReducer,
} from "react";
import { AuthContext } from "./AuthContext";

const ChatContext = createContext();
const ChatContextProvider = ({ children }) => {
  const AuthContext = useContext(AuthContext);
  const INITIAL_STATE = {
    chatId: "null",
    user: {}
  };

  chatReducer = (state, action) => {
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
      data: { state, dispath }
    }}>
      { children }
    </ChatContext.Provider>
  );
}

export { ChatContext, ChatContextProvider };