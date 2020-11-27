import React, { useState } from "react";
import Flashcard from "./Flashcard";

function WordBankCardList({ spanishWord, englishWord }) {
  const [word, setWord] = useState([]);

  const testWordBank = [
    {
      id: 1,
      spanishWord: "mano",
      englishWord: "hand",
    },
    {
      id: 2,
      spanishWord: "tenedor",
      englishWord: "fork",
    },
    {
      id: 3,
      spanishWord: "mascarilla",
      englishWord: "mask",
    },
  ];

  return (
    <div className='card-grid'>
      {testWordBank.map((word) => (
        <div key={word.id}>
          <Flashcard
            spanishWord={word.spanishWord}
            englishWord={word.englishWord}
          />
        </div>
      ))}
    </div>
  );
}

export default WordBankCardList;
