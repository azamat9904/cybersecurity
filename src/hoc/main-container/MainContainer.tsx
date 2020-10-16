import React, {FunctionComponent} from 'react';
import './MainContainer.scss';

const MainContainer:FunctionComponent = ({children}) => {
    return (
    <div className="container">{children}</div>
    )
}

export default MainContainer;