import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewWordForm from "./NewWordForm";

function AddWord() {
  const blankWord = {
    spanishWord: "",
    englishWord: "",
    id: "",
  };

  const [words, setWords] = useState([
    { id: 1, spanishWord: "pie", englishWord: "foot" },
    { id: 2, spanishWord: "pollo", englishWord: "chicken" },
    { id: 3, spanishWord: "pastilla", englishWord: "pill" },
  ]);

  const addNewWord = (a, b) => {
    setWords([...words, { spanishWord: a, englishWord: b, id: uuid() }]);
  };

  return (
    <div>
      <ul>
        {words.map((word) => {
          return (
            <li key={word.id}>
              {word.spanishWord}: {word.englishWord}
            </li>
          );
        })}
      </ul>

      <NewWordForm addNewWord={addNewWord} />
    </div>
  );
}

export default AddWord;
