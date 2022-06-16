import { useMessageValue } from "./MessageContext";

export const Message: React.FC = () => {
  const message = useMessageValue();

  return (
    <div>
      <p>{message.text}</p>
    </div>
  );
};
