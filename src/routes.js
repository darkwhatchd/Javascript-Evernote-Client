import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/home';
import NotesScreen from './screens/notes/index';
import RegisterScreen from './screens/auth/register';
import LoginScreen from './screens/auth/login';
import UsersEditScreen from './screens/users/edit';
import PrivateRoute from './components/auth/private_router';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/register" component={RegisterScreen} />
      <Route exact path="/login" component={LoginScreen} />
      <PrivateRoute exact path="/notes" component={NotesScreen} />
      <PrivateRoute exact path="/users/edit" component={UsersEditScreen} />
    </Switch>
  </BrowserRouter>
)

export default Routes;