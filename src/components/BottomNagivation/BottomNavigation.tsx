import GlobeSVG from '@/assets/svgs/GlobeSVG';
import MagicSVG from '@/assets/svgs/MagicSVG';
import React from 'react';

const BottomNavigation = () => {
  const navLinks1 = [
    'Home',
    'Feature',
    'How it works',
    'Pricing',
    'Testimonials',
  ];

  return (
    <div className='w-full flex items-center justify-center mt-8 md:mt-32'>
      <div className='px-4 py-2 bg-white rounded-3xl w-full md:w-2/3 flex flex-col md:flex-row justify-between items-center'>
        <div className='flex gap-x-2 md:gap-x-4 flex-wrap justify-center items-center mb-4 md:mb-0'>
          {navLinks1.map((link, index) => (
            <button
              key={index}
              className='text-black hover:text-gray-700 text-sm'
            >
              {link}
            </button>
          ))}
          <MagicSVG className='mt-2 md:mt-0' />
          <button className='text-black hover:text-gray-700 text-sm'>
            FAQ's
          </button>
          <button className='text-black hover:text-gray-700 text-sm'>
            Blogs
          </button>
        </div>
        <div className='flex gap-x-4 flex-wrap justify-center items-center'>
          <GlobeSVG width={30} height={30} />
          <button className='text-black hover:text-gray-700 text-sm'>
            Sign in
          </button>
          <button className='text-black hover:text-gray-700 text-sm'>
            Live demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
