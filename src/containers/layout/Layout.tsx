import React, { FunctionComponent, useState, Fragment } from 'react';

import { Header } from '../../components/index';
import { tags } from '../../mock/mock';

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
            <main>
                {children}
            </main>

        </Fragment>
    )
}

export default Layout;