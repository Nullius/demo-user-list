import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import List from './components/List';
import Hero from './components/Hero';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user/:id">
          <Hero />
        </Route>
        <Route exact path="/">
          <List />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
