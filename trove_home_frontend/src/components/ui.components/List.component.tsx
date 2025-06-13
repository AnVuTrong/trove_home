import React from 'react';

interface ListProps {
  children: React.ReactNode;
  as?: 'ul' | 'ol';
  variant?: 'default' | 'disc' | 'circle' | 'square' | 'decimal' | 'decimal-leading-zero' | 'lower-roman' | 'upper-roman' | 'lower-alpha' | 'upper-alpha' | 'none';
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'default' | 'muted' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  className?: string;
  id?: string;
  'data-testid'?: string;
  onClick?: (event: React.MouseEvent) => void;
}

class List extends React.Component<ListProps> {
  private getVariantClasses(): string {
    const { variant = 'default', as = 'ul' } = this.props;
    
    if (variant === 'default') {
      return as === 'ul' ? 'list-disc' : 'list-decimal';
    }
    
    const variantClasses = {
      disc: 'list-disc',
      circle: 'list-circle',
      square: 'list-square',
      decimal: 'list-decimal',
      'decimal-leading-zero': 'list-decimal-leading-zero',
      'lower-roman': 'list-lower-roman',
      'upper-roman': 'list-upper-roman',
      'lower-alpha': 'list-lower-alpha',
      'upper-alpha': 'list-upper-alpha',
      none: 'list-none'
    };
    
    return variantClasses[variant] || 'list-disc';
  }

  private getSpacingClasses(): string {
    const { spacing = 'sm' } = this.props;
    
    if (spacing === 'none') return '';
    
    const spacingClasses = {
      xs: 'space-y-1',
      sm: 'space-y-2',
      md: 'space-y-4',
      lg: 'space-y-6',
      xl: 'space-y-8',
      none: ''
    };
    
    return spacingClasses[spacing];
  }

  private getSizeClasses(): string {
    const { size = 'md' } = this.props;
    
    const sizeClasses = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl'
    };
    
    return sizeClasses[size];
  }

  private getColorClasses(): string {
    const { color = 'default' } = this.props;
    
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

  private handleClick = (event: React.MouseEvent): void => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };

  render(): React.ReactNode {
    const {
      children,
      as: Component = 'ul',
      className = '',
      id,
      'data-testid': dataTestId,
      onClick
    } = this.props;

    const variantClasses = this.getVariantClasses();
    const spacingClasses = this.getSpacingClasses();
    const sizeClasses = this.getSizeClasses();
    const colorClasses = this.getColorClasses();
    
    const baseClasses = 'ml-6';
    const combinedClasses = `${baseClasses} ${variantClasses} ${spacingClasses} ${sizeClasses} ${colorClasses} ${className}`.trim();

    return (
      <Component
        className={combinedClasses}
        id={id}
        data-testid={dataTestId}
        onClick={onClick ? this.handleClick : undefined}
      >
        {children}
      </Component>
    );
  }
}

export default List;
export type { ListProps }; 