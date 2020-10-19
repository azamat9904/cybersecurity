import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons'

import { MainContainer } from '../../hoc/index';
import { ITag, IUser } from '../../types/interfaces';
import { Logo, Tags, Search, Button } from '../index';
import { Dropdown } from '../../containers/index';

import './Header.scss';

type Props = {
    tags: ITag[],
    attacks: ITag[],
    user: IUser | null
}

const Header: FunctionComponent<Props> = ({ tags, attacks, user }) => {
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
                        </> : <>
                                <UserOutlined style={{ fontSize: '18px', color: "#fff" }} />
                                <Dropdown text="Профиль" dropdownTags={[{ id: "1", text: "Профиль", url: "profile" }]} isProfileDropdown={true} />
                            </>
                        }
                    </div>
                </div>
            </MainContainer>
        </header>
    )
}

export default Header;