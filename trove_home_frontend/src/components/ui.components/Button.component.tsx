import React from 'react';
import { translate } from '../../i18n/TranslationUtils.utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  'data-testid'?: string;
}

class Button extends React.Component<ButtonProps> {
  private getVariantClasses(): string {
    const { variant = 'primary' } = this.props;
    
    const variantClasses = {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600',
      secondary: 'bg-gray-600 hover:bg-gray-700 text-white border-gray-600',
      danger: 'bg-red-600 hover:bg-red-700 text-white border-red-600',
      success: 'bg-green-600 hover:bg-green-700 text-white border-green-600',
      outline: 'bg-transparent hover:bg-gray-50 text-gray-700 border-gray-300'
    };
    
    return variantClasses[variant];
  }

  private getSizeClasses(): string {
    const { size = 'md' } = this.props;
    
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
      xl: 'px-8 py-4 text-xl'
    };
    
    return sizeClasses[size];
  }

  private getDisabledClasses(): string {
    return this.props.disabled ? 'opacity-50 cursor-not-allowed' : '';
  }

  private handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const { onClick, disabled, loading } = this.props;
    
    if (!disabled && !loading && onClick) {
      onClick(event);
    }
  };

  render(): React.ReactNode {
    const {
      children,
      type = 'button',
      disabled = false,
      loading = false,
      className = '',
      'data-testid': dataTestId
    } = this.props;

    const baseClasses = 'font-medium rounded-md border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
    const variantClasses = this.getVariantClasses();
    const sizeClasses = this.getSizeClasses();
    const disabledClasses = this.getDisabledClasses();
    
    const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${disabledClasses} ${className}`.trim();

    return (
      <button
        type={type}
        disabled={disabled || loading}
        onClick={this.handleClick}
        className={combinedClasses}
        data-testid={dataTestId}
      >
        {loading ? (
          <div className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            {translate('common.loading', 'Loading...')}
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
}

export default Button;
export type { ButtonProps }; 