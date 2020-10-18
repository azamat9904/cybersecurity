import React from 'react';
import { Link } from 'react-router-dom';

import logoSrc from '../../assets/images/logo.png';

import './Logo.scss';

const Logo = () => {
    return (
        <Link to="/">
            <div className="logo">
                <div className="logo__img"><img src={logoSrc} alt="Logo" /></div>
                <div className="logo__text">Cyber <span>Security</span></div>
            </div>
        </Link>
    )
}

export default Logo;