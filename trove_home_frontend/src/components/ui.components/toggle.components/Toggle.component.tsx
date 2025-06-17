import React from 'react';
import { ToggleProps } from './Toggle.types';
import { TOGGLE_DEFAULTS, TOGGLE_BASE_CLASSES } from './Toggle.constants';
import { 
  getSizeClasses, 
  getToggleClasses, 
  getThumbClasses, 
  getTextColorClass,
  getThumbAwareIconColorClass
} from './Toggle.utils';

class Toggle extends React.Component<ToggleProps> {
  private handleToggle = (): void => {
    const { onChange, disabled, checked } = this.props;
    
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  private handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.handleToggle();
    }
  };

  render(): React.ReactNode {
    const {
      checked,
      label,
      disabled = TOGGLE_DEFAULTS.DISABLED,
      size = TOGGLE_DEFAULTS.SIZE,
      variant = TOGGLE_DEFAULTS.VARIANT,
      leftIcon,
      rightIcon,
      leftLabel,
      rightLabel,
      className = '',
      'data-testid': dataTestId
    } = this.props;

    const sizeClasses = getSizeClasses(size);
    const toggleClasses = getToggleClasses(size, variant, checked, disabled);
    const thumbClasses = getThumbClasses(size, checked);

    return (
      <div className={`${TOGGLE_BASE_CLASSES.CONTAINER} ${className}`.trim()}>
        {(leftLabel || leftIcon) && (
          <div className={TOGGLE_BASE_CLASSES.SIDE_CONTAINER}>
            {leftIcon && (
              <span className={`${sizeClasses.icon} ${getTextColorClass(!checked)}`}>
                {leftIcon}
              </span>
            )}
            {leftLabel && (
              <span className={`${TOGGLE_BASE_CLASSES.SIDE_LABEL} ${getTextColorClass(!checked)}`}>
                {leftLabel}
              </span>
            )}
          </div>
        )}
        
        <div className={TOGGLE_BASE_CLASSES.LABEL_CONTAINER}>
          <button
            type="button"
            className={toggleClasses}
            role="switch"
            aria-checked={checked}
            aria-label={label}
            onClick={this.handleToggle}
            onKeyDown={this.handleKeyDown}
            disabled={disabled}
            data-testid={dataTestId}
          >
            {/* Left icon inside toggle */}
            {leftIcon && (
              <div className={`${TOGGLE_BASE_CLASSES.ICON_LEFT} ${sizeClasses.icon}`}>
                <span className={getThumbAwareIconColorClass(!checked, !checked)}>
                  {leftIcon}
                </span>
              </div>
            )}
            
            {/* Sliding thumb/switch */}
            <span className={thumbClasses} />
            
            {/* Right icon inside toggle */}
            {rightIcon && (
              <div className={`${TOGGLE_BASE_CLASSES.ICON_RIGHT} ${sizeClasses.icon}`}>
                <span className={getThumbAwareIconColorClass(checked, checked)}>
                  {rightIcon}
                </span>
              </div>
            )}
          </button>
          
          {label && (
            <span className={TOGGLE_BASE_CLASSES.LABEL}>
              {label}
            </span>
          )}
        </div>
        
        {rightLabel && (
          <div className={TOGGLE_BASE_CLASSES.SIDE_CONTAINER}>
            <span className={`${TOGGLE_BASE_CLASSES.SIDE_LABEL} ${getTextColorClass(checked)}`}>
              {rightLabel}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default Toggle;
export type { ToggleProps };
