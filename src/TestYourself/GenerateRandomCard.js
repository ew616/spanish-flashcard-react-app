import React, { useState, useEffect } from "react";
import Flashcard from "../Flashcard";
import _, { indexOf } from "lodash";

//Uses lodash to shuffle the current Word Bank array, then displays the first item, each click will generate a new order so you can get same words more than once
//Then pushes the random first item into a flashcard and renders
function GenerateRandomCard() {
  const currentBank = JSON.parse(localStorage.getItem("wordBank") || "[]");
  const [randomCard, setRandomCard] = useState([]);

  const generateRandomCard = async () => {
    const shuffled = await _.shuffle(currentBank);

    setRandomCard(shuffled[0]);
  };

  const final = (
    <Flashcard
      spanishWord={randomCard.spanishWord}
      englishWord={randomCard.englishWord}
    />
  );

  return (
    <div>
      <button className="generateRandomCardButton" onClick={generateRandomCard}>
        Generate Random Flashcard
      </button>

      <div key={randomCard.id} className="container">
        {final}
      </div>
    </div>
  );
}

export default GenerateRandomCard;
