import React from 'react';

const CardChip = ({ ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="195"
            height="126"
            viewBox="0 0 195 126"
            fill="none"
            {...props}
        >
            <path
                d="M0 35C0 15.67 15.67 0 35 0H97.5H133.729C141.825 0 149.671 2.80685 155.93 7.94243L182.201 29.4983C190.303 36.1463 195 46.0753 195 56.5559V91C195 110.33 179.33 126 160 126H97.5H61.2712C53.175 126 45.3292 123.193 39.0702 118.058L12.7989 96.5017C4.69669 89.8537 0 79.9247 0 69.4441V35Z"
                fill="white"
            />
        </svg>
    );
};

export default CardChip;
