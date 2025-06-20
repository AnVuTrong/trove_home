import React from 'react';
import { Button } from '../../ui.components';
import { InvestmentOption } from './HomeHeroSection.types';

export interface OptionButtonsGroupProps {
  options: Record<string, InvestmentOption>;
  currentOption: string;
  onOptionChange: (id: string) => void;
}

const OptionButtonsGroup: React.FC<OptionButtonsGroupProps> = ({ options, currentOption, onOptionChange }) => {
  return (
    <div className='space-y-4 mb-8'>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {Object.values(options).filter(o => o.id !== 'default').map((option) => {
          const isActive = currentOption === option.id;
          const activeClassesMap: Record<string, string> = {
            stocks: 'bg-green-600 hover:bg-green-700 text-white border-green-600',
            realEstate: 'bg-red-600 hover:bg-red-700 text-white border-red-600',
            crypto: 'bg-yellow-600 hover:bg-yellow-700 text-white border-yellow-600'
          };

          const activeClasses = activeClassesMap[option.id] || 'bg-gray-600 hover:bg-gray-700 text-white border-gray-600';

          return (
            <Button
              key={option.id}
              variant={isActive ? 'primary' : 'outline'}
              size='lg'
              className={`w-full transition-all duration-150 hover:scale-105 ${
                isActive
                  ? activeClasses
                  : 'bg-white/10 lg:bg-gray-100 hover:bg-white/20 lg:hover:bg-gray-200 text-white lg:text-gray-700 border-white/30 lg:border-gray-300'
              }`}
              onClick={() => onOptionChange(option.id)}
              onMouseEnter={() => onOptionChange(option.id)}
              data-testid={`option-btn-${option.id}`}>
              {option.icon} {option.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default OptionButtonsGroup; 