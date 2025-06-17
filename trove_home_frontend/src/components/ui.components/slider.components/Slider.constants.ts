export const SLIDER_DEFAULTS = {
  MIN: 0,
  MAX: 100,
  STEP: 1,
  DISABLED: false,
  SHOW_VALUE: false,
} as const;

export const SLIDER_CLASSES = {
  BASE: 'w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer',
  DISABLED: 'opacity-50 cursor-not-allowed',
  CONTAINER: 'w-full',
  LABEL_CONTAINER: 'flex justify-between items-center mb-2',
  LABEL: 'block text-sm font-medium text-gray-700',
  VALUE_DISPLAY: 'text-sm text-gray-500 font-medium',
  MIN_MAX_CONTAINER: 'flex justify-between text-xs text-gray-500 mt-1',
} as const;

export const SLIDER_STYLES = `
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