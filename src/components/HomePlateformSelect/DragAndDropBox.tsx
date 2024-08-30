import React from 'react';
import EllipseSVG from '@/assets/svgs/EllipseSVG';
import { Droppable } from '@hello-pangea/dnd';

const DragAndDrop = () => {
  return (
    <Droppable droppableId='Icons'>
      {(provided, snapshot) => (
        <div
          className={`${snapshot.isDraggingOver ? 'dragactive' : ''} w-full max-w-md`}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div
            className='h-32 bg-white rounded-3xl border border-dashed border-gray-300 flex items-center justify-center'
            style={{ boxShadow: '0 22px 60px rgba(0, 0, 0, 0.15)' }}
          >
            <div className='flex flex-col justify-center items-center'>
              <div className='animate-spin'>
                <EllipseSVG width={50} height={50} />
              </div>
              <p className='text-gray-600 text-lg font-medium mt-2'>
                Drag features to view details
              </p>
            </div>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DragAndDrop;
