import React from 'react';

import { MainContainer } from '../../hoc/index';
import { Logo, Tags, Dropdown } from '../index';

import './Header.scss';

const tags = [{ text: 'курсы', url: 'url' }, { text: "статьи", url: 'url' }];

const Header = () => {
    return (
        <header className="header">
            <MainContainer>
                <div className="header__content">
                    <Logo />
                    <Dropdown dropdownTags={tags} text="Категории" />
                    <Tags tags={tags} />
                </div>
            </MainContainer>
        </header>
    )
}

export default Header;