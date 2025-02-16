/*НА ВИДЕО ОБУЧАЮЩЕМ ЭТОТ ФАЙЛ CONTENT.JSX НЕДЕЛЯ 22 И ДАЛЕЕ*/
import styles from "./main_content.module.css";
import { useState, useEffect } from "react";
import ListItem from "./ListItem";

const Main_Content = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("speakingCards")));
  }, []);

  return (
    <main className={styles.main}>
      <ListItem items={items} />
    </main>
  );
};
export default Main_Content;
