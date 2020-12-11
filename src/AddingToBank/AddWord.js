import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewWordForm from "./NewWordForm";
import MasterWordBank from '../MasterWordBank';
import _ from 'lodash';

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
  };

  return (
    <div>
      <NewWordForm addNewWord={addNewWord} />

      <h3 className='word-bank-title'>My Word Bank</h3> 

      <div className='word-bank-container'>
      <ul className='word-bank-list'>
        {words.map((word) => {
          return (
            <li key={word.id}>
              {_.startCase(_.camelCase(word.spanishWord))}: {_.startCase(_.camelCase(word.englishWord))}
            </li>
          );
        })}
      </ul>
      </div>
    </div>
  );
}

export default AddWord;