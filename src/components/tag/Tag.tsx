import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

import { ITag } from '../../types/interfaces';

type Props = {
    tag: ITag,
    className: string;
}

const Tag: FunctionComponent<Props> = ({ tag, className }) => {
    return (
        <NavLink to={tag.url} activeClassName="active" className={className}>{tag.text}</NavLink>
    )
}

export default Tag;