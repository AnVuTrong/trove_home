export interface SliderProps {
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