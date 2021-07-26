 


import './App.css';
import React from "react";

import Home from "./views/Home.js"
import Pie from "./views/Pie.js"
import Radial from './views/Radial.js'
import A from './views/A.js'
import B from './views/B.js'
import C from './views/C.js'
import D from './views/D.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      
        <span className="navigation">
              <Link to="/Home"> Home </Link>
              <Link to="/Pie"> Pie </Link>
              <Link to="/Radial"> Radial </Link>
              <Link to="/A"> A </Link>
              <Link to="/B"> B </Link>
              <Link to="/C"> C </Link>
              <Link to="/D"> D </Link>
        </span>

        <Switch>
        
          <Route path="/Home">
            <Home />
          </Route>
            <Route path="/Pie">
            <Pie />
          </Route>
          <Route path="/Radial">
            <Radial />
          </Route>
          <Route path="/A">
            <A />
          </Route>
           <Route path="/B">
            <B />
          </Route>
          <Route path="/C">
            <C />
          </Route>
          <Route path="/D">
            <D />
          </Route>
        
        </Switch>
     
    </Router>
  );
}
