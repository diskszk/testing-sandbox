import { Message } from "./Message";
import { MessageProvider } from "./MessageContext";
import { MessageInput } from "./MessageInput";

export const MessageWrapper: React.FC = () => {
  return (
    <MessageProvider>
      <Message />
      <MessageInput />
    </MessageProvider>
  );
};
