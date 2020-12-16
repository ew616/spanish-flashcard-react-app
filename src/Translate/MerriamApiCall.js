import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import addToStorage from '../AddingToBank/addToStorage'

//Calls Merriam Span-Eng Dict Api and returns a list of translations, works for both langs
function MerriamApiCall() {
  const currentBank = JSON.parse(localStorage.getItem("wordBank") || "[]");

  const [dictData, setDictData] = useState([]);
  const [inputData, setInputData] = useState("");

  // Calls definition from Dict API and sets the data to correct piece of state
  // Interpolates the users input to the API call

  async function fetchDictData() {
    let word = inputData.toLowerCase();

    fetch(
      `https://www.dictionaryapi.com/api/v3/references/spanish/json/${word}?key=93d0c6b2-3ee2-4da3-9e91-72cadefeee94`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDictData(data);
      })
      .catch((err) => {
        return alert("Sorry, we couldnt find that word");
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchDictData();
    e.target.reset();
  }

  //Takes the first definition from API and saves it to new obj, pushes that obj to localStorage Obj

  const addTranslatedWord = (e) => {
    e.preventDefault();

    //TO FIX: words come in criss-crossed if translated from Eng-Span. Span-Eng is default here.
    //Would be ugly but could have 2 input fields with diff handleSubmit funcs 
    const newWord = {
      spanishWord: inputData,
      englishWord: dictData[0].shortdef[0],
      id: uuid(),
    };

    addToStorage(newWord);
  };

  //Loops through definitions and returns them in an ol
  //Button to add to localStorage

  return (
    <div>
      <h3 className="article-list-title">Dictionary</h3>

      <form onSubmit={handleSubmit} className="centered">
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
            <div key={word.meta.uuid} className="article-list-item">
              <li>
                <h6>
                  <strong>{word.hwi.hw}</strong>: {word.shortdef[0]}
                </h6>
              </li>
            </div>
          );
        })}
      </ol>

      <form onSubmit={addTranslatedWord} className="centered">
        <input type="submit" value="Add to your word bank" />
      </form>
    </div>
  );
}

export default MerriamApiCall;
