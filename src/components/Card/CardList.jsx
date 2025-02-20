const CardList = [
  {
    id: "33123",
    english: "rain",
    transcription: "[ reɪn ]",
    russian: "идти дождю",
    tags: "",
  },
  {
    id: "33124",
    english: "curious",
    transcription: "[ ˈkjʊrɪəs ]",
    russian: "любопытный",
    tags: "emotions",
  },
  {
    id: "33126",
    english: "grateful",
    transcription: "[ ɡreɪtfl ]",
    russian: "благодарный",
    tags: "emotions",
  },
  {
    id: "33128",
    english: "witch",
    transcription: "[ wɪtʃ ]",
    russian: "ведьма",
    tags: "halloween",
  },
  {
    id: "33131",
    english: "brouhaha",
    transcription: "[ˈbruːhɑːhɑː]",
    russian: "шумиха",
    tags: " ",
  },
  {
    id: "33132",
    english: "patience",
    transcription: "[ˈpeɪʃns]",
    russian: "терпение",
    tags: " ",
  },
  {
    id: "33133",
    english: "star",
    transcription: "[stɑːr]",
    russian: "звезда",
    tags: " ",
  },
  {
    id: "33134",
    english: "toast",
    transcription: "[təʊst]",
    russian: "тост",
    tags: " ",
  },
  {
    id: "33135",
    english: "bamboozle",
    transcription: "[bamˈbuːzl]",
    russian: "одурачить",
    tags: " emotions",
  },
  {
    id: "33137",
    english: "success",
    transcription: "[səkˈses]",
    russian: "успех",
    tags: "success",
  },
  {
    id: "33138",
    english: "word",
    transcription: "[w3:d]",
    russian: "слово",
    tags: "1",
  },
];

localStorage.setItem("speakingCards", JSON.stringify(CardList));

export default CardList;

/*
function saveDataToLocalStorage(cardList) {
  try {
    localStorage.setItem("speakingCards", JSON.stringify(cardList));
    console.log("Данные успешно сохранены в localStorage");
  } catch (error) {
    console.error("Ошибка при сохранении в localStorage:", error);
  }
}

// Вызываем функцию после изменения данных
saveDataToLocalStorage(CardList);
*/
