import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import CardPage from './pages/CardPage';
<<<<<<< HEAD
import UpdatePage from './pages/UpdatePage';
=======
import RegisterPage from './pages/RegisterPage';

>>>>>>> 535effdb9e3b27421bbfb92c60e063d2a631ff3c
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage/>
        </Route>
        <Route path="/register" exact>
          <RegisterPage/>
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
