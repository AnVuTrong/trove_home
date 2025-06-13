import React from 'react';

interface TableCellProps {
  children?: React.ReactNode;
  as?: 'td' | 'th';
  align?: 'left' | 'center' | 'right';
  verticalAlign?: 'top' | 'middle' | 'bottom';
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  scope?: 'col' | 'row' | 'colgroup' | 'rowgroup';
  colSpan?: number;
  rowSpan?: number;
  sortable?: boolean;
  sortDirection?: 'asc' | 'desc' | 'none';
  className?: string;
  id?: string;
  'data-testid'?: string;
  onClick?: (event: React.MouseEvent) => void;
}

interface TableCellState {
  isHovered: boolean;
}

class TableCell extends React.Component<TableCellProps, TableCellState> {
  constructor(props: TableCellProps) {
    super(props);
    this.state = {
      isHovered: false
    };
  }

  private getAlignClasses(): string {
    const { align } = this.props;
    
    if (!align) return '';
    
    const alignClasses = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    };
    
    return alignClasses[align];
  }

  private getVerticalAlignClasses(): string {
    const { verticalAlign } = this.props;
    
    if (!verticalAlign) return '';
    
    const verticalAlignClasses = {
      top: 'align-top',
      middle: 'align-middle',
      bottom: 'align-bottom'
    };
    
    return verticalAlignClasses[verticalAlign];
  }

  private getPaddingClasses(): string {
    const { padding = 'md' } = this.props;
    
    const paddingClasses = {
      none: 'p-0',
      sm: 'px-2 py-1',
      md: 'px-4 py-2',
      lg: 'px-6 py-3'
    };
    
    return paddingClasses[padding];
  }

  private getSortableClasses(): string {
    const { sortable, as } = this.props;
    
    if (!sortable || as !== 'th') return '';
    
    return 'cursor-pointer select-none hover:bg-gray-50 transition-colors duration-150';
  }

  private getInlineStyles(): React.CSSProperties {
    const { width, minWidth, maxWidth } = this.props;
    const styles: React.CSSProperties = {};
    
    if (width !== undefined) {
      styles.width = typeof width === 'number' ? `${width}px` : width;
    }
    if (minWidth !== undefined) {
      styles.minWidth = typeof minWidth === 'number' ? `${minWidth}px` : minWidth;
    }
    if (maxWidth !== undefined) {
      styles.maxWidth = typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth;
    }
    
    return styles;
  }

  private renderSortIcon(): React.ReactNode {
    const { sortable, sortDirection, as } = this.props;
    
    if (!sortable || as !== 'th') return null;
    
    return (
      <span className="ml-2 inline-flex flex-col">
        <svg
          className={`w-3 h-3 ${
            sortDirection === 'asc' ? 'text-gray-900' : 'text-gray-400'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          className={`w-3 h-3 -mt-1 ${
            sortDirection === 'desc' ? 'text-gray-900' : 'text-gray-400'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    );
  }

  private handleClick = (event: React.MouseEvent): void => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };

  private handleMouseEnter = (): void => {
    this.setState({ isHovered: true });
  };

  private handleMouseLeave = (): void => {
    this.setState({ isHovered: false });
  };

  render(): React.ReactNode {
    const {
      children,
      as: Component = 'td',
      scope,
      colSpan,
      rowSpan,
      sortable,
      sortDirection,
      className = '',
      id,
      'data-testid': dataTestId,
      onClick
    } = this.props;

    const alignClasses = this.getAlignClasses();
    const verticalAlignClasses = this.getVerticalAlignClasses();
    const paddingClasses = this.getPaddingClasses();
    const sortableClasses = this.getSortableClasses();
    const inlineStyles = this.getInlineStyles();
    
    const baseClasses = 'border-b border-gray-200';
    const combinedClasses = `${baseClasses} ${alignClasses} ${verticalAlignClasses} ${paddingClasses} ${sortableClasses} ${className}`.trim();

    const cellProps: any = {
      className: combinedClasses,
      style: inlineStyles,
      id,
      'data-testid': dataTestId,
      onClick: onClick ? this.handleClick : undefined,
      onMouseEnter: sortable ? this.handleMouseEnter : undefined,
      onMouseLeave: sortable ? this.handleMouseLeave : undefined
    };

    // Add table-specific attributes
    if (Component === 'th') {
      (cellProps as React.ThHTMLAttributes<HTMLTableCellElement>).scope = scope;
    }
    
    if (colSpan !== undefined) {
      (cellProps as React.TdHTMLAttributes<HTMLTableCellElement>).colSpan = colSpan;
    }
    
    if (rowSpan !== undefined) {
      (cellProps as React.TdHTMLAttributes<HTMLTableCellElement>).rowSpan = rowSpan;
    }

    return (
      <Component
        {...cellProps}
        aria-sort={
          Component === 'th' && sortable
            ? sortDirection === 'none'
              ? 'none'
              : sortDirection
            : undefined
        }
      >
        <div className="flex items-center">
          {children}
          {this.renderSortIcon()}
        </div>
      </Component>
    );
  }
}

export default TableCell;
export type { TableCellProps }; 