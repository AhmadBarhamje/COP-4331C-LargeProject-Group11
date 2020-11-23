import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/LoginPage";
import CardPage from "./pages/CardPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <LoginPage />
        </Route>
        <Route path='/forgotpassword' exact>
          <ForgotPasswordPage />
        </Route>
        <Route path='/changepassword' exact>
          <ChangePasswordPage />
        </Route>
        <Route path='/cards' exact>
          <CardPage />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
