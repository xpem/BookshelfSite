import React, { InputHTMLAttributes } from 'react';
import './styles.css';

function Input ({ label, name, ...rest }) {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}></input>
        </div>
    );
}

export default Input;