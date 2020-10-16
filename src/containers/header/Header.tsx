import React, { useState } from 'react';
import { Header as BaseHeader } from '../../components/index';

const tags = [{ text: 'курсы', url: 'url' }, { text: "статьи", url: 'url' }];

const Header = () => {
    const [showDropdown, setSowDropdown] = useState(false);

    const toggleDropdown = () => {
        setSowDropdown(!showDropdown);
    }

    return (
        <BaseHeader tags={tags} toggleDropdown={toggleDropdown} showDropdown={showDropdown} />
    )
}

export default Header;