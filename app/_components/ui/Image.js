import React from 'react';
import NextImage from 'next/image';

const Image = ({
    borderRadius = '0px',
    boxShadow = 'none',
    layout = 'intrinsic',
    width = 300,
    height = 200,
    objectFit = 'cover',
    fill = false,
    ...props
}) => {
    return (
        <div style={{ borderRadius, boxShadow, overflow: 'hidden' }}>
            <NextImage
                layout={fill ? 'fill' : layout}
                width={fill ? undefined : width}
                height={fill ? undefined : height}
                objectFit={objectFit}
                {...props}
            />
        </div>
    );
};

export default Image;
