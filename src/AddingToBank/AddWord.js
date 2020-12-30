import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import NewWordForm from "./NewWordForm";
import _ from "lodash";
// import addToStorage from './addToStorage'

//Makes a new object in bank for users input with word info and uuid and pushes the new object to our master
//When word is added it will render it in a dynamic list
function AddWord() {
  const currentBank = JSON.parse(localStorage.getItem('wordBank') || '[]')

  const [words, setWords] = useState(currentBank);

  const addNewWord = (a, b) => {
    let newWord = {
      spanishWord: _.startCase(a),
      englishWord: _.startCase(b),
      id: uuid(),
      count: words.length + 1,
    };

    setWords([...words, newWord]);
  };

  useEffect(() => {
    let newBank = [...words]
    localStorage.setItem('wordBank', JSON.stringify(newBank));
  }, [words]);

    function addToStorage(newWord) { 
      let newBank = [...words, newWord];
      console.log(newBank);
      localStorage.setItem('wordBank', JSON.stringify(newBank));
  };

  return (
    <div>
      <NewWordForm addNewWord={addNewWord} />

      <h3 className="word-bank-title">My Word Bank</h3>

      <div className="word-bank-container">
        <ul className="word-bank-list">
          {words.map((word) => {
            return (
            <div key={word.id}>
              <li key={word.id}>
                {_.startCase(_.camelCase(word.spanishWord))}: {" "}
                {_.startCase(_.camelCase(word.englishWord))}
              </li>

              {/* <button onClick={deleteFromStorage(word)}>Delete</button> */}
            </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default AddWord;
