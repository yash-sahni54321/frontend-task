import React from 'react';
import { FeatureItem } from './BubbleGroup';
import IconModal from './IconModal';
import { Draggable } from '@hello-pangea/dnd';

interface Props {
  feature: FeatureItem;
  index: number;
  isBubbled: boolean;
}

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

const BubbleIcon = ({ feature, index, isBubbled }: Props) => {
  return (
    <Draggable draggableId={feature.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className='relative group inline-block'
        >
          <div
            key={index}
            className={`cursor-pointer  absolute w-8 h-8 text-center rounded-full transition-transform duration-1000 ${isBubbled ? positions[index] : 'translate-y-[250px]'}`}
          >
            {feature.icon}

            <div className='opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute  p-3 z-10'>
              <IconModal name={feature.name} />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default BubbleIcon;
