import React, { FunctionComponent } from 'react';
import { Button as BaseButton } from 'antd';

import "./Button.scss";

type Props = {
    children: React.ReactNode,
    onClick?: () => void;
}
const Button: FunctionComponent<Props> = ({ children, onClick }) => {
    return (
        <BaseButton className="button">{children}</BaseButton>
    )
}

export default Button;