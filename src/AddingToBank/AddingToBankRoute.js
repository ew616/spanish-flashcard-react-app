import React from "react";
import AddWord from "./AddWord";
import GenerateAllCards from "./GenerateAllCards";

//Renders the route that allows you to add to bank and to generate all your cards
function AddingToBankRoute() {
  const currentBank = JSON.parse(localStorage.getItem("wordBank") || "[]");
  
  return (
    <div>
      <h1 className="centered add-word-form-title">Add Words to Bank</h1>

      <AddWord currentBank={currentBank}/>

      <br />

      <GenerateAllCards currentBank={currentBank}/>

    </div>
  );
}

export default AddingToBankRoute;
