import React, {SelectHTMLAttributes} from 'react';
import { Interface } from 'readline';
import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    options:Array<{
        value:string;
        label:string
    }>;
    label : string;
    name : string;
}

const Select: React.FC<SelectProps> = ({label,name, options, ...rest}) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" {...rest} id={name}>
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(options => {
                    return <option key={options.value} value={options.value}>{options.label}</option>
                })}
            </select>
        </div>
    );
}

export default Select;