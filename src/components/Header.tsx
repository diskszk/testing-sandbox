import { Link } from "react-router-dom";
import styles from "../styles/Header.module.scss";

type Props = {
  heading: string;
};

export const Header: React.FC<Props> = ({ heading }) => {
  return (
    <header>
      <div>
        <nav className={styles.topnav}>
          <Link to={"/"} className={`${heading === "home" && styles.active}`}>
            Home
          </Link>
          <Link
            to={"/timezones"}
            className={`${heading === "timezones" && styles.active}`}
          >
            Timezones
          </Link>

          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </nav>
      </div>
      <h1>{heading}</h1>
    </header>
  );
};
