import React from 'react';
import { Layout } from '../../containers/index';
import { SignUp as SignUpForm } from '../../containers/index';

import "./SignUp.scss";

const SignUp = () => {
    return (
        <Layout>
            <div className="main-sign-up">
                <div className="main-sign-up__wrapper">
                    <SignUpForm />
                </div>
            </div>
        </Layout>
    )
}

export default SignUp;