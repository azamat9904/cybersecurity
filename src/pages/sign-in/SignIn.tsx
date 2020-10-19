import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Layout } from '../../containers/index';
import { SignIn as SignInForm } from '../../containers/index';

import "./SignIn.scss";

const SignIn: FunctionComponent<RouteComponentProps> = (props) => {
    return (
        <Layout>
            <div className="main-sign-in">
                <div className="main-sign-in__wrapper">
                    <SignInForm router={props} />
                </div>
            </div>
        </Layout>
    )
}

export default SignIn;