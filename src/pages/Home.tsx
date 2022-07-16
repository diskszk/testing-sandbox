import { Link } from "react-router-dom";

export const HomePage: React.FC = () => {
  return (
    <div>
      <h1>HOME</h1>
      <nav>
        <Link to={"timezones"}>Timezones</Link>
      </nav>
    </div>
  );
};
