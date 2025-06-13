import React from 'react';

interface TableBodyProps {
  children: React.ReactNode;
  striped?: boolean;
  className?: string;
  id?: string;
  'data-testid'?: string;
}

class TableBody extends React.Component<TableBodyProps> {
  private getStripedClasses(): string {
    const { striped } = this.props;
    
    if (!striped) return '';
    
    // This will need custom CSS or we can use data attributes to target even/odd rows
    return 'striped-rows';
  }

  render(): React.ReactNode {
    const {
      children,
      striped,
      className = '',
      id,
      'data-testid': dataTestId
    } = this.props;

    const stripedClasses = this.getStripedClasses();
    const combinedClasses = `${stripedClasses} ${className}`.trim();

    return (
      <tbody
        className={combinedClasses}
        id={id}
        data-testid={dataTestId}
        data-striped={striped}
      >
        {children}
      </tbody>
    );
  }
}

export default TableBody;
export type { TableBodyProps }; 