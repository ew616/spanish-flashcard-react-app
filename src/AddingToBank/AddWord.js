import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewWordForm from "./NewWordForm";
import _ from "lodash";
import addToStorage from './addToStorage'

//Makes a new object in bank for users input with word info and uuid and pushes the new object to our master
//When word is added it will render it in a dynamic list
function AddWord({ currentBank }) {
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


  //Need to attach a piece of state to the table for this and for update
  function deleteFromStorage(word) {
    const wordToDelete = currentBank.find(t => t.id === word.id);
    const filteredData = currentBank.filter((w) => w !== wordToDelete)

    // Saving
    localStorage.setItem("wordBank", JSON.stringify(filteredData));
}

// function updateStorage(word) {
//   const wordToUpdate = currentBank.find(t => t.id === word.id);
//   wordToUpdate.spanishWord = word

//   task.spanishWord = data.title;
//   task.englishWord = data.description;

//   // Saving
//   localStorage.setItem("wordBank", JSON.stringify(filteredData));
// }

  return (
    <div>
      <NewWordForm addNewWord={addNewWord} />

      <h3 className="word-bank-title">My Word Bank</h3>

      <div className="word-bank-container">
        <ul className="word-bank-list">
          {words.map((word) => {
            return (
            <div>
              <li key={word.id}>
                {_.startCase(_.camelCase(word.spanishWord))}: {" "}
                {_.startCase(_.camelCase(word.englishWord))}
              </li>

              <button onClick={deleteFromStorage(word)}>Delete</button>
            </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default AddWord;
