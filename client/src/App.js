import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import pages
import Users from './users/pages/Users';

// import CSS styling
import './App.css';

function App() {
  return (
    <Router className="App">
      {/* TODO: HERE GOES ALL THE */}
      <Route exact path='/' component={Home} />

    </Router>
  );
}

export default App;
