import { useCallback, useState } from "react";
import { getGreetingByDate } from "./getGreetingByDate";

type ComponentProps = {
  date: Date;
  message: string;
  handleClick: () => void;
};
const Component: React.FC<ComponentProps> = ({
  date,
  message,
  handleClick,
}) => (
  <div>
    <p>現在の時刻: {date.toISOString()}</p>
    <p>挨拶: {message}</p>
    <button onClick={handleClick}>更新</button>
  </div>
);

export const Container: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const handleClick = useCallback(() => {
    setDate(new Date());
  }, []);

  const message = getGreetingByDate(date);

  return <Component date={date} message={message} handleClick={handleClick} />;
};
