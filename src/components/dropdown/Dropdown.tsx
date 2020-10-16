import React, { FunctionComponent, useState } from 'react';
import classNames from 'classnames';

import { ITag } from '../../types/interfaces';
import { Tag } from '../index';

import "./Dropdown.scss";

type Props = {
    text: string;
    dropdownTags: ITag[]
}

const Dropdown: FunctionComponent<Props> = ({ text, dropdownTags }) => {

    const [showDropdown, setShowDropDown] = useState(false);

    const toggleDropdown = () => {
        setShowDropDown(!showDropdown);
    }

    return (
        <div className="dropdown">
            <div className="dropdown__text" onMouseOver={toggleDropdown}>{text} <span>^</span></div>
            <div className={classNames("dropdown__content", { "dropdown__content--show": showDropdown })}>
                {dropdownTags.map((tag) => <Tag tag={tag} className="dropdown__item" />)}
            </div>
        </div>
    )
}

export default Dropdown;