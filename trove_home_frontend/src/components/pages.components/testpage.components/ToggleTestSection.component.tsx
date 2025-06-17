import React from 'react';
import { Toggle, ThemeToggle } from '../../ui.components';
import { 
  NotificationIcon, 
  SaveIcon, 
  ExpandIcon, 
  ShrinkIcon, 
  DisabledIcon 
} from './TestPageIcons.component';

interface ToggleTestSectionProps {
  notificationToggle: boolean;
  autoSaveToggle: boolean;
  largeToggle: boolean;
  smallToggle: boolean;
  setNotificationToggle: (value: boolean) => void;
  setAutoSaveToggle: (value: boolean) => void;
  setLargeToggle: (value: boolean) => void;
  setSmallToggle: (value: boolean) => void;
}

const ToggleTestSection: React.FC<ToggleTestSectionProps> = ({
  notificationToggle,
  autoSaveToggle,
  largeToggle,
  smallToggle,
  setNotificationToggle,
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
            label="Enable Notifications"
            leftIcon={<NotificationIcon />}
            variant="primary"
            leftLabel="Off"
            rightLabel="On"
          />
          
          <ThemeToggle
            label="Theme Mode"
            leftLabel="Light"
            rightLabel="Dark"
            variant="primary"
          />
          
          <Toggle
            checked={autoSaveToggle}
            onChange={setAutoSaveToggle}
            label="Auto Save Documents"
            leftIcon={<SaveIcon />}
            variant="success"
            leftLabel="Manual"
            rightLabel="Auto"
          />
          
          <Toggle
            checked={true}
            onChange={() => {}}
            label="Disabled Feature"
            leftIcon={<DisabledIcon />}
            disabled
            variant="primary"
            leftLabel="Inactive"
            rightLabel="Active"
          />
          
          <Toggle
            checked={largeToggle}
            onChange={setLargeToggle}
            label="Large Display Size"
            leftIcon={<ExpandIcon />}
            size="lg"
            variant="accent"
            leftLabel="Normal"
            rightLabel="Large"
          />
          
          <Toggle
            checked={smallToggle}
            onChange={setSmallToggle}
            label="Compact View Mode"
            leftIcon={<ShrinkIcon />}
            size="sm"
            variant="success"
            leftLabel="Full"
            rightLabel="Compact"
          />
        </div>
      </div>
    </div>
  );
};

export default ToggleTestSection; 