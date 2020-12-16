import React, { useState } from "react";
import ScoreCounter from "./ScoreCounter";

function TestYourself() {
  const currentBank = JSON.parse(localStorage.getItem("wordBank") || "[]");

  return (
    <div>
      <h1 className="test-yourself-items">Vocab Test</h1>

      <ScoreCounter currentBank={currentBank}/>

    </div>
  );
}

export default TestYourself;
