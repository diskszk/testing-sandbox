import React, { useState } from "react";
import { useMessageSetValue } from "./MessageContext";

export const MessageInput: React.FC = () => {
  const [text, setText] = useState("");

  const setMessage = useMessageSetValue();

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setText(ev.target.value);
  };

  const handleClick = () => {
    if (!text) {
      return;
    }
    setMessage({ text });
    setText("");
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClick}>更新</button>
    </div>
  );
};
