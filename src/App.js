import React, { useState } from "react";
import "./App.css";
import _ from 'lodash';
import TestYourself from './TestYourself';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddingToBankRoute from './AddingToBankRoute';
import NavbarPage from "./NavbarPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBContainer } from "mdbreact";
import ArticleFetching from "./ArticleFetching";


function App() {

  return (
    <div className="App">
        <NavbarPage />

          <Switch>
            <Route  path='/TestYourself' component={TestYourself}/>
            <Route  path='/AddingToBankRoute' component={AddingToBankRoute}/>
            <Route  path='/ArticleFetching' component={ArticleFetching}/>
          </Switch>
    </div>
  );
}

export default App;
