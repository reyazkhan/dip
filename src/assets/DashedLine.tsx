import React from 'react';

const DashedLine = ({ color }: { color?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="2"
            viewBox="0 0 350 2"
            fill="none"
        >
            <path
                opacity="0.5"
                d="M1 1H349"
                stroke={color ? '#fff' : '#FF8412'}
                stroke-width="2"
                stroke-linecap="round"
                stroke-dasharray="6 6"
            />
        </svg>
    );
};

export default DashedLine;
