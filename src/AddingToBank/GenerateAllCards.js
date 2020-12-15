import React, { useState, useEffect } from "react";
import Flashcard from "../TestYourself/Flashcard";
import { MDBBtn } from "mdbreact";

//Makes a button and then maps through current Word Bank, generates a flashcard for each object in bank
function GenerateAllCards() {
  const [flashcards, setFlashcards] = useState([]);

  const generateCards = () => {
    const currentBank = JSON.parse(localStorage.getItem("wordBank") || "[]");
    setFlashcards(currentBank)
    console.log(flashcards);
  };

  return (
    <div>
      <div className="centered">
        <MDBBtn color="indigo" onClick={generateCards}>
          Generate All Flashcards
        </MDBBtn>
      </div>
      <br />

      <div className="card-grid-container">
        <div className="card-grid">
          {flashcards.map((word) => (
            <div key={word.id} className="centered">
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
