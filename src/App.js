import React, { useState } from "react";
import "./App.css";
import _ from "lodash";
import TestYourself from "./TestYourself/TestYourself";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddingToBankRoute from "./AddingToBank/AddingToBankRoute";
import NavbarPage from "./NavbarPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import ArticleFetching from "./ArticleFetching/ArticleFetching";
import MerriamApiCall from "./Translate/MerriamApiCall";
import WordBankTable from './WordBankTable/WordBankTable'

//Current Issues
//More organized, add more comments
//WB to separate route, displays a table with icons to add/delete
//Reset Button on ScoreCounter
//News Links should open in new tab

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarPage />

        <Switch>
          <Route path="/TestYourself" component={TestYourself} />
          <Route exact path="/"  component={AddingToBankRoute}/>
          <Route path="/AddingToBankRoute" component={AddingToBankRoute} />
          <Route path="/ArticleFetching" component={ArticleFetching} />
          <Route path="/MerriamApiCall" component={MerriamApiCall} />
          <Route path='/WordBankTable' component={WordBankTable} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
