import React, { useState } from "react";
import AddWord from "./AddWord";
import MasterWordBank from "../MasterWordBank";
import GenerateAllCards from "./GenerateAllCards";

function AddingToBankRoute() {
  return (
    <div>
      <h1 className="centered add-word-form-title">Add Words to Bank</h1>

      <AddWord bank={MasterWordBank} />

      <br />

      <GenerateAllCards bank={MasterWordBank} />
    </div>
  );
}

export default AddingToBankRoute;
