/*РОДИТЕЛЬ*/
import styles from "../Card/card.module.css";
import { useState, useEffect } from "react";
import CardSlieder from "./CardSlider";
import useLocalStorage from "../hooks/useLocalStorage";

const CardContent = ({ index = 0 }) => {
  const [items, setItems] = useLocalStorage("speakingCards", []);
  const [currentIndex, setCurrentIndex] = useState(index);
  const [wordsLearned, setWordsLearned] = useState(0);

  useEffect(() => {
    if (currentIndex >= items.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, items.length]);

  const clickButton = () => {
    setWordsLearned((prevCount) => prevCount + 1);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.words}>Изучено слов: {wordsLearned}</p>
      <CardSlieder
        items={items}
        currentIndex={currentIndex}
        clickButton={clickButton}
      />
    </div>
  );
};

export default CardContent;
