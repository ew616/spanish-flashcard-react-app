import React from "react";
import "./App.css";
import Flashcard from "./Flashcard";
import WordBank from "./WordBank";
import AddWord from "./AddWord";
import PrintWordBank from "./PrintWordBank";

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

        <PrintWordBank bank={testWordBank} />

        <br />

        <WordBank />

        <br />

        <AddWord bank={testWordBank} />

        <br />

        <Flashcard spanishWord="vaca" englishWord="cow" />

        <br />

        <Flashcard
          spanishWord={testWordBank[0].spanishWord}
          englishWord={testWordBank[0].englishWord}
        />
      </header>
    </div>
  );
}

export default App;
