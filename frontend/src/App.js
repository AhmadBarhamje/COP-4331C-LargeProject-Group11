import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import CardPage from './pages/CardPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import AvailabilityPage from './pages/AvailabilityPage';
import ViewSchedulesPage from './pages/ViewSchedulesPage';
import EditGroupsPage from './pages/EditGroupsPage';
import EditUsersPage from './pages/EditUsersPage';
import SelectedGroupPage from './pages/SelectedGroupPage';


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
        <Route path="/availability" exact>
          <AvailabilityPage/>
        </Route>
        <Route path="/SelectedGroup" exact>
          <SelectedGroupPage/>
        </Route>
        <Route path="/editusers" exact>
          <EditUsersPage/>
        </Route>
        <Route path="/editgroups" exact>
          <EditGroupsPage/>
        </Route>
        <Route path="/viewschedules" exact>
          <ViewSchedulesPage/>
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
        <Redirect to="/"/>
      </Switch>
    </Router>
    );
}

export default App;
