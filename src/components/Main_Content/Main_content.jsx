/*НА ВИДЕО ОБУЧАЮЩЕМ ЭТОТ ФАЙЛ CONTENT.JSX НЕДЕЛЯ 22 И ДАЛЕЕ*/
import styles from "./main_content.module.css";
//import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import useLocalStorage from "../hooks/useLocalStorage";

const Main_Content = () => {
  const [items, setItems] = useLocalStorage("speakingCards", []);

  return (
    <main className={styles.main}>
      <ListItem items={items} />
    </main>
  );
};
export default Main_Content;

/*ЭТО ОДИН КОД
const Main_Content = () => {
  const [items, setItems] = useState([]);

  /*
  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("speakingCards")));
  }, []);
*/
/*ЭТО ОДИН КОД
  useEffect(() => {
    const Card = CardList.map((item) => ({
      id: item.id,
      english: item.english,
      transcription: item.transcription,
      russian: item.russian,
      tags: item.tags,
    }));
    setItems(Card);
  }, []);

  return (
    <main className={styles.main}>
      <ListItem items={items} />
    </main>
  );
};
export default Main_Content;
*/
