import React, { useState, useEffect } from "react";
import MasterWordBank from "./MasterWordBank";
import Flashcard from "./Flashcard";
import WordBankCardList from "./WordBankCardList";

function GenerateAllCards() {
  const [flashcards, setFlashcards] = useState([]);

  const generateCards = () => {
    setFlashcards(MasterWordBank);
    console.log(flashcards);
  };

  return (
    <div>
      <button onClick={generateCards}>Generate All Flashcards</button>

      <br />

      <div className="card-grid">
        {flashcards.map((word) => (
          <div key={word.id}>
            <Flashcard
              spanishWord={word.spanishWord}
              englishWord={word.englishWord}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GenerateAllCards;
