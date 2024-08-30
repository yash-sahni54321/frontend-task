import React from 'react';
import EllipseSVG from '@/assets/svgs/EllipseSVG';
import { Droppable } from '@hello-pangea/dnd';

const DragAndDrop = () => {
  return (
    <Droppable droppableId='IconFinal'>
      {(provided, snapshot) => (
        <div
          className={` rounded-3xl w-full max-w-md mx-auto ${snapshot.isDraggingOver ? 'dragactive' : ''}  h-32 w-full px-24  bg-white rounded-3xl border border-dashed border-gray-300 flex items-center justify-center`}
          ref={provided.innerRef}
          style={{
            transition: 'background-color 0.2s ease-in-out',
            boxShadow: '0 22px 60px rgba(0, 0, 0, 0.15)',
          }}
          {...provided.droppableProps}
        >
          <div className='flex flex-col justify-center items-center'>
            <div className='animate-spin'>
              <EllipseSVG width={50} height={50} />
            </div>
            <p className='text-gray-600 text-lg font-medium mt-2'>
              Drag features to view details
            </p>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DragAndDrop;
