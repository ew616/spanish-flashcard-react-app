import './App.css';
import Flashcard from './Flashcard';
import WordBank from './WordBank';

function App() {
  const testWordBank = {
    id: 1,
    spanishWord: 'mano',
    englishWord: 'hand'
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Spanish Flashcards
        </h1>

        <WordBank spanishWord='vaca' englishWord ='cow'/>
        
        <br />
        
        <Flashcard spanishWord='vaca' englishWord ='cow'/>

        <br />

        <Flashcard spanishWord={testWordBank.spanishWord} englishWord ={testWordBank.englishWord} />

      </header>
    </div>
  );
}

export default App;
