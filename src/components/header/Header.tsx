import React, { FunctionComponent } from 'react';

import { MainContainer } from '../../hoc/index';
import { ITag } from '../../types/interfaces';
import { Logo, Tags, Dropdown, Search, Button } from '../index';

import './Header.scss';

type Props = {
    tags: ITag[],
    showDropdown: boolean,
    toggleDropdown: (event: any) => void
}

const Header: FunctionComponent<Props> = ({ tags, showDropdown, toggleDropdown }) => {
    return (
        <header className="header">
            <MainContainer>
                <div className="header__content">
                    <div className="header__left">
                        <Logo />
                        <Dropdown
                            dropdownTags={tags}
                            text="Категории"
                            showDropdown={showDropdown}
                            toggleDropdown={toggleDropdown}
                        />
                        <Tags tags={tags} />
                    </div>
                    <div className="header__right">
                        <div className="header__wrapper">
                            <Search />
                        </div>
                        <div className="header__wrapper">
                            <Button>Регистрация</Button>
                        </div>
                        <div className="header__wrapper">
                            <Button>Войти</Button>
                        </div>
                    </div>
                </div>
            </MainContainer>
        </header>
    )
}

export default Header;