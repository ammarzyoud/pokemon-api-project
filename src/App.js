import React from 'react';
import Dash from "./Dash";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import pokeSatatus from "./pokeSatatus";


function App() {
  return (
    <Router>
      <div className="container">
        <switch>
          <Route exact path="/" component={Dash} />
          <Route exact path="/pokeSatatus/:pokeindex"  component={pokeSatatus} />
        </switch>
      </div>
    </Router>
  );
}

export default App;
