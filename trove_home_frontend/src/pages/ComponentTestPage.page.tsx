import React, { useState } from 'react';
import { useAppTranslation } from '../i18n/TranslationUtils.utils';
import {
  ButtonTestSection,
  ToggleTestSection,
  SliderTestSection,
  InteractiveDemoSection,
} from '../components/pages.components/testpage.components';

const ComponentTestPage: React.FC = () => {
  const { t } = useAppTranslation();
  
  // Slider states
  const [sliderValue, setSliderValue] = useState<number>(50);
  const [volumeValue, setVolumeValue] = useState<number>(75);
  const [brightnessValue, setBrightnessValue] = useState<number>(30);
  
  // Toggle states
  const [notificationToggle, setNotificationToggle] = useState<boolean>(true);
  const [autoSaveToggle, setAutoSaveToggle] = useState<boolean>(true);
  const [largeToggle, setLargeToggle] = useState<boolean>(false);
  const [smallToggle, setSmallToggle] = useState<boolean>(true);

  // Event handlers
  const handleSliderChange = (value: number): void => {
    setSliderValue(value);
  };

  const handleVolumeChange = (value: number): void => {
    setVolumeValue(value);
  };

  const handleBrightnessChange = (value: number): void => {
    setBrightnessValue(value);
  };

  const handleButtonClick = (): void => {
    console.log('Button clicked!');
  };

  const handleFormSubmit = (): void => {
    console.log(`Form submitted with values:
      Slider: ${sliderValue}
      Volume: ${volumeValue}
      Brightness: ${brightnessValue}
      Notifications: ${notificationToggle}
      Auto Save: ${autoSaveToggle}
      Large Toggle: ${largeToggle}
      Small Toggle: ${smallToggle}
    `);
  };

  const handleResetToDefaults = (): void => {
    setSliderValue(50);
    setVolumeValue(75);
    setBrightnessValue(30);
    setNotificationToggle(true);
    setAutoSaveToggle(true);
    setLargeToggle(false);
    setSmallToggle(true);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        {t('componentTest.title')}
      </h1>
      
      <p className="text-lg text-gray-600 text-center mb-12">
        {t('componentTest.description')}
      </p>

      <ButtonTestSection onButtonClick={handleButtonClick} />

      <ToggleTestSection
        notificationToggle={notificationToggle}
        autoSaveToggle={autoSaveToggle}
        largeToggle={largeToggle}
        smallToggle={smallToggle}
        setNotificationToggle={setNotificationToggle}
        setAutoSaveToggle={setAutoSaveToggle}
        setLargeToggle={setLargeToggle}
        setSmallToggle={setSmallToggle}
      />

      <SliderTestSection
        sliderValue={sliderValue}
        volumeValue={volumeValue}
        brightnessValue={brightnessValue}
        handleSliderChange={handleSliderChange}
        handleVolumeChange={handleVolumeChange}
        handleBrightnessChange={handleBrightnessChange}
      />

      <InteractiveDemoSection
        sliderValue={sliderValue}
        volumeValue={volumeValue}
        brightnessValue={brightnessValue}
        notificationToggle={notificationToggle}
        autoSaveToggle={autoSaveToggle}
        largeToggle={largeToggle}
        smallToggle={smallToggle}
        handleFormSubmit={handleFormSubmit}
        onResetToDefaults={handleResetToDefaults}
      />
    </div>
  );
};

export default ComponentTestPage; 