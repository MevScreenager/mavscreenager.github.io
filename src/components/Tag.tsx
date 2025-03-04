import React, { FC, JSX } from "react";
import { ITag } from "../interface/intesface";


const Tag: React.FC<ITag> = ({ name, about, example }) => {

    const setInnerHTML = (item: string | JSX.Element, example: boolean)=> {
        if (example && React.isValidElement(item)) {
            return item;
        } else if (typeof item === 'string') {
            return <p>{item}</p>;
        }
    };

    function renderContent (content: ITag['about' | 'example'], className: string, example: boolean = false): JSX.Element | JSX.Element[] | null {
        if (Array.isArray(content)) {
            return content.map((item, index) => (
                <div key={index} className={className}>
                    {setInnerHTML(item, example)}
                </div>
            ));
        } else if (typeof content === 'string') {
            return (
                <div className={className}>
                    {setInnerHTML(content, example)}
                </div>
            );
        }
        return null;
    };

    return (
        <article className="tag">
            <h3 className="tag__name">{`Тег <${name}>`}</h3>
            {about && renderContent(about, 'tag__about tag--area')}
            {example && renderContent(example, 'tag__example tag--area', true)}
        </article>
    );
};

export default Tag;