import React from 'react';

const masterCardLeftIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
        >
            <g filter="url(#filter0_b_201_425)">
                <circle
                    cx="20"
                    cy="20"
                    r="20"
                    fill="white"
                    fill-opacity="0.4"
                />
            </g>
            <defs>
                <filter
                    id="filter0_b_201_425"
                    x="-8"
                    y="-8"
                    width="56"
                    height="56"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_201_425"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_201_425"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};

export default masterCardLeftIcon;
