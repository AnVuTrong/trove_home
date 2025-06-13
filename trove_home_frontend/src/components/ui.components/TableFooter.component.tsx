import React from 'react';

interface TableFooterProps {
  children: React.ReactNode;
  sticky?: boolean;
  variant?: 'default' | 'dark' | 'light';
  className?: string;
  id?: string;
  'data-testid'?: string;
}

class TableFooter extends React.Component<TableFooterProps> {
  private getVariantClasses(): string {
    const { variant = 'default' } = this.props;
    
    const variantClasses = {
      default: 'bg-gray-50 text-gray-700 border-t border-gray-200',
      dark: 'bg-gray-800 text-white border-t border-gray-600',
      light: 'bg-white text-gray-900 border-t border-gray-200'
    };
    
    return variantClasses[variant];
  }

  private getStickyClasses(): string {
    const { sticky } = this.props;
    
    if (!sticky) return '';
    
    return 'sticky bottom-0 z-10';
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
      <tfoot
        className={combinedClasses}
        id={id}
        data-testid={dataTestId}
      >
        {children}
      </tfoot>
    );
  }
}

export default TableFooter;
export type { TableFooterProps }; 