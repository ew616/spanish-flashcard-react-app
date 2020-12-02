import React, { useState } from "react";
import "./App.css";
import Flashcard from "./Flashcard";
import WordBankCardList from "./WordBankCardList";
import AddWord from "./AddWord";
import MasterWordBank from "./MasterWordBank";
import ScoreCounter from "./ScoreCounter";
import GenerateAllCards from "./GenerateAllCards";
import GenerateRandomCard from './GenerateRandomCard'
import _ from 'lodash';
import Nav from './Nav';
import TestYourself from './TestYourself';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddingToBankRoute from './AddingToBankRoute';


function App() {
  return (
    <div className="App">
        <Router>
          <Nav />

          <Switch>
            <Route  path='/TestYourself' component={TestYourself}/>
            <Route  path='/AddingToBankRoute' component={AddingToBankRoute}/>
          </Switch>
        
        </Router>
        {/* <h1>Spanish Flashcards</h1> */}

        {/* <br />
        
        <GenerateRandomCard />

        <ScoreCounter />

        <br /> */}

        {/* <AddWord bank={MasterWordBank} />

        <br />

        <GenerateAllCards bank={MasterWordBank} /> */}
    </div>
  );
}

export default App;
