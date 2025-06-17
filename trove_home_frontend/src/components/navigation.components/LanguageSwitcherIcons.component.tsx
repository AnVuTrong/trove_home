import React from 'react';

export const EnIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span className={`text-xs font-semibold ${className}`}>
    EN
  </span>
);

export const ViIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span className={`text-xs font-semibold ${className}`}>
    VI
  </span>
); 