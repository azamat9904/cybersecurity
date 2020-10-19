import React, { FunctionComponent, useEffect, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { Home, SignIn, SignUp } from './pages/index';
import { IAppState } from './redux/store';
import authActions from './redux/auth/authActions';

type Props = {
  isAuthenticated: boolean;
  onTryAutoSigup: () => void;
  logout: () => void;
}

const App: FunctionComponent<Props> = (props) => {

  useEffect(() => {
    props.onTryAutoSigup();
  }, [props]);

  const Logout = () => {
    props.logout();
    return <Redirect to="/" />;
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        {
          !props.isAuthenticated && <Fragment>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Fragment>
        }
        {
          props.isAuthenticated &&
          <Fragment>
            <Route path="/logout" render={() => <Logout />} />
          </Fragment>
        }
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div >
  );
}

const mapStateToProps = (state: IAppState) => {
  return {
    isAuthenticated: state.auth.user?.idToken != null,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IAppState, void, Action>) => {
  return {
    onTryAutoSigup: () => dispatch(authActions.authCheckState()),
    logout: () => dispatch(authActions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
