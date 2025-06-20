import React from 'react';

export interface FeatureItem {
  icon: string;
  text: string;
}

export interface FeaturesHighlightProps {
  items: FeatureItem[];
}

const FeaturesHighlight: React.FC<FeaturesHighlightProps> = ({ items }) => {
  return (
    <div className='mt-12 grid grid-cols-2 lg:grid-cols-3 gap-6 text-sm'>
      {items.map((item, index) => (
        <div className='text-center' key={index}>
          <div className='text-2xl mb-2'>{item.icon}</div>
          <div className='text-white lg:text-gray-600 font-medium'>{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesHighlight; 