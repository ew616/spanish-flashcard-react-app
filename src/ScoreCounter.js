import React, { useState, useEffect } from "react";
import GenerateRandomCard from './GenerateRandomCard'
import _, { indexOf } from "lodash";
import Flashcard from './Flashcard';
import MasterWordBank from './MasterWordBank'


function ScoreCounter() {
  const [count, setCount] = useState(0);
  const [totalClicks, setClicks] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [card, setCard] = useState([]);

  useEffect(() => {
    const newPercentage = ((count / totalClicks) * 100).toFixed(1);
    setPercentage(newPercentage);
  }, [count, totalClicks]);

  useEffect(() => {
    const shuffled = _.shuffle(MasterWordBank);

    setCard(shuffled[0]);    
  }, [totalClicks])

  function increment() {
    setClicks(totalClicks + 1);
    setCount(count + 1);
  }

  function decrement() {
    setClicks(totalClicks + 1);
  }

  return (
    <div>
      <div className='container'>
        <Flashcard spanishWord={card.spanishWord} englishWord={card.englishWord}/>
      </div>

      <h4>
        Score: {isNaN(percentage) ? 0 : percentage}% or {count}/{totalClicks}
      </h4>
      <button onClick={increment}>Right?</button>
      <button onClick={decrement}>Wrong?</button>
    </div>
  );
}

export default ScoreCounter;
