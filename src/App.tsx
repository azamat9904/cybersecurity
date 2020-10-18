import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Home, SignIn, SignUp } from './pages/index';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/*" render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
