import * as React from 'react';
const RecordSVG = (props: React.SVGProps<SVGElement>) => (
  <svg
    width={36}
    height={39}
    viewBox='0 0 36 39'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect
      x={0.133789}
      y={0.636353}
      width={35.7333}
      height={37.8658}
      rx={13.3333}
      fill='url(#paint0_linear_63_73)'
    />
    <rect
      x={0.933789}
      y={1.43635}
      width={34.1333}
      height={36.2658}
      rx={12.5333}
      stroke='white'
      strokeOpacity={0.3}
      strokeWidth={1.6}
    />
    <g filter='url(#filter0_d_63_73)'>
      <path
        d='M26.7712 15.9575C26.6505 15.8827 26.5127 15.8401 26.3709 15.8337C26.2291 15.8272 26.0881 15.8573 25.9612 15.9209L23.8337 16.985V16.6667C23.8337 15.2884 22.712 14.1667 21.3337 14.1667H12.167C10.7887 14.1667 9.66699 15.2884 9.66699 16.6667V23.3334C9.66699 24.7117 10.7887 25.8334 12.167 25.8334H21.3337C22.712 25.8334 23.8337 24.7117 23.8337 23.3334V23.015L25.9612 24.0784C26.0879 24.1425 26.229 24.1728 26.3709 24.1666C26.5127 24.1603 26.6506 24.1176 26.7712 24.0425C27.017 23.89 27.167 23.6225 27.167 23.3334V16.6667C27.167 16.3775 27.017 16.11 26.7712 15.9575ZM13.8337 21.25C13.6668 21.2544 13.5009 21.2253 13.3455 21.1645C13.1901 21.1037 13.0484 21.0124 12.9289 20.896C12.8093 20.7795 12.7143 20.6404 12.6494 20.4866C12.5845 20.3329 12.551 20.1677 12.551 20.0009C12.5509 19.834 12.5843 19.6688 12.6491 19.515C12.7139 19.3613 12.8088 19.222 12.9283 19.1055C13.0477 18.989 13.1893 18.8976 13.3447 18.8367C13.5 18.7758 13.666 18.7466 13.8328 18.7509C14.1587 18.7592 14.4683 18.8944 14.6959 19.1277C14.9235 19.3611 15.0509 19.6741 15.051 20C15.0511 20.326 14.9239 20.639 14.6965 20.8725C14.4691 21.1061 14.1595 21.2415 13.8337 21.25Z'
        fill='white'
      />
    </g>
    <defs>
      <filter
        id='filter0_d_63_73'
        x={9.13366}
        y={14.1667}
        width={18.5667}
        height={12.7333}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={0.533333} />
        <feGaussianBlur stdDeviation={0.266667} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow_63_73'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow_63_73'
          result='shape'
        />
      </filter>
      <linearGradient
        id='paint0_linear_63_73'
        x1={18.0005}
        y1={0.636353}
        x2={18.0005}
        y2={38.5022}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FF7F7E' />
        <stop offset={1} stopColor='#FE1F1E' />
      </linearGradient>
    </defs>
  </svg>
);
export default RecordSVG;
