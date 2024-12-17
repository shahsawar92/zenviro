import React from 'react';

const Input = ({
    label,
    type = 'text',
    name,
    value,
    className,
    labelClassName,
    onChange,
    placeholder = '',
    required = false
}) => {
    return (
        <div className="mb-4">
            {label && <label htmlFor={name} className={`block text-gray-700 mb-2 ${labelClassName}`}>{label}</label>}
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={"w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" + (className ? ` ${className}` : '')}
            />
        </div>
    );
};

export default Input;
