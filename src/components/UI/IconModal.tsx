import React from 'react';

interface Props {
  name: string;
}

const IconModal: React.FC<Props> = ({ name }) => {
  return (
    <div className='absolute bg-white p-2 rounded-lg shadow-lg max-w-xs min-w-32'>
      <h2 className='text-lg font-bold mb-2 text-black'>{name}</h2>
      <div className='animate-pulse'>
        <div className='h-4 bg-gray-300 rounded w-3/4 mb-2'></div>
        <div className='space-y-2'>
          <div className='h-3 bg-gray-300 rounded'></div>
          <div className='h-3 bg-gray-300 rounded w-5/6'></div>
          <div className='h-3 bg-gray-300 rounded w-2/3'></div>
        </div>
      </div>
    </div>
  );
};

export default IconModal;
