import React, { FC } from "react";
import Tag from "./Tag";
import { ITag } from "../interface/intesface";


interface ICategories {
    name: string;
    tagProps: ITag[][];
}


const Categories: FC<ICategories> = ({name, tagProps}) => {
    const renderContent = (content: ITag[][], className: string) => {
        return content.map((column, index) => (
            <div key={index} className={className}>
                {column.map((tag, index) => (
                    <Tag key={index} {...tag}/>
                ))}
            </div>
        ));
    };

    return (
        <main className="categories">
            <div className="categories__name">
                <h1>{name}</h1>
            </div>
            <div className="categories__tags">
                {renderContent(tagProps, 'categories__tags__column')}
            </div>
        </main>
    )
}

export default Categories