import * as React from "react"
const PolymathSVG = (props: React.SVGProps<SVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={27}
        fill="none"
        {...props}
    >
        <circle
            cx={12.023}
            cy={13.427}
            r={10.219}
            stroke="#475467"
            strokeWidth={3.607}
        />
    </svg>
)
export default PolymathSVG;
