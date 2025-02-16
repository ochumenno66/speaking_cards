/*РЕБЕНОК*/
import PropTypes from "prop-types";
import { useState } from "react";
import styles from "../Card/card.module.css";

const Card = (props) => {
  const [translationVisible, setTranslationVisible] = useState(false);

  const handleTranslation = () => {
    setTranslationVisible(true);
  };

  return (
    <div className={styles.card} {...props}>
      <h1 className={styles.english}>{props.english}</h1>
      <p className={styles.transcription}>{props.transcription}</p>
      {!translationVisible && (
        <button onClick={handleTranslation} className={styles.translateButton}>
          Показать перевод
        </button>
      )}
      {translationVisible && (
        <h3 className={styles.russian}>{props.russian}</h3>
      )}
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  english: PropTypes.string,
  transcription: PropTypes.string,
  russian: PropTypes.string,
};

export default Card;
