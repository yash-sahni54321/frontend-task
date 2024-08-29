import * as React from 'react';
const CapsuleSVG = (props: React.SVGProps<SVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={27}
    fill='none'
    {...props}
  >
    <path
      fill='#475467'
      d='M9.445 19.092A9.445 9.445 0 0 0 18.73 7.916 9.445 9.445 0 0 0 7.713 18.933a9.5 9.5 0 0 0 1.732.159Z'
    />
    <path
      fill='#475467'
      fillRule='evenodd'
      d='M7.714 18.934C3.324 18.12 0 14.272 0 9.647A9.445 9.445 0 0 1 9.445.202c4.625 0 8.474 3.325 9.287 7.714A9.445 9.445 0 0 0 7.714 18.933Z'
      clipRule='evenodd'
      opacity={0.8}
    />
    <path
      fill='#475467'
      fillRule='evenodd'
      d='M9.445 19.092A9.445 9.445 0 0 0 18.73 7.916c4.39.813 7.714 4.662 7.714 9.287a9.445 9.445 0 0 1-9.444 9.445c-4.626 0-8.474-3.325-9.287-7.714a9.5 9.5 0 0 0 1.73.158Z'
      clipRule='evenodd'
      opacity={0.6}
    />
  </svg>
);
export default CapsuleSVG;
