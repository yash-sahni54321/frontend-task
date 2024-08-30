'use client';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { features } from '@/components/UI/BubbleGroup';

const SideNavigation = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const selectedId = parseInt(id, 10);

  const handleBack = () => {
    router.replace('/');
  };

  return (
    <div className='flex h-screen'>
      <div className='w-64 bg-gray-100 p-5 shadow-md'>
        <button
          onClick={handleBack}
          className='mb-4 text-gray-600 hover:text-gray-800 font-bold'
        >
          &larr; Back
        </button>
        <ul className='list-none p-0'>
          {features.map(feature => (
            <li
              key={feature.id}
              className={`text-black p-2 mb-2 rounded-lg flex items-center cursor-pointer ${
                selectedId === feature.id ? 'bg-gray-300' : 'bg-white'
              }`}
              onClick={() => router.push(`/${feature.id}`)}
            >
              <div className='mr-2'>{feature.icon}</div>
              <span>{feature.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='flex-1 p-8 bg-white'>
        <h1 className='text-2xl font-bold text-gray-800 mb-4'>
          Selected Feature: {features.find(f => f.id === selectedId)?.name}
        </h1>
        <div className='p-4 bg-gray-50 rounded-lg shadow'>
          <p className='text-lg text-gray-600'>
            Sample information related to{' '}
            {features.find(f => f.id === selectedId)?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
