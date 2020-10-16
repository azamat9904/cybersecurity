import React, { FunctionComponent } from 'react';

import { ITag } from '../../types/interfaces';
import { Tag } from '../index';

import "./CategoryList.scss";

type Props = {
    tags: ITag[],
    className?: string;
}

const CategoryList: FunctionComponent<Props> = ({ tags, className }) => {
    return (
        <div className={["category", className].join(" ")}>
            {tags.map((tag) => <Tag tag={tag} className="category__item" />)}
        </div>
    )
}

export default CategoryList;