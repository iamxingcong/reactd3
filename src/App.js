 


import './App.css';
import React from "react";

import Home from "./views/Home.js"
import Pie from "./views/Pie.js"
import Radial from './views/Radial.js'
import A from './views/A.js'


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
        
        </Switch>
     
    </Router>
  );
}
