import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'success' | 'accent';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftLabel?: string;
  rightLabel?: string;
  className?: string;
  'data-testid'?: string;
}

class Toggle extends React.Component<ToggleProps> {
  private getSizeClasses(): { toggle: string; thumb: string; icon: string } {
    const { size = 'md' } = this.props;
    
    const sizeClasses = {
      sm: {
        toggle: 'w-9 h-5',
        thumb: 'w-4 h-4',
        icon: 'w-3 h-3'
      },
      md: {
        toggle: 'w-11 h-6',
        thumb: 'w-5 h-5',
        icon: 'w-4 h-4'
      },
      lg: {
        toggle: 'w-14 h-7',
        thumb: 'w-6 h-6',
        icon: 'w-5 h-5'
      }
    };
    
    return sizeClasses[size];
  }

  private getVariantClasses(): string {
    const { variant = 'primary', checked } = this.props;
    
    if (!checked) {
      return 'bg-gray-200 border-gray-300';
    }
    
    const variantClasses = {
      primary: 'bg-primary border-primary',
      success: 'bg-green-500 border-green-500',
      accent: 'bg-accent border-accent'
    };
    
    return variantClasses[variant];
  }

  private getThumbTranslateClass(): string {
    const { checked, size = 'md' } = this.props;
    
    if (!checked) return 'translate-x-0';
    
    const translateClasses = {
      sm: 'translate-x-4',
      md: 'translate-x-5',
      lg: 'translate-x-7'
    };
    
    return translateClasses[size];
  }

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
      disabled = false,
      leftIcon,
      rightIcon,
      leftLabel,
      rightLabel,
      className = '',
      'data-testid': dataTestId
    } = this.props;

    const sizeClasses = this.getSizeClasses();
    const variantClasses = this.getVariantClasses();
    const thumbTranslateClass = this.getThumbTranslateClass();
    
    const baseToggleClasses = 'relative inline-flex border-2 rounded-full cursor-pointer transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
    
    const toggleClasses = `${baseToggleClasses} ${sizeClasses.toggle} ${variantClasses} ${disabledClasses}`.trim();
    
    const thumbClasses = `${sizeClasses.thumb} inline-block bg-white rounded-full shadow transform transition duration-200 ease-in-out ${thumbTranslateClass}`;

    return (
      <div className={`flex items-center space-x-3 ${className}`.trim()}>
        {(leftLabel || leftIcon) && (
          <div className="flex items-center space-x-1">
            {leftIcon && (
              <span className={`${sizeClasses.icon} ${!checked ? 'text-gray-900' : 'text-gray-400'}`}>
                {leftIcon}
              </span>
            )}
            {leftLabel && (
              <span className={`text-sm font-medium ${!checked ? 'text-gray-900' : 'text-gray-400'}`}>
                {leftLabel}
              </span>
            )}
          </div>
        )}
        
        <div className="flex flex-col items-center">
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
            <span className={thumbClasses} />
          </button>
          
          {label && (
            <span className="mt-1 text-xs text-gray-600 text-center">
              {label}
            </span>
          )}
        </div>
        
        {(rightLabel || rightIcon) && (
          <div className="flex items-center space-x-1">
            {rightIcon && (
              <span className={`${sizeClasses.icon} ${checked ? 'text-gray-900' : 'text-gray-400'}`}>
                {rightIcon}
              </span>
            )}
            {rightLabel && (
              <span className={`text-sm font-medium ${checked ? 'text-gray-900' : 'text-gray-400'}`}>
                {rightLabel}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Toggle;
export type { ToggleProps }; 