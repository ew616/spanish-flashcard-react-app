import React, { useState, useEffect } from "react";

function ScoreCounter() {
  const [count, setCount] = useState(0);
  const [totalClicks, setClicks] = useState(0);
  const [percentage, setPercentage] = useState(0);

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

  return (
    <div>
      <h4>
        Score: {isNaN(percentage) ? 0 : percentage}% or {count}/{totalClicks}
      </h4>
      <button onClick={increment}>Right?</button>
      <button onClick={decrement}>Wrong?</button>
    </div>
  );
}

export default ScoreCounter;
