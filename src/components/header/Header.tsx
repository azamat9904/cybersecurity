import React, { FunctionComponent } from 'react';

import { MainContainer } from '../../hoc/index';
import { ITag } from '../../types/interfaces';
import { Logo, Tags, Dropdown } from '../index';

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
                    <Logo />
                    <Dropdown
                        dropdownTags={tags}
                        text="Категории"
                        showDropdown={showDropdown}
                        toggleDropdown={toggleDropdown}
                    />
                    <Tags tags={tags} />
                </div>
            </MainContainer>
        </header>
    )
}

export default Header;