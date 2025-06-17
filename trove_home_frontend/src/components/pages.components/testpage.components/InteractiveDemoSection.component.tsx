import React from 'react';
import { Button } from '../../ui.components';

interface InteractiveDemoSectionProps {
  sliderValue: number;
  volumeValue: number;
  brightnessValue: number;
  notificationToggle: boolean;
  autoSaveToggle: boolean;
  largeToggle: boolean;
  smallToggle: boolean;
  handleFormSubmit: () => void;
  onResetToDefaults: () => void;
}

const InteractiveDemoSection: React.FC<InteractiveDemoSectionProps> = ({
  sliderValue,
  volumeValue,
  brightnessValue,
  notificationToggle,
  autoSaveToggle,
  largeToggle,
  smallToggle,
  handleFormSubmit,
  onResetToDefaults,
}) => {
  return (
    <div className="bg-background-light border border-gray-200 rounded-lg p-6 mb-8 shadow-sm dark:bg-background-surface_dark dark:border-gray-600">
      <h2 className="text-2xl font-bold mb-4 text-text-DEFAULT dark:text-text-dark">
        Interactive Demo
      </h2>
      <div className="space-y-4">
        <p className="text-text-light dark:text-text-dark">
          Use the controls above to adjust values and click the button to see the current state:
        </p>
        <div className="bg-background-DEFAULT p-4 rounded-md dark:bg-background-dark">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Slider Values:</h3>
              <p><strong>Slider Value:</strong> {sliderValue}</p>
              <p><strong>Volume Value:</strong> {volumeValue}</p>
              <p><strong>Brightness Value:</strong> {brightnessValue}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Toggle States:</h3>
              <p><strong>Notifications:</strong> {notificationToggle ? 'On' : 'Off'}</p>
              <p><strong>Theme:</strong> Controlled by global theme context</p>
              <p><strong>Auto Save:</strong> {autoSaveToggle ? 'On' : 'Off'}</p>
              <p><strong>Large Toggle:</strong> {largeToggle ? 'On' : 'Off'}</p>
              <p><strong>Small Toggle:</strong> {smallToggle ? 'On' : 'Off'}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="primary" onClick={handleFormSubmit}>
            Log Current Values
          </Button>
          <Button variant="outline" onClick={onResetToDefaults}>
            Reset to Defaults
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemoSection; 