import React, {InputHTMLAttributes} from 'react';
import { Interface } from 'readline';
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label : string;
    name : string;
}

const Input: React.FC<InputProps> = ({label,name, ...rest}) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" {...rest} id={name}/>
        </div>
    );
}

export default Input;