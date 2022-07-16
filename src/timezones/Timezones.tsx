import { getGreetingByDate } from "./getGreetingByDate";

type ComponentProps = {
  message: string;
};
const Component: React.FC<ComponentProps> = ({ message }) => (
  <div>
    <p>{message}</p>
  </div>
);

export const Container: React.FC = () => {
  const message = getGreetingByDate(new Date());

  return <Component message={message} />;
};
