import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { MainContainer } from '../../hoc/index';
import { ITag, IUser } from '../../types/interfaces';
import { Logo, Tags, Dropdown, Search, Button } from '../index';
import './Header.scss';

type Props = {
    tags: ITag[],
    attacks: ITag[],
    showDropdown: boolean,
    toggleDropdown: (event: any) => void;
    user: IUser | null
}

const Header: FunctionComponent<Props> = ({ tags, showDropdown, toggleDropdown, attacks, user }) => {
    return (
        <header className="header">
            <MainContainer>
                <div className="header__content">
                    <div className="header__left">
                        <Logo />
                        <Dropdown
                            dropdownTags={attacks}
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
                        {!user ? <>
                            <div className="header__wrapper">
                                <Button><Link to="/signup">Регистрация</Link></Button>
                            </div>
                            <div className="header__wrapper">
                                <Button><Link to="/signin">Войти</Link></Button>
                            </div>
                        </> : <Dropdown text="Профиль" showDropdown={showDropdown} toggleDropdown={toggleDropdown} dropdownTags={[{ id: "1", text: "Профиль", url: "profile" }]} />
                        }
                    </div>
                </div>
            </MainContainer>
        </header>
    )
}

export default Header;