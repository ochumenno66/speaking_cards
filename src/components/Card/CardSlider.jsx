/*РЕБЕНОК*/
import PropTypes from "prop-types";
import styles from "../Card/cardSlider.module.css";
import { useState } from "react";
import Card from "./Card";

const CardSlider = ({ items = [], clickButton }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={styles.slider}>
      <button
        onClick={handlePrev}
        className={styles.prev}
        disabled={currentIndex === 0}
      >
        &#8592;
      </button>
      <div className={styles.container}>
        {items.length > 0 ? (
          currentIndex < items.length ? (
            <div key={items[currentIndex].id} className={styles.card}>
              <Card {...items[currentIndex]} clickButton={clickButton} />
            </div>
          ) : (
            <div className={styles.empty}>
            <p>Нет доступных карточек</p>
          </div>
          )
        ) : (
          <div className={styles.empty}>
            <p>Нет доступных карточек</p>
          </div>
        )}
      </div>
      <button
        onClick={handleNext}
        className={styles.next}
        disabled={currentIndex === items.length - 1}
      >
        &#8594;
      </button>
    </div>
  );
};

CardSlider.propTypes = {
  items: PropTypes.array,
  clickButton: PropTypes.func,
};

export default CardSlider;

/*
const CardSlider = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={styles.slider}>
      <button
        onClick={handlePrev}
        className={styles.prev}
        disabled={currentIndex === 0}
      >
        &#8592;
      </button>
      <div className={styles.container}>
        {items.length > 0 ? (
          currentIndex < items.length ? (
            <div key={items[currentIndex].id} className={styles.card}>
              <Card {...items[currentIndex]} />
            </div>
          ) : (
            <div className={styles.empty}>
              <p>Все карточки пройдены</p>
            </div>
          )
        ) : (
          <div className={styles.empty}>
            <p>Нет доступных карточек</p>
          </div>
        )}
      </div>
      <button
        onClick={handleNext}
        className={styles.next}
        disabled={currentIndex === items.length - 1}
      >
        &#8594;
      </button>
    </div>
  );
};

CardSlider.propTypes = {
  items: PropTypes.array,
  //currentIndex: PropTypes.number,
};

export default CardSlider;
*/
