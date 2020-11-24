import React from 'react'
import './App.css';
import useForm from 'react-hook-form';
import Flashcard from './Flashcard';
import WordBank from './WordBank';
import AddWord from './AddWord';
import PrintWordBank from './PrintWordBank';

function App() {
  const testWordBank = [
    {
        id: 1,
        spanishWord: 'mano',
        englishWord: 'hand'
      }
    ]

    console.log(testWordBank.spanishWord)
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Spanish Flashcards
        </h1>

        <PrintWordBank />

        <br />

        <WordBank />
        
        <br />

        <AddWord />

        <br />

        
        <Flashcard spanishWord='vaca' englishWord ='cow'/>

        <br />

        <Flashcard spanishWord={testWordBank[0].spanishWord} englishWord ={testWordBank[0].englishWord} />

      </header>
    </div>
  );
}

export default App;
