 


import './App.css';
import React from "react";

import Home from "./views/Home.js"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Home"> Home </Link>
            </li>
           
          
          </ul>
        </nav>
 
        <Switch>
        
          <Route path="/Home">
            <Home />
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}
