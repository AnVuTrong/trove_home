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
            stocks: 'bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-400 text-white border-green-600 dark:border-green-500',
            realEstate: 'bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-400 text-white border-red-600 dark:border-red-500',
            crypto: 'bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-500 dark:hover:bg-yellow-400 text-white border-yellow-600 dark:border-yellow-500'
          };

          const activeClasses =
            activeClassesMap[option.id] ||
            'bg-gray-600 hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-400 text-white border-gray-600 dark:border-gray-500';

          const inactiveClasses =
            'bg-white/10 lg:bg-gray-100 hover:bg-white/20 lg:hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 text-white lg:text-gray-700 dark:text-white border-white/30 lg:border-gray-300 dark:border-white/20';

          return (
            <Button
              key={option.id}
              variant={isActive ? 'primary' : 'outline'}
              size='lg'
              className={`w-full transition-all duration-150 hover:scale-105 ${isActive ? activeClasses : inactiveClasses}`}
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