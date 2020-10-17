import React, { FunctionComponent } from 'react';
import { DownOutlined } from '@ant-design/icons';

import { ITag } from '../../types/interfaces';
import { CategoryList } from '../index';

import "./Dropdown.scss";

type Props = {
    text: string;
    dropdownTags: ITag[],
    showDropdown: boolean;
    toggleDropdown: (event: any) => void;
}

const Dropdown: FunctionComponent<Props> = ({ text, dropdownTags, showDropdown, toggleDropdown }) => {
    return (
        <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <div className="dropdown__text">{text} <span ><DownOutlined className="dropdown__caret" /></span></div>
            {
                showDropdown && <div className="dropdown__wrapper"><CategoryList tags={dropdownTags} className="dropdown__content" /></div>
            }
        </div>
    )
}

export default Dropdown;