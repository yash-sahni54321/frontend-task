import * as React from "react";
const ScheduleSVG = (props: React.SVGProps<SVGElement>) => (
    <svg
        width={36}
        height={39}
        viewBox="0 0 36 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect
            x={0.133789}
            y={0.481506}
            width={35.7333}
            height={37.8658}
            rx={13.3333}
            fill="url(#paint0_linear_63_76)"
        />
        <rect
            x={0.933789}
            y={1.28151}
            width={34.1333}
            height={36.2658}
            rx={12.5333}
            stroke="white"
            strokeOpacity={0.3}
            strokeWidth={1.6}
        />
        <g clipPath="url(#clip0_63_76)">
            <path
                d="M24.54 15.7338C24.8486 15.7338 25.0988 15.4802 25.0988 15.1675C25.0988 14.8548 24.8486 14.6013 24.54 14.6013C24.2314 14.6013 23.9813 14.8548 23.9813 15.1675C23.9813 15.4802 24.2314 15.7338 24.54 15.7338Z"
                fill="white"
            />
            <g filter="url(#filter0_d_63_76)">
                <path
                    d="M23.4675 13.6487C23.5725 13.5325 23.7187 13.4688 23.8762 13.4688H26.8125V11.3125C26.8125 10.69 26.31 10.1875 25.6875 10.1875H13.8C13.1775 10.1875 12.675 10.69 12.675 11.3125V15.9025C13.3612 15.6625 14.0925 15.5237 14.8612 15.5237C17.82 15.5237 20.325 17.4662 21.1687 20.1475H25.6875C26.31 20.1475 26.8125 19.645 26.8125 19.0225V16.8663H23.8762C23.7187 16.8663 23.5725 16.7987 23.4675 16.6862L22.4287 15.535C22.2375 15.325 22.2375 15.0062 22.4287 14.7962L23.4675 13.6487Z"
                    fill="white"
                />
            </g>
            <g filter="url(#filter1_d_63_76)">
                <path
                    d="M14.8575 16.4688C11.7262 16.4688 9.1875 19.0075 9.1875 22.1387C9.1875 25.27 11.7262 27.8125 14.8575 27.8125C17.9888 27.8125 20.5275 25.2738 20.5275 22.1425C20.5275 19.0113 17.9925 16.4688 14.8575 16.4688ZM17.5725 22.705H14.295V17.8488H15.42V21.58H17.5725V22.705Z"
                    fill="white"
                />
            </g>
        </g>
        <defs>
            <filter
                id="filter0_d_63_76"
                x={12.1417}
                y={10.1875}
                width={15.2042}
                height={11.0267}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dy={0.533333} />
                <feGaussianBlur stdDeviation={0.266667} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                />
                <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_63_76"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_63_76"
                    result="shape"
                />
            </filter>
            <filter
                id="filter1_d_63_76"
                x={8.65417}
                y={16.4688}
                width={12.4067}
                height={12.4104}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                />
                <feOffset dy={0.533333} />
                <feGaussianBlur stdDeviation={0.266667} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                />
                <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_63_76"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_63_76"
                    result="shape"
                />
            </filter>
            <linearGradient
                id="paint0_linear_63_76"
                x1={18.0005}
                y1={0.481506}
                x2={18.0005}
                y2={38.3473}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#A5B1F7" />
                <stop offset={1} stopColor="#4363F2" />
            </linearGradient>
            <clipPath id="clip0_63_76">
                <rect width={18} height={18} fill="white" transform="translate(9 10)" />
            </clipPath>
        </defs>
    </svg>
);
export default ScheduleSVG;
