import React from 'react'
import Flashcard from './Flashcard'
import WordBankCardList from './WordBankCardList'

//Creates a big outer div, the grid, which contains all of the individual flashcards and gives each a unique id

export default function FlashcardList(props) {
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
    
    
    return (
        <div className='card-grid'>
            <Flashcard flashcard={props}/>
            <Flashcard />
            <Flashcard />
            <Flashcard />
            <Flashcard />
        </div>
    )
}