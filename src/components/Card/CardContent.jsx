/*РОДИТЕЛЬ*/
import styles from "../Card/card.module.css";
import { useState, useEffect } from "react";
import CardSlieder from "./CardSlieder";

const CardContent = ({ index = 0 }) => {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(index);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("speakingCards")));
  }, []);

  useEffect(() => {
    if (currentIndex >= items.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, items.length]);

  return (
    <div className={styles.wrapper}>
      <CardSlieder items={items} currentIndex={currentIndex} />
    </div>
  );
};

export default CardContent;
