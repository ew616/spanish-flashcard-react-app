import React, { useState, useEffect } from "react";

function NewWordForm({ addNewWord }) {
  const [englishWord, setEngWord] = useState("");
  const [spanishWord, setSpanWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewWord(spanishWord, englishWord);
    e.target.reset();
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
