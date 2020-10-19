import React, { FunctionComponent, useState, Fragment } from 'react';
import { connect } from 'react-redux';

import { IAppState } from '../../redux/store';
import { Header, Footer } from '../../components/index';
import { tags, attacks } from '../../mock/mock';
import { IUser } from '../../types/interfaces';

import "./Layout.scss";

type Props = {
    children: React.ReactNode,
    user: IUser | null
}

const Layout: FunctionComponent<Props> = ({ children, user }) => {
    const [showDropdown, setSowDropdown] = useState(false);

    const toggleDropdown = () => {
        setSowDropdown(!showDropdown);
    }

    return (
        <Fragment>
            <Header
                tags={tags}
                toggleDropdown={toggleDropdown}
                showDropdown={showDropdown}
                attacks={attacks}
                user={user}
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
        user: state.auth.user
    }
}
export default connect(mapStateToProps)(Layout);