import PropTypes from "prop-types";
import styles from "./main_content.module.css";
import { useState, useEffect } from "react";

const ListItem = ({ items }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(items);

  /*
  useEffect(() => {
    setInputValue(JSON.parse(localStorage.getItem("speakingCards")));
  }, []);
*/

  useEffect(() => {
    setInputValue(items);
  }, [items]);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setInputValue(items);
    setIsEditing(false);
  };

  const handleChange = (id, field, value) => {
    const newInputValue = inputValue.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setInputValue(newInputValue);
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Russian</th>
          <th>English</th>
          <th>Transcription</th>
          <th>Tags</th>
        </tr>
      </thead>
      <tbody>
        {inputValue.map((item) => (
          <tr key={item.id}>
            <td>
              <input
                className={styles.input}
                type="text"
                value={item.russian}
                onChange={(e) =>
                  handleChange(item.id, "russian", e.target.value)
                }
                disabled={!isEditing}
              />
            </td>
            <td>
              <input
                className={styles.input}
                type="text"
                value={item.english}
                onChange={(e) =>
                  handleChange(item.id, "english", e.target.value)
                }
                disabled={!isEditing}
              />
            </td>
            <td>
              <input
                className={styles.input}
                type="text"
                value={item.transcription}
                onChange={(e) =>
                  handleChange(item.id, "transcription", e.target.value)
                }
                disabled={!isEditing}
              />
            </td>
            <td>
              <input
                className={styles.input}
                type="text"
                value={item.tags}
                onChange={(e) => handleChange(item.id, "tags", e.target.value)}
                disabled={!isEditing}
              />
            </td>
            <td className={styles.button_wrapper}>
              <button className={styles.buttonSave} onClick={handleEdit}>
                {isEditing ? "Сохранить" : "редактировать"}
              </button>
              {isEditing && (
                <button className={styles.buttonCancel} onClick={handleCancel}>
                  Отмена редактирования
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ListItem.propTypes = {
  items: PropTypes.arrayOf,
  id: PropTypes.string.isRequired,
  russian: PropTypes.string,
  english: PropTypes.string,
  transcription: PropTypes.string,
  tags: PropTypes.string,
};

export default ListItem;

/*для проверки ошибки
  try {
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Russian</th>
            <th>English</th>
            <th>Transcription</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {inputValue.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  className={styles.input}
                  type="text"
                  value={item.russian}
                  onChange={(e) =>
                    handleChange(item.id, "russian", e.target.value)
                  }
                  disabled={!isEditing}
                />
              </td>
              <td>
                <input
                  className={styles.input}
                  type="text"
                  value={item.english}
                  onChange={(e) =>
                    handleChange(item.id, "english", e.target.value)
                  }
                  disabled={!isEditing}
                />
              </td>
              <td>
                <input
                  className={styles.input}
                  type="text"
                  value={item.transcription}
                  onChange={(e) =>
                    handleChange(item.id, "transcription", e.target.value)
                  }
                  disabled={!isEditing}
                />
              </td>
              <td>
                <input
                  className={styles.input}
                  type="text"
                  value={item.tags}
                  onChange={(e) =>
                    handleChange(item.id, "tags", e.target.value)
                  }
                  disabled={!isEditing}
                />
              </td>
              <td className={styles.button_wrapper}>
                <button className={styles.buttonSave} onClick={handleEdit}>
                  {isEditing ? "Сохранить" : "редактировать"}
                </button>
                {isEditing && (
                  <button
                    className={styles.buttonCancel}
                    onClick={handleCancel}
                  >
                    Отмена редактирования
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } catch (error) {
    console.error("Ошибка в компоненте ListItem:", error);
    return (
      <div>Произошла ошибка при отображении. Пожалуйста, попробуйте позже.</div>
    );
  }
};
*/
