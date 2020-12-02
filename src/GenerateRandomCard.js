import React, { useState, useEffect } from "react";
import MasterWordBank from "./MasterWordBank";
import Flashcard from "./Flashcard";
import _ from "lodash";

function GenerateRandomCard() {
  const [randomCard, setRandomCard] = useState([]);

    const generateRandomCard = async () => {
        const shuffled = await _.shuffle(MasterWordBank);

        setRandomCard(shuffled[0]);
  };

  return (
    <div>

      <button onClick={generateRandomCard}>Generate Random Flashcard</button>
    
      <div key={randomCard.id} className='container'>
        <Flashcard
          spanishWord={randomCard.spanishWord}
          englishWord={randomCard.englishWord}
        />
      </div>
    </div>
  );
}

export default GenerateRandomCard;
