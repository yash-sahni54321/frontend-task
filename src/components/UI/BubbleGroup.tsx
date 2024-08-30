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
import BubbleIcon from './BubbleIcon';
import { isMobile } from '@/utils/utils';
import { useRouter } from 'next/navigation';

export type FeatureItem = {
  id: number;
  name: string;
  icon: React.ReactNode;
};

interface Props {
  isBubbled: boolean;
}

export const features: FeatureItem[] = [
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

const BubbleGroup: React.FC<Props> = ({ isBubbled }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = (feature: FeatureItem) => {
    router.push(`/${feature.id}`);
  };
  return (
    <div className='absolute'>
      {isMobile() ? (
        <>
          <button
            className='fixed right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-700 text-white rounded-l-lg shadow-md focus:outline-none'
            onClick={() => setIsOpen(!isOpen)}
          >
            ❖
          </button>
          {isOpen && (
            <div className='fixed right-16 top-1/2 transform -translate-y-1/2 bg-white  shadow-lg rounded-lg p-4 z-50'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className='flex items-center mb-3 cursor-pointer max-w-8 min-w-8 w-8 h-8'
                  onClick={() => handleOnClick(feature)}
                >
                  {feature.icon}
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        features.map((feature, index) => (
          <BubbleIcon
            feature={feature}
            key={index}
            index={index}
            isBubbled={isBubbled}
          />
        ))
      )}
    </div>
  );
};

export default BubbleGroup;
