import React, { useEffect, useState } from 'react';
import MasterWordBank from '../MasterWordBank';
import { v4 as uuid } from "uuid";

function MerriamApiCall() {
 
    const [dictData, setDictData] = useState([]);
    const [inputData, setInputData] = useState('');
    const [words, setWords] = useState(MasterWordBank)

// Calls definition from Dict API and sets the data to correct piece of state
// Interpolates the users input to the API call

    async function fetchDictData() {
        let word = inputData.toLowerCase();
      
        fetch(`https://www.dictionaryapi.com/api/v3/references/spanish/json/${word}?key=93d0c6b2-3ee2-4da3-9e91-72cadefeee94`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setDictData(data)
        })
        .catch((err) => {
           return alert('Sorry, we couldnt find that word')
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetchDictData();
        e.target.reset();
      }

//Takes the first definition from API and saves it to new obj, pushes that obj to MasterWordBank

    const addTranslatedWord = (e) => {
        e.preventDefault();

        const newWord = {
          spanishWord: inputData, 
          englishWord: dictData[0].shortdef[0],
          id: uuid()
        }
        setWords([...words, newWord]);
        MasterWordBank.push(newWord);
    };

//Loops through definitions and returns them in an ol
//Button to add to MasterWordBank

    return <div>
    <h3 className='article-list-title'>Dictionary</h3>

    <form onSubmit={handleSubmit} className='centered'>
      <input
        type="text"
        name="translate"
        placeholder="Translate"
        onChange={(e) => setInputData(e.target.value)}
        required
      />
    <input type="submit" value="Translate Word" />
    </form>

    <ol>
  {dictData.map((word) => {
    return (
      <div key={word.meta.uuid} className='article-list-item'>
            <li>
                <h6><strong>{word.hwi.hw}</strong>: {word.shortdef[0]}</h6>
            </li>
      </div>
    );
  })}
  </ol>

    <form onSubmit={addTranslatedWord} className='centered'>
        <input type="submit" value="Add to your word bank" />
    </form>
</div>
}

export default MerriamApiCall