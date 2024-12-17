import React from 'react';
import clsx from 'clsx';

const Badge = ({ variant = 'info', children, className }) => {
    const baseStyles = 'inline-block px-2 py-1 text-sm font-semibold rounded';
    const variantStyles = {
        info: 'bg-blue-100 text-blue-700',
        success: 'bg-green-100 text-green-700',
        warning: 'bg-yellow-100 text-yellow-700',
        error: 'bg-red-100 text-red-700',
    };

    return (
        <span className={clsx(baseStyles, variantStyles[variant], className)}>
            {children}
        </span>
    );
};

export default Badge;
