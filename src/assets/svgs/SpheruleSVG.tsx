import * as React from 'react';
const SpheruleSVG = (props: React.SVGProps<SVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={27}
    fill='none'
    {...props}
  >
    <circle
      cx={13.223}
      cy={13.575}
      r={12.321}
      stroke='#475467'
      strokeWidth={1.803}
    />
    <path
      stroke='#475467'
      strokeWidth={1.803}
      d='M18.11 18.463c-2.487 2.488-5.306 4.112-7.816 4.757-2.533.652-4.575.277-5.784-.932-1.209-1.21-1.583-3.25-.932-5.784.645-2.51 2.27-5.328 4.757-7.816 2.488-2.488 5.307-4.112 7.817-4.758 2.533-.651 4.575-.276 5.783.933 1.21 1.209 1.584 3.25.933 5.783-.645 2.51-2.27 5.329-4.758 7.817Z'
    />
    <path
      stroke='#475467'
      strokeWidth={1.803}
      d='M18.11 8.688c2.488 2.488 4.112 5.306 4.758 7.816.651 2.533.276 4.575-.933 5.784-1.209 1.209-3.25 1.584-5.783.932-2.51-.645-5.329-2.27-7.817-4.757-2.488-2.488-4.112-5.307-4.757-7.817-.652-2.533-.277-4.574.932-5.783 1.21-1.21 3.25-1.584 5.784-.933 2.51.646 5.328 2.27 7.816 4.758Z'
    />
  </svg>
);
export default SpheruleSVG;
