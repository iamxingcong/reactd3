 


import './App.css';
import React from "react";

import Home from "./views/Home.js"
import Pie from "./views/Pie.js"


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
        </span>

        <Switch>
        
          <Route path="/Home">
            <Home />
          </Route>
            <Route path="/Pie">
            <Pie />
          </Route>
        
        </Switch>
     
    </Router>
  );
}
