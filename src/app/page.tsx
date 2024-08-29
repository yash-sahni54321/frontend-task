'use client';
import BottomNavigation from '@/components/BottomNagivation/BottomNavigation';
import MarketingPlatformInfo from '@/components/HomePlateformSelect/MarketingPlatformInfo';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer/Footer';
import { DragDropContext, Droppable, DropResult } from '@hello-pangea/dnd';
import DragAndDrop from '@/components/HomePlateformSelect/DragAndDropBox';
import BubbleGroup from '@/components/UI/BubbleGroup';

export default function Home() {
  const [isBubbled, setIsBubbled] = useState(false);

  useEffect(() => {
    setIsBubbled(true);
  }, []);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='some_id'>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className='w-screen h-screen flex flex-col justify-around bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url('/images/background.png')` }}
          >
            <div className='flex flex-col items-center justify-evenly'>
              <BubbleGroup isBubbled={isBubbled} />
              <MarketingPlatformInfo />
              <DragAndDrop />
            </div>
            <BottomNavigation />
            <div className='flex justify-center items-center w-full py-2'>
              <p className='text-black font-light text-sm'>
                Loved by product folks at
              </p>
            </div>
            <Footer />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
