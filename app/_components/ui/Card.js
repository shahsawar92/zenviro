import React from 'react';
import clsx from 'clsx';

const Card = ({ children, className, shadow = true, ...props }) => {
    const baseStyles = 'p-4 bg-white rounded-lg';
    const shadowStyle = shadow ? 'shadow-md hover:shadow-lg transition-shadow' : '';

    return (
        <div className={clsx(baseStyles, shadowStyle, className)} {...props}>
            {children}
        </div>
    );
};

export default Card;
