import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

// import pages
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';

// import CSS styling
import './App.css';

function App() {
  return (
    <Router className="App">
      {/* Inside Switch block if there is a working route then it will not evaluate the lines afterwards */}
      <Switch>
        {/* TODO: HERE GOES ALL THE ROUTING TO PAGES*/}
        <Route exact path='/' component={Users} />

        <Route path='/places/new' component={NewPlace} />
        
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
