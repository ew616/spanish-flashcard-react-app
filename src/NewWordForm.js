import React, { useState } from "react";
import AddWord from "./AddWord";
import { v4 as uuid } from "uuid";

function NewWordForm({ addNewWord }) {
  const [englishWord, setEngWord] = useState("");
  const [spanishWord, setSpanWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(englishWord);
    console.log(spanishWord);
    addNewWord(spanishWord, englishWord);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="spanishWord"
        placeholder="Spanish"
        required
        onChange={(e) => setSpanWord(e.target.value)}
      />

      <input
        type="text"
        name="englishWord"
        placeholder="English"
        onChange={(e) => setEngWord(e.target.value)}
      />

      <input type="submit" value="Add New Word" />
    </form>
  );
}

export default NewWordForm;
