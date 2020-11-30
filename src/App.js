import React, { useState } from "react";
import "./App.css";
import Flashcard from "./Flashcard";
import WordBankCardList from "./WordBankCardList";
import AddWord from "./AddWord";
import MasterWordBank from './MasterWordBank'
import ScoreCounter from "./ScoreCounter";
import GenerateFlashcardForm from './GenerateFlashcardForm'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* Navbar */}

        <h1>Spanish Flashcards</h1>

        <br />

        <AddWord bank={MasterWordBank} />

        <br />

        <GenerateFlashcardForm />

        <br />

        <WordBankCardList bank={MasterWordBank}/>

        <br />

        <ScoreCounter />

      </header>
    </div>
  );
}

export default App;
