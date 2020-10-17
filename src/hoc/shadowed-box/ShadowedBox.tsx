import React, { FunctionComponent } from 'react';

import "./ShadowedBox.scss";

const ShadowedBox: FunctionComponent = ({ children }) => {
    return (
        <div className="shadowed-box">{children}</div>
    )
}

export default ShadowedBox;