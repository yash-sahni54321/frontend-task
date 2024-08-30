import * as React from 'react';
const DocumentSVG = (props: React.SVGProps<SVGElement>) => (
  <svg
    width='36'
    height='38'
    viewBox='0 0 36 38'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      width='35.7333'
      height='37.8658'
      rx='13.3333'
      fill='url(#paint0_linear_0_1)'
    />
    <rect
      x='0.8'
      y='0.8'
      width='34.1333'
      height='36.2658'
      rx='12.5333'
      stroke='white'
      stroke-opacity='0.3'
      stroke-width='1.6'
    />
    <g filter='url(#filter0_d_0_1)'>
      <path
        d='M20.1667 16H23.8333L19.3333 11.5V15.1667C19.3333 15.6667 19.6667 16 20.1667 16ZM20.1667 17.6667C18.75 17.6667 17.6667 16.5833 17.6667 15.1667V11H13.5C12.0833 11 11 12.0833 11 13.5V25.1667C11 26.5833 12.0833 27.6667 13.5 27.6667H21.8333C23.25 27.6667 24.3333 26.5833 24.3333 25.1667V17.6667H20.1667ZM15.1667 16H16C16.5 16 16.8333 16.3333 16.8333 16.8333C16.8333 17.3333 16.5 17.6667 16 17.6667H15.1667C14.6667 17.6667 14.3333 17.3333 14.3333 16.8333C14.3333 16.3333 14.6667 16 15.1667 16ZM20.1667 24.3333H15.1667C14.6667 24.3333 14.3333 24 14.3333 23.5C14.3333 23 14.6667 22.6667 15.1667 22.6667H20.1667C20.6667 22.6667 21 23 21 23.5C21 24 20.6667 24.3333 20.1667 24.3333ZM20.1667 21H15.1667C14.6667 21 14.3333 20.6667 14.3333 20.1667C14.3333 19.6667 14.6667 19.3333 15.1667 19.3333H20.1667C20.6667 19.3333 21 19.6667 21 20.1667C21 20.6667 20.6667 21 20.1667 21Z'
        fill='white'
      />
    </g>
    <defs>
      <filter
        id='filter0_d_0_1'
        x='10.4667'
        y='11'
        width='14.4'
        height='17.7333'
        filterUnits='userSpaceOnUse'
        color-interpolation-filters='sRGB'
      >
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='0.533333' />
        <feGaussianBlur stdDeviation='0.266667' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow_0_1'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow_0_1'
          result='shape'
        />
      </filter>
      <linearGradient
        id='paint0_linear_0_1'
        x1='17.8667'
        y1='0'
        x2='17.8667'
        y2='37.8658'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#70F2DB' />
        <stop offset='1' stop-color='#23BBC5' />
      </linearGradient>
    </defs>
  </svg>
);
export default DocumentSVG;
