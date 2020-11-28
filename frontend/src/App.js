import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import CardPage from './pages/CardPage';
import UpdatePage from './pages/UpdatePage';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage/>
        </Route>
        <Route path="/cards" exact>
          <CardPage/>
        </Route>
        <Route path="/update" exact>
          <UpdatePage/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </Router>
    );
}

export default App;
