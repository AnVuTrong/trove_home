import React from 'react';

interface TableRowProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  hover?: boolean;
  selected?: boolean;
  clickable?: boolean;
  className?: string;
  id?: string;
  'data-testid'?: string;
  onClick?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
}

interface TableRowState {
  isHovered: boolean;
}

class TableRow extends React.Component<TableRowProps, TableRowState> {
  constructor(props: TableRowProps) {
    super(props);
    this.state = {
      isHovered: false
    };
  }

  private getVariantClasses(): string {
    const { variant = 'default', selected } = this.props;
    
    if (selected) {
      return 'bg-blue-50 border-blue-200';
    }
    
    const variantClasses = {
      default: '',
      success: 'bg-green-50',
      warning: 'bg-yellow-50',
      danger: 'bg-red-50',
      info: 'bg-blue-50'
    };
    
    return variantClasses[variant];
  }

  private getHoverClasses(): string {
    const { hover, clickable } = this.props;
    const { isHovered } = this.state;
    
    if (!hover && !clickable) return '';
    
    const baseHoverClass = 'transition-colors duration-150';
    
    if (isHovered && (hover || clickable)) {
      return `${baseHoverClass} bg-gray-50`;
    }
    
    return baseHoverClass;
  }

  private getClickableClasses(): string {
    const { clickable } = this.props;
    
    if (!clickable) return '';
    
    return 'cursor-pointer select-none';
  }

  private handleClick = (event: React.MouseEvent<HTMLTableRowElement>): void => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };

  private handleMouseEnter = (event: React.MouseEvent<HTMLTableRowElement>): void => {
    this.setState({ isHovered: true });
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(event);
    }
  };

  private handleMouseLeave = (event: React.MouseEvent<HTMLTableRowElement>): void => {
    this.setState({ isHovered: false });
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  render(): React.ReactNode {
    const {
      children,
      hover,
      clickable,
      selected,
      className = '',
      id,
      'data-testid': dataTestId,
      onClick
    } = this.props;

    const variantClasses = this.getVariantClasses();
    const hoverClasses = this.getHoverClasses();
    const clickableClasses = this.getClickableClasses();
    
    const combinedClasses = `${variantClasses} ${hoverClasses} ${clickableClasses} ${className}`.trim();

    return (
      <tr
        className={combinedClasses}
        id={id}
        data-testid={dataTestId}
        data-selected={selected}
        data-clickable={clickable}
        onClick={onClick ? this.handleClick : undefined}
        onMouseEnter={hover || clickable ? this.handleMouseEnter : undefined}
        onMouseLeave={hover || clickable ? this.handleMouseLeave : undefined}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
      >
        {children}
      </tr>
    );
  }
}

export default TableRow;
export type { TableRowProps }; 