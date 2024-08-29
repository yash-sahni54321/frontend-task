import React from 'react';
import AcmecropSVG from '@/assets/svgs/AcmecropSVG';
import EpicuriosSVG from '@/assets/svgs/Epicurois';
import FocalPointSVG from '@/assets/svgs/FocalPointSVG';
import LuminousSVG from '@/assets/svgs/LuminousSVG';
import PolymathSVG from '@/assets/svgs/PolymathSVG';
import SisyphusSVG from '@/assets/svgs/SisyphusSVG';
import SpheruleSVG from '@/assets/svgs/SpheruleSVG';
import LayerSVG from '@/assets/svgs/LayerSVG';
import CapsuleSVG from '@/assets/svgs/CapsuleSVG';

const Footer = () => {
  const footerData = [
    { id: 1, name: 'Acme Crop', icon: <AcmecropSVG /> },
    { id: 2, name: 'Epicurios', icon: <EpicuriosSVG /> },
    { id: 3, name: 'Focal Point', icon: <FocalPointSVG /> },
    { id: 4, name: 'Luminous', icon: <LuminousSVG /> },
    { id: 5, name: 'Polymath', icon: <PolymathSVG /> },
    { id: 6, name: 'Sisyphus', icon: <SisyphusSVG /> },
    { id: 7, name: 'Spherule', icon: <SpheruleSVG /> },
    { id: 8, name: 'Layer', icon: <LayerSVG /> },
    { id: 9, name: 'Capsule', icon: <CapsuleSVG /> },
  ];

  return (
    <div className='flex justify-around items-center py-4 bg-white z-10'>
      {footerData.map(item => (
        <div
          key={item.id}
          className='flex justify-center items-center bg-white p-4 gap-x-2 border border-gray-300 rounded-lg'
        >
          <div>{item.icon}</div>
          <span className='text-sm text-gray-600'>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Footer;
