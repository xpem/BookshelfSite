import React, { InputHTMLAttributes } from 'react';
import './styles.css';

function Input ({ label, name,type, ...rest }) {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} {...rest}></input>
        </div>
    );
}

export default Input;