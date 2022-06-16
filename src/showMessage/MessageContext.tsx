import React, { createContext, useContext, ReactNode, useState } from "react";
import { MessageState } from "./types";

const messageContext = createContext<MessageState>({
  text: "",
});

const setMessageContext = createContext<
  React.Dispatch<React.SetStateAction<MessageState>>
>(() => void 0);

export const useMessageValue = () => useContext(messageContext);
export const useMessageSetValue = () => useContext(setMessageContext);

type Props = {
  children: ReactNode;
};

export const MessageProvider: React.FC<Props> = ({ children }) => {
  const [message, setMessage] = useState<MessageState>({
    text: "",
  });

  return (
    <messageContext.Provider value={message}>
      <setMessageContext.Provider value={setMessage}>
        {children}
      </setMessageContext.Provider>
    </messageContext.Provider>
  );
};
