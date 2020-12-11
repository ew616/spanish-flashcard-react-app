import React, { useState, useEffect } from "react";
import _ from "lodash";
import Flashcard from './Flashcard';
import MasterWordBank from '../MasterWordBank';
import { MDBBtn } from "mdbreact";

// Displays a random card and counts scores with clicks/percentages 

function ScoreCounter() {

  // Sets piece of state for the click count and percentage, basically just returning two click counters and the division of those two values

  const [count, setCount] = useState(0);
  const [totalClicks, setClicks] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [card, setCard] = useState([]);

  useEffect(() => {
    const newPercentage = ((count / totalClicks) * 100).toFixed(1);
    setPercentage(newPercentage);
  }, [count, totalClicks]);

  function increment() {
    setClicks(totalClicks + 1);
    setCount(count + 1);
  }

  function decrement() {
    setClicks(totalClicks + 1);
  }

  // Shuffles all the cards using lodash and displays the first Flashcard in shuffled array

  useEffect(() => {
    const shuffled = _.shuffle(MasterWordBank);

    setCard(shuffled[0]);    
  }, [totalClicks])

  return (
    <div>
      <div className='container'>
        <Flashcard spanishWord={card.spanishWord} englishWord={card.englishWord}/>
      </div>

      <h4 className='test-yourself-items'>
        Score: {isNaN(percentage) ? 0 : percentage}% or {count}/{totalClicks}
      </h4>

      <div className='test-yourself-items'>
        <MDBBtn rounded color="info" size='normal' onClick={increment}>Right?</MDBBtn>
        <MDBBtn rounded color="danger" size='normal' onClick={decrement}>Wrong?</MDBBtn>
      </div>
    </div>
  );
}

export default ScoreCounter;
