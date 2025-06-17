import React from 'react';
import { Slider } from '../../ui.components';

interface SliderTestSectionProps {
  sliderValue: number;
  volumeValue: number;
  brightnessValue: number;
  handleSliderChange: (value: number) => void;
  handleVolumeChange: (value: number) => void;
  handleBrightnessChange: (value: number) => void;
}

const SliderTestSection: React.FC<SliderTestSectionProps> = ({
  sliderValue,
  volumeValue,
  brightnessValue,
  handleSliderChange,
  handleVolumeChange,
  handleBrightnessChange,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Slider Components
      </h2>
      <div className="space-y-6">
        <div>
          <Slider
            value={sliderValue}
            onChange={handleSliderChange}
            label="Basic Slider"
            showValue={true}
            min={0}
            max={100}
            step={1}
          />
        </div>
        
        <div>
          <Slider
            value={volumeValue}
            onChange={handleVolumeChange}
            label="Volume Control"
            showValue={true}
            min={0}
            max={100}
            step={5}
          />
        </div>
        
        <div>
          <Slider
            value={brightnessValue}
            onChange={handleBrightnessChange}
            label="Brightness Level"
            showValue={true}
            min={0}
            max={100}
            step={10}
          />
        </div>
        
        <div>
          <Slider
            value={25}
            label="Disabled Slider"
            showValue={true}
            min={0}
            max={100}
            step={1}
            disabled
          />
        </div>
        
        <div>
          <Slider
            value={50.5}
            onChange={(value) => console.log('Precision slider:', value)}
            label="Precision Slider (0.1 steps)"
            showValue={true}
            min={0}
            max={100}
            step={0.1}
          />
        </div>
      </div>
    </div>
  );
};

export default SliderTestSection; 