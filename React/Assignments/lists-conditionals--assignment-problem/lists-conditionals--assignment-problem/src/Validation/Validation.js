import React from 'react';

const validation = (props) => {
    return (
        <div className = "Validation">
            <p>{props.text}</p>
        <p>{props.length < 5 ? "Text too short!" : "Text long enough."}</p>
        </div>
    )
};

export default validation;