import React from 'react';
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

export type FeatureItem = {
  id: number;
  name: string;
  icon: React.ReactNode;
};

interface Props {
  isBubbled: boolean;
}

const BubbleGroup: React.FC<Props> = ({ isBubbled }) => {
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

  return (
    <div className='absolute'>
      {features.map((feature, index) => (
        <BubbleIcon
          feature={feature}
          key={index}
          index={index}
          isBubbled={isBubbled}
        />
      ))}
    </div>
  );
};

export default BubbleGroup;
