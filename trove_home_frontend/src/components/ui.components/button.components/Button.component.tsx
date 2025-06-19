import React from 'react';
import { ButtonProps } from './Button.types';
import { ButtonStyleUtils } from './Button.utils';
import LoadingSpinner from './LoadingSpinner.component';

class Button extends React.Component<ButtonProps> {
  private handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const { onClick, disabled, loading } = this.props;
    
    if (!disabled && !loading && onClick) {
      onClick(event);
    }
  };

  private handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const { onMouseEnter, disabled, loading } = this.props;
    
    if (!disabled && !loading && onMouseEnter) {
      onMouseEnter(event);
    }
  };

  private renderLoadingSpinner(): React.ReactNode {
    return <LoadingSpinner />;
  }

  render(): React.ReactNode {
    const {
      children,
      variant = 'primary',
      size = 'md',
      type = 'button',
      disabled = false,
      loading = false,
      className = '',
      'data-testid': dataTestId
    } = this.props;

    const combinedClasses = ButtonStyleUtils.getCombinedClasses(
      variant,
      size,
      disabled,
      className
    );

    return (
      <button
        type={type}
        disabled={disabled || loading}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        className={combinedClasses}
        data-testid={dataTestId}
      >
        {loading ? this.renderLoadingSpinner() : children}
      </button>
    );
  }
}

export default Button; 