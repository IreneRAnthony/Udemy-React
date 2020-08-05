import React from 'react';
import './UserOutput.css';

const Output = (props) => {
    return (
        <div className = "UserOutput">
            <h3 id = 'username'>{props.currentUsername}</h3>
            <p className = "paragraph">{props.paragraphOne}</p>
            <p className = "paragraph">{props.paragraphTwo}</p>
        </div>
    )
};

export default Output;