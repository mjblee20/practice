import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Todo from './pages/Todo';
import Navbar from './components/Nav/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/todo' exact component={Todo} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
