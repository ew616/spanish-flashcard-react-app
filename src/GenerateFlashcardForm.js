import React, { useState, useEffect } from "react";
import MasterWordBank from "./MasterWordBank";
import Flashcard from './Flashcard'
import WordBankCardList from './WordBankCardList'

function GenerateFlashcardForm({ generateCards }) {



const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onClick={handleSubmit}>
      <input type="submit" value="Generate Flash Cards" />
    </form>
  );
}

export default GenerateFlashcardForm;
