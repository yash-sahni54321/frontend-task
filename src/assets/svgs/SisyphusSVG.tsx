import * as React from 'react';
const SisyphusSVG = (props: React.SVGProps<SVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={29}
    fill='none'
    {...props}
  >
    <path
      fill='#475467'
      d='M0 11.54h5.77v5.77H0zM17.31 17.31h-5.77v-5.77h5.77z'
    />
    <path
      fill='#475467'
      d='m5.77 11.54 5.77-5.77v5.77l-5.77 5.77v-5.77Z'
      opacity={0.4}
    />
    <path
      fill='#475467'
      d='m11.54 17.31-5.77 5.77v-5.77l5.77-5.77v5.77Z'
      opacity={0.6}
    />
    <path
      fill='#475467'
      d='M0 11.54 11.54 0v5.77l-5.77 5.77H0ZM17.31 17.31 5.77 28.85v-5.77l5.77-5.77h5.77Z'
      opacity={0.8}
    />
  </svg>
);
export default SisyphusSVG;
