import GlobeSVG from '@/assets/svgs/GlobeSVG';
import MagicSVG from '@/assets/svgs/MagicSVG';
import React, { useState } from 'react';

const BottomNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navLinks1 = [
    'Home',
    'Feature',
    'How it works',
    'Pricing',
    'Testimonials',
  ];

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className='w-full flex items-center justify-center mt-8 md:mt-32'>
      <div className='px-4 py-2 bg-white rounded-3xl w-full md:w-4/5 flex flex-col md:flex-row justify-between items-center'>
        <div className='flex gap-x-2 md:gap-x-2 flex-wrap justify-center items-center'>
          {navLinks1.map((link, index) => (
            <button
              key={index}
              className={`text-sm px-4 py-2 rounded-md ${
                activeIndex === index
                  ? 'bg-gradient-to-b from-[#E95B4A] to-[#B164C4] text-white'
                  : 'text-black hover:text-gray-700'
              }`}
              onClick={() => handleClick(index)}
            >
              {link}
            </button>
          ))}
          <MagicSVG className='mt-2 md:mt-0' />
          <button
            className={`text-sm px-4 py-2 rounded-md ${
              activeIndex === navLinks1.length
                ? 'bg-gradient-to-b from-[#E95B4A] to-[#B164C4] text-white'
                : 'text-black hover:text-gray-700'
            }`}
            onClick={() => handleClick(navLinks1.length)}
          >
            FAQ's
          </button>
          <button
            className={`text-sm px-4 py-2 rounded-md ${
              activeIndex === navLinks1.length + 1
                ? 'bg-gradient-to-b from-[#E95B4A] to-[#B164C4] text-white'
                : 'text-black hover:text-gray-700'
            }`}
            onClick={() => handleClick(navLinks1.length + 1)}
          >
            Blogs
          </button>
        </div>
        <div className='flex gap-x-2 flex-wrap justify-center items-center ml-2'>
          <GlobeSVG width={30} height={30} />
          <button
            className={`text-sm px-4 py-2 rounded-md ${
              activeIndex === navLinks1.length + 2
                ? 'bg-gradient-to-b from-[#E95B4A] to-[#B164C4] text-white'
                : 'text-black hover:text-gray-700'
            }`}
            onClick={() => handleClick(navLinks1.length + 2)}
          >
            Sign in
          </button>
          <button className='text-sm px-4 py-2 rounded-md bg-gradient-to-b from-[#E95B4A] to-[#B164C4] text-white'>
            Live demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
