import React, { useState } from 'react';
import EllipseSVG from '@/assets/svgs/EllipseSVG';

type FeatureItem = {
  id: number;
  name: string;
  icon: React.ReactNode;
};

const DragAndDrop = () => {
  const [droppedItems, setDroppedItems] = useState<FeatureItem[]>([]);

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const item: FeatureItem = JSON.parse(e.dataTransfer.getData('item'));
    setDroppedItems(prevItems => [...prevItems, item]);
  };

  return (
    <div
      className='w-full max-w-md h-32 bg-white rounded-3xl border border-dashed border-gray-300 flex items-center justify-center'
      style={{ boxShadow: '0 22px 60px rgba(0, 0, 0, 0.15)' }}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <div className='flex flex-col justify-center items-center'>
        <div className='animate-spin'>
          <EllipseSVG width={50} height={50} />
        </div>
        <p className='text-gray-600 text-lg font-medium mt-2'>
          Drag features to view details
        </p>
      </div>
      {droppedItems.length > 0 && (
        <div className='flex flex-wrap mt-4'>
          {droppedItems.map((item, index) => (
            <div key={index} className='m-2'>
              {item.icon}
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;
