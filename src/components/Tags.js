import React from 'react';
import "../styles/_tags.scss";

const Tags = (tags) => {
    return (
        <div className="content-tag">
            {tags.tag.map(tag => {
                return (
                    <div key={tag}>
                        <p className="tag">{tag}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Tags
