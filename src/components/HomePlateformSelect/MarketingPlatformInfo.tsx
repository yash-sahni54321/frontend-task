import MagicSVG from '@/assets/svgs/MagicSVG';
import UserOverlay from '@/assets/svgs/UserOverlay';
import React from 'react';

const MarketingPlatformInfo = () => {
  return (
    <div className='text-center px-4 py-2 w-full h-auto flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center w-full max-w-md h-full'>
        <div className='flex justify-center w-full mb-2 pt-4 md:mb-3 md:pt-8'>
          <MagicSVG className='w-10 h-10 md:w-12 md:h-12' />
        </div>
        <div className='flex justify-center w-full mb-2 md:mb-3'>
          <div className='flex items-center justify-center gap-x-1 w-3/4 md:w-1/2 bg-white rounded-xl px-2 md:px-4 py-2'>
            <UserOverlay className='w-5 h-5 md:w-6 md:h-6' />
            <p className='text-[#262626] font-light text-sm md:text-base'>
              Join 3k+ Members
            </p>
          </div>
        </div>
        <h1 className='text-2xl md:text-3xl text-black font-bold tracking-tight'>
          #1 Platform for all your marketing needs
        </h1>
        <p className='mt-2 text-gray-600 text-sm md:text-md font-thin'>
          NextGen AI is a unified AI platform that provides all generative AI
          tools in one platform for all the marketing needs.
        </p>
      </div>
    </div>
  );
};

export default MarketingPlatformInfo;
