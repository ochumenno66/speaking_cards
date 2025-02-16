import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.title}>
          VocabVault
        </Link>
        <div className={styles.wrapper_nav}>
          <Link to="/search" className={styles.text}>
            ЛУПА
          </Link>
          <Link to="/game" className={styles.text}>
            Карточки слов
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
