import React, { FunctionComponent } from 'react';
import { Button as BaseButton } from 'antd';

import "./Button.scss";

type Props = {
    children: React.ReactNode,
    onClick?: () => void;
    className?: string;
    type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
}

const Button: FunctionComponent<Props> = ({ children, onClick, className, type }) => {
    return (
        <BaseButton className={["button", className].join(" ")} onClick={onClick} type={type}>{children}</BaseButton>
    )
}

export default Button;