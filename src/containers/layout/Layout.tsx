import React, { FunctionComponent, useState, Fragment } from 'react';

import { Header, Footer } from '../../components/index';
import { tags } from '../../mock/mock';

import "./Layout.scss";

type Props = {
    children: React.ReactNode,

}

const Layout: FunctionComponent<Props> = ({ children }) => {
    const [showDropdown, setSowDropdown] = useState(false);

    const toggleDropdown = () => {
        setSowDropdown(!showDropdown);
    }

    return (
        <Fragment>
            <Header tags={tags} toggleDropdown={toggleDropdown} showDropdown={showDropdown} />
            <main className="main">
                {children}
                <Footer />
            </main>
        </Fragment>
    )
}

export default Layout;