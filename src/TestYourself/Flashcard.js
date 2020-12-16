import React, { useState, useEffect, useRef } from "react";

// Creates Flashcard module/animation logic, just needs to be passed the two words, probably better design to have them come off one props object, to be refactored?

export default function Flashcard({ spanishWord, englishWord }) {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState("initial");
  const frontEl = useRef();
  const backEl = useRef();

  //Function that dynamically adjusts height of card
  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height;
    const backHeight = backEl.current.getBoundingClientRect().height;

    setHeight(Math.max(frontHeight, backHeight, 100));
  }

  useEffect(setMaxHeight, [spanishWord, englishWord]);
  useEffect(() => {
    window.addEventListener("resize", setMaxHeight);
    return () => window.removeEventListener("resize", setMaxHeight);
  }, []);

  return (
    <div
      //Clicking on any card will toggle the className flip between true and false, triggering the css animation
      className={`card ${flip ? "flip" : ""}`}
      style={{ height: height }}
      onClick={() => setFlip(!flip)}
    >
      <div className="front" ref={frontEl}>
        {flip ? spanishWord : englishWord}
      </div>

      <div className="back" ref={backEl}>
        {spanishWord}
      </div>
    </div>
  );
}
