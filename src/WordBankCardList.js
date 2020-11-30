import React, { useState } from "react";
import Flashcard from "./Flashcard";
import MasterWordBank from './MasterWordBank';

function WordBankCardList({ bank }) {
  return (
    <div className='card-grid'>
      {bank.map((word) => (
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
