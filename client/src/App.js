import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

// import pages
import Users from './users/pages/Users';
import Home from './shared/pages/Home';
import Portfolio from './places/pages/Portfolio';

// import CSS styling
import './App.css';

function App() {
  return (
    <Router className="App">
      {/* Inside Switch block if there is a working route then it will not run the lines afterwards */}
      <Switch>
        {/* HERE GOES ALL THE ROUTING TO PAGES*/}
        <Route exact path='/' component={Home} />

        <Route path='/portfolio' component={Portfolio} />
        
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
