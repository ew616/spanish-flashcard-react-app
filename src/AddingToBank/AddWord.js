import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewWordForm from "./NewWordForm";
import _ from "lodash";
import addToStorage from './addToStorage'

//Makes a new object in bank for users input with word info and uuid and pushes the new object to our master
//When word is added it will render it in a dynamic list
function AddWord() {
  const currentBank = JSON.parse(localStorage.getItem("wordBank") || "[]");
  const [words, setWords] = useState(currentBank);

  const addNewWord = (a, b) => {
    const newWord = {
      spanishWord: _.startCase(_.camelCase(a)),
      englishWord: _.startCase(_.camelCase(b)),
      id: uuid(),
    };
    setWords([...words, newWord]);
    addToStorage(newWord);
  };

  return (
    <div>
      <NewWordForm addNewWord={addNewWord} />

      <h3 className="word-bank-title">My Word Bank</h3>

      <div className="word-bank-container">
        <ul className="word-bank-list">
          {currentBank.map((word) => {
            return (
              <li key={word.id}>
                {_.startCase(_.camelCase(word.spanishWord))} -- {" "}
                {_.startCase(_.camelCase(word.englishWord))}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default AddWord;
