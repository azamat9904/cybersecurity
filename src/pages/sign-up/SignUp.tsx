import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Layout } from '../../containers/index';
import { SignUp as SignUpForm } from '../../containers/index';

import "./SignUp.scss";

const SignUp: FunctionComponent<RouteComponentProps> = (props) => {
    return (
        <Layout>
            <div className="main-sign-up">
                <div className="main-sign-up__wrapper">
                    <SignUpForm router={props} />
                </div>
            </div>
        </Layout>
    )
}

export default SignUp;