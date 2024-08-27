import * as React from "react";
const DocumentSVG = (props: React.SVGProps<SVGElement>) => (
    <svg
        width={60}
        height={63}
        viewBox="0 0 60 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g filter="url(#filter0_d_63_70)">
            <rect
                x={12.1338}
                y={6.77997}
                width={35.7333}
                height={37.8658}
                rx={13.3333}
                fill="url(#paint0_linear_63_70)"
            />
            <rect
                x={12.9338}
                y={7.57997}
                width={34.1333}
                height={36.2658}
                rx={12.5333}
                stroke="white"
                strokeOpacity={0.3}
                strokeWidth={1.6}
            />
        </g>
        <g filter="url(#filter1_d_63_70)">
            <path
                d="M32.4997 22.6667H36.1663L31.6663 18.1667V21.8333C31.6663 22.3333 31.9997 22.6667 32.4997 22.6667ZM32.4997 24.3333C31.083 24.3333 29.9997 23.25 29.9997 21.8333V17.6667H25.833C24.4163 17.6667 23.333 18.75 23.333 20.1667V31.8333C23.333 33.25 24.4163 34.3333 25.833 34.3333H34.1663C35.583 34.3333 36.6663 33.25 36.6663 31.8333V24.3333H32.4997ZM27.4997 22.6667H28.333C28.833 22.6667 29.1663 23 29.1663 23.5C29.1663 24 28.833 24.3333 28.333 24.3333H27.4997C26.9997 24.3333 26.6663 24 26.6663 23.5C26.6663 23 26.9997 22.6667 27.4997 22.6667ZM32.4997 31H27.4997C26.9997 31 26.6663 30.6667 26.6663 30.1667C26.6663 29.6667 26.9997 29.3333 27.4997 29.3333H32.4997C32.9997 29.3333 33.333 29.6667 33.333 30.1667C33.333 30.6667 32.9997 31 32.4997 31ZM32.4997 27.6667H27.4997C26.9997 27.6667 26.6663 27.3333 26.6663 26.8333C26.6663 26.3333 26.9997 26 27.4997 26H32.4997C32.9997 26 33.333 26.3333 33.333 26.8333C33.333 27.3333 32.9997 27.6667 32.4997 27.6667Z"
                fill="white"
            />
        </g>
        <defs>
            <filter
                id="filter0_d_63_70"
                x={0.400457}
                y={0.913302}
                width={59.2}
                height={61.3325}
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
                <feOffset dy={5.86667} />
                <feGaussianBlur stdDeviation={5.86667} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.219608 0 0 0 0 0.619608 0 0 0 0 0.647059 0 0 0 0.4 0"
                />
                <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_63_70"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_63_70"
                    result="shape"
                />
            </filter>
            <filter
                id="filter1_d_63_70"
                x={22.7997}
                y={17.6667}
                width={14.4}
                height={17.7333}
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
                    result="effect1_dropShadow_63_70"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_63_70"
                    result="shape"
                />
            </filter>
            <linearGradient
                id="paint0_linear_63_70"
                x1={30.0005}
                y1={6.77997}
                x2={30.0005}
                y2={44.6458}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#70F2DB" />
                <stop offset={1} stopColor="#23BBC5" />
            </linearGradient>
        </defs>
    </svg>
);
export default DocumentSVG;
