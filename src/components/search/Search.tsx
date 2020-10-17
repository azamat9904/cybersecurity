import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

import "./Search.scss";

const Search = () => {
    return (
        <div className="search">
            <SearchOutlined className="search__icon" />
        </div>
    )
}

export default Search;