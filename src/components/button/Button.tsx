import React, { FunctionComponent } from 'react';
import { Button as BaseButton } from 'antd';

import "./Button.scss";

type Props = {
    children: React.ReactNode,
    onClick?: () => void;
    className?: string;
}

const Button: FunctionComponent<Props> = ({ children, onClick, className }) => {
    return (
        <BaseButton className={["button", className].join(" ")} onClick={onClick}>{children}</BaseButton>
    )
}

export default Button;