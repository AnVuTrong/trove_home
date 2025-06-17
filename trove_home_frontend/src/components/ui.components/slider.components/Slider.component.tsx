import React from 'react';
import { SliderProps } from './Slider.types';
import { SLIDER_DEFAULTS, SLIDER_CLASSES } from './Slider.constants';
import { getSliderClasses } from './Slider.utils';

class Slider extends React.Component<SliderProps> {
  private handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { onChange, disabled } = this.props;
    
    if (!disabled && onChange) {
      const newValue = parseFloat(event.target.value);
      onChange(newValue);
    }
  };

  render(): React.ReactNode {
    const {
      value,
      min = SLIDER_DEFAULTS.MIN,
      max = SLIDER_DEFAULTS.MAX,
      step = SLIDER_DEFAULTS.STEP,
      disabled = SLIDER_DEFAULTS.DISABLED,
      className = '',
      label,
      showValue = SLIDER_DEFAULTS.SHOW_VALUE,
      'data-testid': dataTestId
    } = this.props;

    const sliderClasses = getSliderClasses(disabled, className);

    return (
      <div className={SLIDER_CLASSES.CONTAINER}>
        {label && (
          <div className={SLIDER_CLASSES.LABEL_CONTAINER}>
            <label className={SLIDER_CLASSES.LABEL}>
              {label}
            </label>
            {showValue && (
              <span className={SLIDER_CLASSES.VALUE_DISPLAY}>
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
          className={sliderClasses}
          data-testid={dataTestId}
        />
        <div className={SLIDER_CLASSES.MIN_MAX_CONTAINER}>
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    );
  }
}

export default Slider;
export type { SliderProps }; 