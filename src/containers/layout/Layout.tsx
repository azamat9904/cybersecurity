import React, { FunctionComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../../redux/store';
import { Header, Footer } from '../../components/index';
import { tags, attacks } from '../../mock/mock';

import "./Layout.scss";

type Props = {
    children: React.ReactNode,
    isAuthenticated: boolean;
}

const Layout: FunctionComponent<Props> = ({ children, isAuthenticated }) => {

    return (
        <Fragment>
            <Header
                tags={tags}
                attacks={attacks}
                isAuthenticated={isAuthenticated}
            />
            <main className="main">
                {children}
                <Footer categories={attacks} />
            </main>
        </Fragment>
    )
}


const mapStateToProps = (state: IAppState) => {
    return {
        isAuthenticated: state.auth.user?.idToken != null
    }
}
export default connect(mapStateToProps)(Layout);