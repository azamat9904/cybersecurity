import React from 'react';

import { Layout } from '../../containers/index';
import { SignIn as SignInForm } from '../../containers/index';

import "./SignIn.scss";

const SignIn = () => {
    return (
        <Layout>
            <div className="main-sign-in">
                <div className="main-sign-in__wrapper">
                    <SignInForm />
                </div>
            </div>
        </Layout>
    )
}

export default SignIn;