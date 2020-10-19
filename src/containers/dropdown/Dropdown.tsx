import React, { FunctionComponent, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import { ITag } from '../../types/interfaces';
import { List } from '../../components/index';

import "./Dropdown.scss";

type Props = {
    text: string;
    dropdownTags: ITag[],
    isProfileDropdown?: boolean;
}

const Dropdown: FunctionComponent<Props> = ({ text, dropdownTags, isProfileDropdown }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    const classes = classNames("dropdown", { "dropdown-profile": isProfileDropdown })
    return (
        <div className={classes} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <div className="dropdown__text">{text} <span ><DownOutlined className="dropdown__caret" /></span></div>
            {
                showDropdown && <div className="dropdown__wrapper"><List tags={dropdownTags} className="dropdown__content" /></div>
            }
        </div>
    )
}

export default Dropdown;