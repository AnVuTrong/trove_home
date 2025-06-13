import React from 'react';

interface TableHeaderProps {
  children: React.ReactNode;
  sticky?: boolean;
  variant?: 'default' | 'dark' | 'light';
  className?: string;
  id?: string;
  'data-testid'?: string;
}

class TableHeader extends React.Component<TableHeaderProps> {
  private getVariantClasses(): string {
    const { variant = 'default' } = this.props;
    
    const variantClasses = {
      default: 'bg-gray-50 text-gray-700',
      dark: 'bg-gray-800 text-white',
      light: 'bg-white text-gray-900'
    };
    
    return variantClasses[variant];
  }

  private getStickyClasses(): string {
    const { sticky } = this.props;
    
    if (!sticky) return '';
    
    return 'sticky top-0 z-10';
  }

  render(): React.ReactNode {
    const {
      children,
      className = '',
      id,
      'data-testid': dataTestId
    } = this.props;

    const variantClasses = this.getVariantClasses();
    const stickyClasses = this.getStickyClasses();
    
    const combinedClasses = `${variantClasses} ${stickyClasses} ${className}`.trim();

    return (
      <thead
        className={combinedClasses}
        id={id}
        data-testid={dataTestId}
      >
        {children}
      </thead>
    );
  }
}

export default TableHeader;
export type { TableHeaderProps }; 