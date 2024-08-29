import React, { useState } from 'react';
import EllipseSVG from '@/assets/svgs/EllipseSVG';

type FeatureItem = {
  id: number;
  name: string;
  icon: React.ReactNode;
};

const DragAndDrop = () => {
  const [droppedItems, setDroppedItems] = useState<FeatureItem[]>([]);

  const onDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    item: FeatureItem
  ) => {
    e.dataTransfer.setData('item', JSON.stringify(item));
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const item: FeatureItem = JSON.parse(e.dataTransfer.getData('item'));
    setDroppedItems([...droppedItems, item]);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className='w-full max-w-md h-32 bg-white rounded-3xl border border-dashed border-gray-300 flex items-center justify-center p-4'
      style={{ boxShadow: '0 22px 60px rgba(0, 0, 0, 0.15)' }}
    >
      <div className='flex flex-col justify-center items-center'>
        <div className='animate-spin'>
          <EllipseSVG className='w-12 h-12 md:w-14 md:h-14' />
        </div>
        <p className='text-gray-600 text-sm md:text-lg font-medium mt-2'>
          Drag features to view details
        </p>
      </div>
    </div>
  );
};

export default DragAndDrop;
