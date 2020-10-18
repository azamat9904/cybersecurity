import React, { FunctionComponent } from 'react';
import { Button as BaseButton } from 'antd';

import "./Button.scss";

type Props = {
    children: React.ReactNode,
    onClick?: () => void;
    className?: string;
    type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
    htmlType?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    loading?: boolean;
}

const Button: FunctionComponent<Props> = ({ children, onClick, className, type, htmlType, loading, disabled }) => {
    return (
        <BaseButton
            className={["button", className].join(" ")}
            onClick={onClick}
            type={type}
            htmlType={htmlType}
            loading={loading}
            disabled={disabled}
        >
            {children}
        </BaseButton>
    )
}

export default Button;