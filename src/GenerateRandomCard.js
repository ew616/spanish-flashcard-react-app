import React, { useState, useEffect } from "react";
import MasterWordBank from "./MasterWordBank";
import Flashcard from "./Flashcard";
import _, { indexOf } from "lodash";

function GenerateRandomCard() {
  const [randomCard, setRandomCard] = useState([]);

  const generateRandomCard = async () => {
      const shuffled = await _.shuffle(MasterWordBank);

      setRandomCard(shuffled[0]);
  };
  
  const final = <Flashcard spanishWord={randomCard.spanishWord} englishWord={randomCard.englishWord}/>

  return (
    <div>

      <button className='generateRandomCardButton' onClick={generateRandomCard}>Generate Random Flashcard</button>

      <div key={randomCard.id} className='container'>{final}</div>
    </div>
  );
}

export default GenerateRandomCard;
