import React, { useState, useEffect } from "react";
import MasterWordBank from "./MasterWordBank";
import Flashcard from "./Flashcard";
import { MDBBtn } from "mdbreact";


function GenerateAllCards() {
  const [flashcards, setFlashcards] = useState([]);

  const generateCards = () => {
    setFlashcards(MasterWordBank);
    console.log(flashcards);
  };

  return (
    <div>

      <div className='centered'>
          <MDBBtn color="indigo" onClick={generateCards}>Generate All Flashcards</MDBBtn>
      </div>
      <br />

      <div className="card-grid-container">
        <div className="card-grid">
          {flashcards.map((word) => (
            <div key={word.id} className='centered'>
              <Flashcard
                spanishWord={word.spanishWord}
                englishWord={word.englishWord}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GenerateAllCards;
