import React, { useState } from "react";
import "./App.css";
import Flashcard from "./Flashcard";
import WordBankCardList from "./WordBankCardList";
import AddWord from "./AddWord";
import MasterWordBank from "./MasterWordBank";
import ScoreCounter from "./ScoreCounter";
import GenerateAllCards from "./GenerateAllCards";
import GenerateRandomCard from './GenerateRandomCard'
import _ from 'lodash';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Navbar */}

        <h1>Spanish Flashcards</h1>

        <br />
        
        <GenerateRandomCard />

        <ScoreCounter />

        <br />

        <br />

        <AddWord bank={MasterWordBank} />

        <br />

        <GenerateAllCards bank={MasterWordBank} />

      </header>
    </div>
  );
}

export default App;
