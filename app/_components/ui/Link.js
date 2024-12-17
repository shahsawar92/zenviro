import React from 'react';
import NextLink from 'next/link';
import clsx from 'clsx';



const Link = ({ href, variant = 'default', className, children }) => {
    const variantStyles = {
        default: 'text-blue-500 hover:underline',
        button: 'bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600',
    };

    return (
        <NextLink href={href} passHref>
            <p className={clsx(variantStyles[variant], className)}>{children}</p>
        </NextLink>
    );
};

export default Link;
