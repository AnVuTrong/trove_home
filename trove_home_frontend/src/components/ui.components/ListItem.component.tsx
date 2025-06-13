import React from 'react';

interface ListItemProps {
  children: React.ReactNode;
  variant?: 'default' | 'interactive' | 'selected' | 'disabled';
  color?: 'default' | 'muted' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  clickable?: boolean;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
  id?: string;
  'data-testid'?: string;
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLLIElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLLIElement>) => void;
}

interface ListItemState {
  isHovered: boolean;
}

class ListItem extends React.Component<ListItemProps, ListItemState> {
  constructor(props: ListItemProps) {
    super(props);
    this.state = {
      isHovered: false
    };
  }

  private getVariantClasses(): string {
    const { variant = 'default', selected, disabled } = this.props;
    const { isHovered } = this.state;
    
    if (disabled) {
      return 'opacity-50 cursor-not-allowed';
    }
    
    if (selected) {
      return 'bg-blue-50 text-blue-900 border-l-4 border-blue-500 pl-4';
    }
    
    const variantClasses = {
      default: '',
      interactive: isHovered ? 'bg-gray-50' : '',
      selected: 'bg-blue-50 text-blue-900',
      disabled: 'opacity-50 cursor-not-allowed'
    };
    
    return variantClasses[variant];
  }

  private getColorClasses(): string {
    const { color = 'default', selected } = this.props;
    
    if (selected) return ''; // Color is handled by variant classes when selected
    
    const colorClasses = {
      default: 'text-gray-900',
      muted: 'text-gray-600',
      primary: 'text-blue-600',
      secondary: 'text-gray-600',
      success: 'text-green-600',
      warning: 'text-yellow-600',
      danger: 'text-red-600'
    };
    
    return colorClasses[color];
  }

  private getSizeClasses(): string {
    const { size = 'md' } = this.props;
    
    const sizeClasses = {
      xs: 'text-xs py-1',
      sm: 'text-sm py-1',
      md: 'text-base py-1',
      lg: 'text-lg py-2',
      xl: 'text-xl py-2'
    };
    
    return sizeClasses[size];
  }

  private getInteractiveClasses(): string {
    const { clickable, variant } = this.props;
    
    if (!clickable && variant !== 'interactive') return '';
    
    return 'cursor-pointer transition-colors duration-150 hover:bg-gray-50 rounded-md px-2 -mx-2';
  }

  private handleClick = (event: React.MouseEvent<HTMLLIElement>): void => {
    const { disabled, onClick } = this.props;
    
    if (disabled) return;
    
    if (onClick) {
      onClick(event);
    }
  };

  private handleMouseEnter = (event: React.MouseEvent<HTMLLIElement>): void => {
    const { disabled } = this.props;
    
    if (!disabled) {
      this.setState({ isHovered: true });
    }
    
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(event);
    }
  };

  private handleMouseLeave = (event: React.MouseEvent<HTMLLIElement>): void => {
    this.setState({ isHovered: false });
    
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  render(): React.ReactNode {
    const {
      children,
      clickable,
      variant,
      disabled,
      selected,
      className = '',
      id,
      'data-testid': dataTestId,
      onClick
    } = this.props;

    const variantClasses = this.getVariantClasses();
    const colorClasses = this.getColorClasses();
    const sizeClasses = this.getSizeClasses();
    const interactiveClasses = this.getInteractiveClasses();
    
    const combinedClasses = `${variantClasses} ${colorClasses} ${sizeClasses} ${interactiveClasses} ${className}`.trim();

    const shouldHandleEvents = clickable || variant === 'interactive';

    return (
      <li
        className={combinedClasses}
        id={id}
        data-testid={dataTestId}
        data-selected={selected}
        data-clickable={clickable}
        data-disabled={disabled}
        onClick={onClick ? this.handleClick : undefined}
        onMouseEnter={shouldHandleEvents ? this.handleMouseEnter : undefined}
        onMouseLeave={shouldHandleEvents ? this.handleMouseLeave : undefined}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable && !disabled ? 0 : undefined}
        aria-disabled={disabled}
        aria-selected={selected}
      >
        {children}
      </li>
    );
  }
}

export default ListItem;
export type { ListItemProps }; 