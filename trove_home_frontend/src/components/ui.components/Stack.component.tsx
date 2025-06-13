import React from 'react';

interface StackProps {
  children: React.ReactNode;
  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'main' | 'nav';
  direction?: 'vertical' | 'horizontal';
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  divider?: React.ReactNode;
  className?: string;
  id?: string;
  'data-testid'?: string;
  onClick?: (event: React.MouseEvent) => void;
}

class Stack extends React.Component<StackProps> {
  private getDirectionClasses(): string {
    const { direction = 'vertical' } = this.props;
    
    const directionClasses = {
      vertical: 'flex-col',
      horizontal: 'flex-row'
    };
    
    return directionClasses[direction];
  }

  private getSpacingClasses(): string {
    const { spacing = 'md', direction = 'vertical' } = this.props;
    
    if (spacing === 'none') return '';
    
    const spacingMap = {
      xs: direction === 'vertical' ? 'space-y-1' : 'space-x-1',
      sm: direction === 'vertical' ? 'space-y-2' : 'space-x-2',
      md: direction === 'vertical' ? 'space-y-4' : 'space-x-4',
      lg: direction === 'vertical' ? 'space-y-6' : 'space-x-6',
      xl: direction === 'vertical' ? 'space-y-8' : 'space-x-8',
      '2xl': direction === 'vertical' ? 'space-y-12' : 'space-x-12'
    };
    
    return spacingMap[spacing];
  }

  private getAlignClasses(): string {
    const { align, direction = 'vertical' } = this.props;
    
    if (!align) return '';
    
    // For vertical stack, align controls horizontal alignment (items-*)
    // For horizontal stack, align controls vertical alignment (items-*)
    const alignClasses = {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch'
    };
    
    return alignClasses[align];
  }

  private getJustifyClasses(): string {
    const { justify } = this.props;
    
    if (!justify) return '';
    
    const justifyClasses = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly'
    };
    
    return justifyClasses[justify];
  }

  private getWrapClasses(): string {
    const { wrap } = this.props;
    
    return wrap ? 'flex-wrap' : 'flex-nowrap';
  }

  private renderChildren(): React.ReactNode {
    const { children, divider } = this.props;
    
    if (!divider) {
      return children;
    }

    const childrenArray = React.Children.toArray(children);
    const elementsWithDividers: React.ReactNode[] = [];

    childrenArray.forEach((child, index) => {
      elementsWithDividers.push(child);
      
      // Add divider between elements (not after the last one)
      if (index < childrenArray.length - 1) {
        elementsWithDividers.push(
          <div key={`divider-${index}`} className="flex-shrink-0">
            {divider}
          </div>
        );
      }
    });

    return elementsWithDividers;
  }

  private handleClick = (event: React.MouseEvent): void => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };

  render(): React.ReactNode {
    const {
      as: Component = 'div',
      className = '',
      id,
      'data-testid': dataTestId,
      onClick
    } = this.props;

    const baseClasses = 'flex';
    const directionClasses = this.getDirectionClasses();
    const spacingClasses = this.getSpacingClasses();
    const alignClasses = this.getAlignClasses();
    const justifyClasses = this.getJustifyClasses();
    const wrapClasses = this.getWrapClasses();
    
    const combinedClasses = `${baseClasses} ${directionClasses} ${spacingClasses} ${alignClasses} ${justifyClasses} ${wrapClasses} ${className}`.trim();

    return (
      <Component
        className={combinedClasses}
        id={id}
        data-testid={dataTestId}
        onClick={onClick ? this.handleClick : undefined}
      >
        {this.renderChildren()}
      </Component>
    );
  }
}

export default Stack;
export type { StackProps }; 