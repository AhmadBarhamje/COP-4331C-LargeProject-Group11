import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import LoginPage from './pages/LoginPage';
import CardPage from './pages/CardPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import Schedual from './pages/Schedual'
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
        <Route path='/forgotpassword' exact>
          <ForgotPasswordPage/>
        </Route>
        <Route path='/changepassword' exact>
          <ChangePasswordPage/>
        </Route>
        <Route path="/cards" exact>
          <CardPage/>
        </Route>
        <Route path="/schedual" exact>
          <Schedual/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    </Router>
    );
}

export default App;
