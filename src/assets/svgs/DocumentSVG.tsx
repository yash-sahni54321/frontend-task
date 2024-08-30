import * as React from 'react';
const DocumentSVG = (props: React.SVGProps<SVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={60}
    height={63}
    fill='none'
    {...props}
  >
    <g filter='url(#a)'>
      <rect
        width={35.733}
        height={37.866}
        x={12.134}
        y={6.78}
        fill='url(#b)'
        rx={13.333}
      />
      <rect
        width={34.133}
        height={36.266}
        x={12.934}
        y={7.58}
        stroke='#fff'
        strokeOpacity={0.3}
        strokeWidth={1.6}
        rx={12.533}
      />
    </g>
    <g filter='url(#c)'>
      <path
        fill='#fff'
        d='M32.5 22.667h3.666l-4.5-4.5v3.666c0 .5.334.834.834.834Zm0 1.666c-1.417 0-2.5-1.083-2.5-2.5v-4.166h-4.167c-1.417 0-2.5 1.083-2.5 2.5v11.666c0 1.417 1.083 2.5 2.5 2.5h8.333c1.417 0 2.5-1.083 2.5-2.5v-7.5H32.5Zm-5-1.666h.833c.5 0 .833.333.833.833 0 .5-.333.833-.833.833H27.5c-.5 0-.834-.333-.834-.833 0-.5.334-.833.834-.833Zm5 8.333h-5c-.5 0-.834-.333-.834-.833 0-.5.334-.834.834-.834h5c.5 0 .833.334.833.834 0 .5-.333.833-.833.833Zm0-3.333h-5c-.5 0-.834-.334-.834-.834 0-.5.334-.833.834-.833h5c.5 0 .833.333.833.833 0 .5-.333.834-.833.834Z'
      />
    </g>
    <defs>
      <filter
        id='a'
        width={59.2}
        height={61.333}
        x={0.4}
        y={0.913}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={5.867} />
        <feGaussianBlur stdDeviation={5.867} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0.219608 0 0 0 0 0.619608 0 0 0 0 0.647059 0 0 0 0.4 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_63_70' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_63_70'
          result='shape'
        />
      </filter>
      <filter
        id='c'
        width={14.4}
        height={17.733}
        x={22.8}
        y={17.667}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={0.533} />
        <feGaussianBlur stdDeviation={0.267} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_63_70' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_63_70'
          result='shape'
        />
      </filter>
      <linearGradient
        id='b'
        x1={30}
        x2={30}
        y1={6.78}
        y2={44.646}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#70F2DB' />
        <stop offset={1} stopColor='#23BBC5' />
      </linearGradient>
    </defs>
  </svg>
);
export default DocumentSVG;
