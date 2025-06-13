import React from 'react';

interface FlexProps {
  children: React.ReactNode;
  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'main' | 'nav';
  direction?: 'row' | 'row-reverse' | 'col' | 'col-reverse';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  grow?: boolean | number;
  shrink?: boolean | number;
  basis?: string | number;
  className?: string;
  id?: string;
  'data-testid'?: string;
  onClick?: (event: React.MouseEvent) => void;
}

class Flex extends React.Component<FlexProps> {
  private getDirectionClasses(): string {
    const { direction = 'row' } = this.props;
    
    const directionClasses = {
      row: 'flex-row',
      'row-reverse': 'flex-row-reverse',
      col: 'flex-col',
      'col-reverse': 'flex-col-reverse'
    };
    
    return directionClasses[direction];
  }

  private getWrapClasses(): string {
    const { wrap = 'nowrap' } = this.props;
    
    const wrapClasses = {
      nowrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      'wrap-reverse': 'flex-wrap-reverse'
    };
    
    return wrapClasses[wrap];
  }

  private getJustifyClasses(): string {
    const { justify } = this.props;
    
    if (!justify) return '';
    
    const justifyClasses = {
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly'
    };
    
    return justifyClasses[justify];
  }

  private getAlignClasses(): string {
    const { align } = this.props;
    
    if (!align) return '';
    
    const alignClasses = {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
      stretch: 'items-stretch'
    };
    
    return alignClasses[align];
  }

  private getAlignContentClasses(): string {
    const { alignContent } = this.props;
    
    if (!alignContent) return '';
    
    const alignContentClasses = {
      start: 'content-start',
      end: 'content-end',
      center: 'content-center',
      between: 'content-between',
      around: 'content-around',
      evenly: 'content-evenly',
      stretch: 'content-stretch'
    };
    
    return alignContentClasses[alignContent];
  }

  private getGapClasses(): string {
    const { gap } = this.props;
    
    if (!gap || gap === 'none') return '';
    
    const gapClasses = {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
      '2xl': 'gap-12',
      none: ''
    };
    
    return gapClasses[gap];
  }

  private getFlexClasses(): string {
    const { grow, shrink, basis } = this.props;
    const classes = [];
    
    if (grow === true) {
      classes.push('flex-grow');
    } else if (typeof grow === 'number') {
      classes.push(`flex-grow-${grow}`);
    }
    
    if (shrink === true) {
      classes.push('flex-shrink');
    } else if (typeof shrink === 'number') {
      classes.push(`flex-shrink-${shrink}`);
    }
    
    if (basis) {
      if (typeof basis === 'string') {
        classes.push(`flex-basis-${basis}`);
      }
    }
    
    return classes.join(' ');
  }

  private handleClick = (event: React.MouseEvent): void => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };

  render(): React.ReactNode {
    const {
      children,
      as: Component = 'div',
      className = '',
      id,
      'data-testid': dataTestId,
      onClick
    } = this.props;

    const baseClasses = 'flex';
    const directionClasses = this.getDirectionClasses();
    const wrapClasses = this.getWrapClasses();
    const justifyClasses = this.getJustifyClasses();
    const alignClasses = this.getAlignClasses();
    const alignContentClasses = this.getAlignContentClasses();
    const gapClasses = this.getGapClasses();
    const flexClasses = this.getFlexClasses();
    
    const combinedClasses = `${baseClasses} ${directionClasses} ${wrapClasses} ${justifyClasses} ${alignClasses} ${alignContentClasses} ${gapClasses} ${flexClasses} ${className}`.trim();

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

export default Flex;
export type { FlexProps }; 