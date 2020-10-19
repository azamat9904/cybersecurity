import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons'

import { MainContainer } from '../../hoc/index';
import { ITag } from '../../types/interfaces';
import { Logo, Tags, Search, Button } from '../index';
import { Dropdown } from '../../containers/index';

import './Header.scss';

type Props = {
    tags: ITag[],
    attacks: ITag[],
    isAuthenticated: boolean;
}

const profileTags: ITag[] = [
    {
        id: "1",
        text: "Кабинет",
        url: "/cabinet"
    },
    {
        id: "2",
        text: "Закладки",
        url: "/cabinet"
    },
    {
        id: "3",
        text: "История",
        url: "/history"
    },
    {
        id: "4",
        text: "Выйти",
        url: "/logout"
    },
]

const Header: FunctionComponent<Props> = ({ tags, attacks, isAuthenticated }) => {

    return (
        <header className="header">
            <MainContainer>
                <div className="header__content">
                    <div className="header__left">
                        <Logo />
                        <Dropdown
                            dropdownTags={attacks}
                            text="Категории"
                        />
                        <Tags tags={tags} />
                    </div>
                    <div className="header__right">
                        <div className="header__space">
                            <Search />
                        </div>
                        {!isAuthenticated ? <>
                            <div className="header__space">
                                <Button><Link to="/signup">Регистрация</Link></Button>
                            </div>
                            <div className="header__space">
                                <Button><Link to="/signin">Войти</Link></Button>
                            </div>
                        </> : <>
                                <div className="header__space">
                                    <Button className="forum-btn">
                                        Форум
                                </Button>
                                </div>
                                <div className="header__space">
                                    <div className="header__wrapper">
                                        <UserOutlined style={{ fontSize: '14px', color: "#fff" }} />
                                        <Dropdown text="Профиль" dropdownTags={profileTags} isProfileDropdown={true} />
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </MainContainer>
        </header>
    )
}

export default Header;