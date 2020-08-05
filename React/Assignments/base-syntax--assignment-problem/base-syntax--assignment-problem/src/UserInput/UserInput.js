import React from 'react';

const Input = (props) => {
    return(
        <div className="UserInput">
            <input 
            type ='text' 
            onChange = {props.changed} 
            value = {props.currentName}/>
        </div>
    )
};

export default Input;