import React, { FunctionComponent } from 'react';

import { Tag } from '../index';
import { ITag } from '../../types/interfaces';

import "./Tags.scss";

type Props = {
    tags: ITag[]
}

const Tags: FunctionComponent<Props> = ({ tags }) => {
    return (
        <div className="tags">
            {
                tags.map((tag) => <Tag tag={tag} className="tags__item" />)
            }
        </div>
    )
}

export default Tags;