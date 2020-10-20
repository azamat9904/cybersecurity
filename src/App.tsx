import React, { FunctionComponent, useEffect } from 'react';
import { Route, Switch, Redirect, RouteProps } from 'react-router-dom';
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

  const CustomRoute: FunctionComponent<{ onAuthentication: boolean } & RouteProps> = ({ onAuthentication, ...otherProps }) => {
    if (onAuthentication && props.isAuthenticated) {
      return <Route {...otherProps} />
    }

    if (!onAuthentication && !props.isAuthenticated) {
      return <Route {...otherProps} />
    }

    return <Redirect to="/" />
  }


  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <CustomRoute onAuthentication={false} path="/signin" component={SignIn} />
        <CustomRoute onAuthentication={false} path="/signup" component={SignUp} />
        <CustomRoute onAuthentication={true} path="/logout" render={() => <Logout />} />
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
