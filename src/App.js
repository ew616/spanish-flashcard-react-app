import React from "react";
import "./App.css";
import Flashcard from "./Flashcard";
import WordBankCardList from "./WordBankCardList";
import AddWord from "./AddWord";
import FlashcardList from './FlashcardList'



function App() {
  const testWordBank = [
    {
      id: 1,
      spanishWord: "mano",
      englishWord: "hand",
    },
    {
      id: 2,
      spanishWord: "pollo",
      englishWord: "chicken",
    },
    {
      id: 3,
      spanishWord: "pastilla",
      englishWord: "pill",
    },
  ];

  console.log(testWordBank.spanishWord);

  return (
    <div className="App">
      <header className="App-header">
        {/* Navbar */}

        <h1>Spanish Flashcards</h1>

        <br />

        <WordBankCardList />

        <br />

        <AddWord bank={testWordBank} />

        <br />

        <Flashcard spanishWord="vaca" englishWord="cow" />

        <br />

        <Flashcard
          spanishWord={testWordBank[0].spanishWord}
          englishWord={testWordBank[0].englishWord}
        />

      <div className='container'>
          <FlashcardList flashcards={testWordBank} />
      </div>
      </header>
    </div>
  );
}

export default App;
