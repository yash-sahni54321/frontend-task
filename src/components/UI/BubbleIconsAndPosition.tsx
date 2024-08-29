import React, { useState } from 'react';
import DocumentSVG from '@/assets/svgs/DocumentSVG';
import EditSVG from '@/assets/svgs/EditSVG';
import RecordSVG from '@/assets/svgs/RecordSVG';
import WriteSVG from '@/assets/svgs/WriteSVG';
import AudioPlayer from '@/assets/svgs/AudioPlayer';
import SocialMediaSVG from '@/assets/svgs/SocialMediaSVG';
import ScheduleSVG from '@/assets/svgs/ScheduleSVG';
import PhotoGallerySVG from '@/assets/svgs/PhotoGallerySVG';
import MessageSVG from '@/assets/svgs/MessageSVG';
import ArticleSVG from '@/assets/svgs/ArticleSVG';
import VideoEditSVG from '@/assets/svgs/VideoEditSVG';
import SearchSVG from '@/assets/svgs/SearchSVG';
import IconModal from './IconModal';
import { Draggable } from 'react-beautiful-dnd';

type FeatureItem = {
  id: number;
  name: string;
  icon: React.ReactNode;
};

interface Props {
  isBubbled: boolean;
}

const BubbleIconsAndPosition: React.FC<Props> = ({ isBubbled }) => {
  const [selectedIcon, setSelectedIcon] = useState<{
    name: string;
    x: number;
    y: number;
  } | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const features: FeatureItem[] = [
    { id: 1, name: 'Document', icon: <DocumentSVG /> },
    { id: 2, name: 'Edit', icon: <EditSVG /> },
    { id: 3, name: 'Record', icon: <RecordSVG /> },
    { id: 4, name: 'Write', icon: <WriteSVG /> },
    { id: 5, name: 'Audio', icon: <AudioPlayer /> },
    { id: 6, name: 'Social Media', icon: <SocialMediaSVG /> },
    { id: 7, name: 'Schedule', icon: <ScheduleSVG /> },
    { id: 8, name: 'Photo Gallery', icon: <PhotoGallerySVG /> },
    { id: 9, name: 'Message', icon: <MessageSVG /> },
    { id: 10, name: 'Article', icon: <ArticleSVG /> },
    { id: 11, name: 'Video Edit', icon: <VideoEditSVG /> },
    { id: 12, name: 'Search', icon: <SearchSVG /> },
  ];

  const positions = [
    'translate-x-[440px] -translate-y-[130px]',
    'translate-x-[350px] translate-y-[10px]',
    'translate-x-[500px] translate-y-[100px]',
    'translate-x-[320px] translate-y-[190px]',
    'translate-x-[180px] translate-y-[300px]',
    'translate-x-[-30px] translate-y-[260px]',
    '-translate-x-[240px] translate-y-[280px]',
    '-translate-x-[590px] translate-y-[10px]',
    '-translate-x-[390px] -translate-y-[90px]',
    '-translate-x-[550px] -translate-y-[160px]',
    '-translate-x-[400px] translate-y-[100px]',
    '-translate-x-[530px] translate-y-[200px]',
  ];

  const initialPosition = 'translate-y-[250px]';

  const handleIconClick = (event: React.MouseEvent, icon: { name: string }) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const modalWidth = 700;
    const offset = 10;
    setSelectedIcon({
      name: icon.name,
      x: rect.right - modalWidth + offset,
      y: rect.top - 200,
    });
  };

  return (
    <div className='absolute'>
      {/* Desktop View */}
      <div className='hidden md:block'>
        {features.map((feature, index) => (
          <Draggable
            draggableId={feature.id.toString()}
            index={index}
            key={feature.id}
          >
            {provided => (
              <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                className={`cursor-pointer absolute w-8 h-8 text-center rounded-full transition-transform duration-1000 ${isBubbled ? positions[index] : initialPosition}`}
                onClick={e => handleIconClick(e, feature)}
              >
                {feature.icon}
              </div>
            )}
          </Draggable>
        ))}
      </div>

      {/* Mobile View */}
      <div className='md:hidden'>
        <button
          className='fixed right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-700 text-white rounded-l-lg shadow-md focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          ❖
        </button>

        {isOpen && (
          <div className='fixed right-16 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-lg p-4 z-50'>
            {features.map((feature, index) => (
              <Draggable
                draggableId={feature.id.toString()}
                index={index}
                key={feature.id}
              >
                {provided => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='flex items-center mb-3 cursor-pointer'
                    onClick={e => handleIconClick(e, feature)}
                  >
                    <div className='w-8 h-8 flex items-center justify-center mr-2'>
                      <div className='text-gray-800'>{feature.icon}</div>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </div>

      {selectedIcon && (
        <IconModal
          name={selectedIcon.name}
          position={{ x: selectedIcon.x, y: selectedIcon.y }}
        />
      )}
    </div>
  );
};

export default BubbleIconsAndPosition;
