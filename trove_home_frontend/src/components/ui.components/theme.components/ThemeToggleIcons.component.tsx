import React from 'react';

// Sun icon component - removed hardcoded colors to let Toggle component handle styling
export const SunIcon: React.FC = () => (
  <svg 
    aria-hidden="true" 
    xmlns="http://www.w3.org/2000/svg" 
    width="18" 
    height="18" 
    fill="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      fillRule="evenodd" 
      d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" 
      clipRule="evenodd"
    />
  </svg>
);

// Moon icon component - removed hardcoded colors to let Toggle component handle styling
export const MoonIcon: React.FC = () => (
  <svg 
    aria-hidden="true" 
    xmlns="http://www.w3.org/2000/svg" 
    width="18" 
    height="18" 
    fill="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      fillRule="evenodd" 
      d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" 
      clipRule="evenodd"
    />
  </svg>
); 