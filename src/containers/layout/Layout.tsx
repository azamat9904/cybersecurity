import React, { FunctionComponent, useState, Fragment } from 'react';

import { Header, Footer } from '../../components/index';
import { tags, attacks } from '../../mock/mock';

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
            <Header tags={tags} toggleDropdown={toggleDropdown} showDropdown={showDropdown} attacks={attacks} />
            <main className="main">
                {children}
                <Footer categories={attacks} />
            </main>
        </Fragment>
    )
}

export default Layout;