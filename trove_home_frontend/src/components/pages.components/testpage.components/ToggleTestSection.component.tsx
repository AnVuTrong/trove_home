import React from 'react';
import { Toggle } from '../../ui.components';
import { NotificationIcon, SunIcon, MoonIcon, SaveIcon } from './TestPageIcons.component';

interface ToggleTestSectionProps {
  notificationToggle: boolean;
  darkModeToggle: boolean;
  autoSaveToggle: boolean;
  largeToggle: boolean;
  smallToggle: boolean;
  setNotificationToggle: (value: boolean) => void;
  setDarkModeToggle: (value: boolean) => void;
  setAutoSaveToggle: (value: boolean) => void;
  setLargeToggle: (value: boolean) => void;
  setSmallToggle: (value: boolean) => void;
}

const ToggleTestSection: React.FC<ToggleTestSectionProps> = ({
  notificationToggle,
  darkModeToggle,
  autoSaveToggle,
  largeToggle,
  smallToggle,
  setNotificationToggle,
  setDarkModeToggle,
  setAutoSaveToggle,
  setLargeToggle,
  setSmallToggle,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Toggle Components
      </h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Toggle
            checked={notificationToggle}
            onChange={setNotificationToggle}
            label="Notifications"
            leftIcon={<NotificationIcon />}
            variant="primary"
          />
          
          <Toggle
            checked={darkModeToggle}
            onChange={setDarkModeToggle}
            leftIcon={<SunIcon />}
            rightIcon={<MoonIcon />}
            leftLabel="Light"
            rightLabel="Dark"
            variant="primary"
          />
          
          <Toggle
            checked={autoSaveToggle}
            onChange={setAutoSaveToggle}
            label="Auto Save"
            rightIcon={<SaveIcon />}
            variant="success"
          />
          
          <Toggle
            checked={true}
            onChange={() => {}}
            label="Disabled Toggle"
            disabled
            variant="primary"
          />
          
          <Toggle
            checked={largeToggle}
            onChange={setLargeToggle}
            label="Large Size"
            size="lg"
            variant="accent"
          />
          
          <Toggle
            checked={smallToggle}
            onChange={setSmallToggle}
            label="Small Size"
            size="sm"
            variant="success"
          />
        </div>
      </div>
    </div>
  );
};

export default ToggleTestSection; 