import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Pages/Cart';
import Details from './Pages/Details';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route  component={Home} path="/" exact />
        <Route  component={Cart} path="/cart" />
        <Route  component={Details} path="/details/:id" />
      </Switch>
    </Router>
  );
}

export default App;
