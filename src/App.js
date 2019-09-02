import React from 'react';
import List from "./List";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import pokeSatatus from "./pokeSatatus";


function App() {
  return (
    <Router>
      <div className="container">
        <switch>
          <Route exact path="/" component={List} />
          <Route exact path="/pokeSatatus/:pokeindex"  component={pokeSatatus} />
        </switch>
      </div>
    </Router>
  );
}

export default App;
