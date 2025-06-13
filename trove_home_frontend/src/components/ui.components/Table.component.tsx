import React from 'react';

interface TableProps {
  children: React.ReactNode;
  variant?: 'default' | 'striped' | 'bordered' | 'borderless';
  size?: 'sm' | 'md' | 'lg';
  responsive?: boolean;
  hover?: boolean;
  caption?: string;
  className?: string;
  id?: string;
  'data-testid'?: string;
}

class Table extends React.Component<TableProps> {
  private getVariantClasses(): string {
    const { variant = 'default' } = this.props;
    
    const variantClasses = {
      default: 'border-collapse',
      striped: 'border-collapse',
      bordered: 'border-collapse border border-gray-300',
      borderless: 'border-collapse'
    };
    
    return variantClasses[variant];
  }

  private getSizeClasses(): string {
    const { size = 'md' } = this.props;
    
    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    };
    
    return sizeClasses[size];
  }

  private getHoverClasses(): string {
    return this.props.hover ? 'hover-rows' : '';
  }

  private renderTable(): React.ReactNode {
    const {
      children,
      variant,
      hover,
      caption,
      className = '',
      id,
      'data-testid': dataTestId
    } = this.props;

    const variantClasses = this.getVariantClasses();
    const sizeClasses = this.getSizeClasses();
    const hoverClasses = this.getHoverClasses();
    
    const tableClasses = `w-full ${variantClasses} ${sizeClasses} ${hoverClasses} ${className}`.trim();

    // Apply striped styling if variant is striped
    const tableStyle: React.CSSProperties = {};
    if (variant === 'striped') {
      // This will be handled by CSS-in-JS or global styles
      // For now, we'll add a class that can be styled globally
    }

    return (
      <table
        className={tableClasses}
        style={tableStyle}
        id={id}
        data-testid={dataTestId}
        data-variant={variant}
        data-hover={hover}
      >
        {caption && (
          <caption className="caption-bottom text-sm text-gray-500 p-2">
            {caption}
          </caption>
        )}
        {children}
      </table>
    );
  }

  render(): React.ReactNode {
    const { responsive } = this.props;

    if (responsive) {
      return (
        <div className="overflow-x-auto">
          {this.renderTable()}
        </div>
      );
    }

    return this.renderTable();
  }
}

export default Table;
export type { TableProps }; 