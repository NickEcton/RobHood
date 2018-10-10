import React from 'react';
import GreetingContainer from './greeting_container';
import { Route, Switch } from 'react-router-dom'
import LoginFormContainer from './login/login_form_container'
import SignupFormContainer from './signup/signup_form_container'
import { AuthRoute } from '../util/route_util'

const App = () => (
  <div>
    <header>
    < GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer}/>
    </Switch>
  </div>
);

export default App;
