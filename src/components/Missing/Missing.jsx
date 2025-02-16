import styles from "./missing.module.css";
import img from "../../assets/404.png";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className={styles.error}>
      <img src={img} alt="404 Error" />

      <p className={styles.text}>
        Are we going back <Link to="/game">card</Link> or{" "}
        <Link to="/">home</Link>?
      </p>
    </main>
  );
};
export default Missing;
