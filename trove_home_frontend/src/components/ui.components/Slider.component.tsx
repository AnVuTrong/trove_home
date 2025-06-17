import React from 'react';

interface SliderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
  className?: string;
  label?: string;
  showValue?: boolean;
  'data-testid'?: string;
}

class Slider extends React.Component<SliderProps> {
  private handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { onChange, disabled } = this.props;
    
    if (!disabled && onChange) {
      const newValue = parseFloat(event.target.value);
      onChange(newValue);
    }
  };

  private getSliderClasses(): string {
    const { disabled } = this.props;
    
    const baseClasses = 'w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer';
    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
    const sliderStyle = `
      slider::-webkit-slider-thumb {
        appearance: none;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: #3b82f6;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
      }
      slider::-webkit-slider-thumb:hover {
        background: #2563eb;
        transform: scale(1.1);
      }
      slider::-moz-range-thumb {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: #3b82f6;
        cursor: pointer;
        border: none;
        transition: all 0.2s ease-in-out;
      }
      slider::-moz-range-thumb:hover {
        background: #2563eb;
        transform: scale(1.1);
      }
    `;
    
    return `${baseClasses} ${disabledClasses}`.trim();
  }

  render(): React.ReactNode {
    const {
      value,
      min = 0,
      max = 100,
      step = 1,
      disabled = false,
      className = '',
      label,
      showValue = false,
      'data-testid': dataTestId
    } = this.props;

    const sliderClasses = this.getSliderClasses();
    const combinedClasses = `${sliderClasses} ${className}`.trim();

    return (
      <div className="w-full">
        {label && (
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              {label}
            </label>
            {showValue && (
              <span className="text-sm text-gray-500 font-medium">
                {value}
              </span>
            )}
          </div>
        )}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={this.handleChange}
          className={combinedClasses}
          data-testid={dataTestId}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    );
  }
}

export default Slider;
export type { SliderProps }; 