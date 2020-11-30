import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewWordForm from "./NewWordForm";
import MasterWordBank from './MasterWordBank';

function AddWord() {
  const blankWord = {
    spanishWord: "",
    englishWord: "",
    id: "",
  };

  const [words, setWords] = useState(MasterWordBank);

  const addNewWord = (a, b) => {
    const newWord = {
      spanishWord: a, 
      englishWord: b, 
      id: uuid()
    }
    setWords([...words, newWord]);
    MasterWordBank.push(newWord);
    console.log(MasterWordBank)
  };

  return (
    <div>
      <NewWordForm addNewWord={addNewWord} />

      <h3>My Word Bank</h3> 

      <ul>
        {words.map((word) => {
          return (
            <li key={word.id}>
              {word.spanishWord}: {word.englishWord}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AddWord;
