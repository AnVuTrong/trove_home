import React from 'react';

interface GridProps {
  children: React.ReactNode;
  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'main' | 'nav';
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'none' | 'subgrid';
  rows?: 1 | 2 | 3 | 4 | 5 | 6 | 'none' | 'subgrid';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  gapX?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  gapY?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  autoFlow?: 'row' | 'col' | 'dense' | 'row-dense' | 'col-dense';
  autoRows?: 'auto' | 'min' | 'max' | 'fr';
  autoCols?: 'auto' | 'min' | 'max' | 'fr';
  justifyItems?: 'start' | 'end' | 'center' | 'stretch';
  alignItems?: 'start' | 'end' | 'center' | 'stretch';
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  placeItems?: 'start' | 'end' | 'center' | 'stretch';
  placeContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  className?: string;
  id?: string;
  'data-testid'?: string;
  onClick?: (event: React.MouseEvent) => void;
}

class Grid extends React.Component<GridProps> {
  private getColsClasses(): string {
    const { cols } = this.props;
    
    if (!cols) return '';
    
    if (cols === 'none') return 'grid-cols-none';
    if (cols === 'subgrid') return 'grid-cols-subgrid';
    
    return `grid-cols-${cols}`;
  }

  private getRowsClasses(): string {
    const { rows } = this.props;
    
    if (!rows) return '';
    
    if (rows === 'none') return 'grid-rows-none';
    if (rows === 'subgrid') return 'grid-rows-subgrid';
    
    return `grid-rows-${rows}`;
  }

  private getGapClasses(): string {
    const { gap, gapX, gapY } = this.props;
    const classes = [];
    
    if (gap && gap !== 'none') {
      const gapMap = {
        xs: 'gap-1',
        sm: 'gap-2', 
        md: 'gap-4',
        lg: 'gap-6',
        xl: 'gap-8',
        '2xl': 'gap-12'
      };
      classes.push(gapMap[gap]);
    } else {
      if (gapX && gapX !== 'none') {
        const gapXMap = {
          xs: 'gap-x-1',
          sm: 'gap-x-2',
          md: 'gap-x-4', 
          lg: 'gap-x-6',
          xl: 'gap-x-8',
          '2xl': 'gap-x-12'
        };
        classes.push(gapXMap[gapX]);
      }
      
      if (gapY && gapY !== 'none') {
        const gapYMap = {
          xs: 'gap-y-1',
          sm: 'gap-y-2',
          md: 'gap-y-4',
          lg: 'gap-y-6', 
          xl: 'gap-y-8',
          '2xl': 'gap-y-12'
        };
        classes.push(gapYMap[gapY]);
      }
    }
    
    return classes.join(' ');
  }

  private getAutoFlowClasses(): string {
    const { autoFlow } = this.props;
    
    if (!autoFlow) return '';
    
    const autoFlowClasses = {
      row: 'grid-flow-row',
      col: 'grid-flow-col',
      dense: 'grid-flow-dense',
      'row-dense': 'grid-flow-row-dense',
      'col-dense': 'grid-flow-col-dense'
    };
    
    return autoFlowClasses[autoFlow];
  }

  private getAutoRowsClasses(): string {
    const { autoRows } = this.props;
    
    if (!autoRows) return '';
    
    const autoRowsClasses = {
      auto: 'auto-rows-auto',
      min: 'auto-rows-min',
      max: 'auto-rows-max',
      fr: 'auto-rows-fr'
    };
    
    return autoRowsClasses[autoRows];
  }

  private getAutoColsClasses(): string {
    const { autoCols } = this.props;
    
    if (!autoCols) return '';
    
    const autoColsClasses = {
      auto: 'auto-cols-auto',
      min: 'auto-cols-min',
      max: 'auto-cols-max',
      fr: 'auto-cols-fr'
    };
    
    return autoColsClasses[autoCols];
  }

  private getJustifyItemsClasses(): string {
    const { justifyItems } = this.props;
    
    if (!justifyItems) return '';
    
    const justifyItemsClasses = {
      start: 'justify-items-start',
      end: 'justify-items-end',
      center: 'justify-items-center',
      stretch: 'justify-items-stretch'
    };
    
    return justifyItemsClasses[justifyItems];
  }

  private getAlignItemsClasses(): string {
    const { alignItems } = this.props;
    
    if (!alignItems) return '';
    
    const alignItemsClasses = {
      start: 'items-start',
      end: 'items-end',
      center: 'items-center',
      stretch: 'items-stretch'
    };
    
    return alignItemsClasses[alignItems];
  }

  private getJustifyContentClasses(): string {
    const { justifyContent } = this.props;
    
    if (!justifyContent) return '';
    
    const justifyContentClasses = {
      start: 'justify-start',
      end: 'justify-end',
      center: 'justify-center',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
      stretch: 'justify-stretch'
    };
    
    return justifyContentClasses[justifyContent];
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

  private getPlaceItemsClasses(): string {
    const { placeItems } = this.props;
    
    if (!placeItems) return '';
    
    const placeItemsClasses = {
      start: 'place-items-start',
      end: 'place-items-end',
      center: 'place-items-center',
      stretch: 'place-items-stretch'
    };
    
    return placeItemsClasses[placeItems];
  }

  private getPlaceContentClasses(): string {
    const { placeContent } = this.props;
    
    if (!placeContent) return '';
    
    const placeContentClasses = {
      start: 'place-content-start',
      end: 'place-content-end',
      center: 'place-content-center',
      between: 'place-content-between',
      around: 'place-content-around',
      evenly: 'place-content-evenly',
      stretch: 'place-content-stretch'
    };
    
    return placeContentClasses[placeContent];
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

    const baseClasses = 'grid';
    const colsClasses = this.getColsClasses();
    const rowsClasses = this.getRowsClasses();
    const gapClasses = this.getGapClasses();
    const autoFlowClasses = this.getAutoFlowClasses();
    const autoRowsClasses = this.getAutoRowsClasses();
    const autoColsClasses = this.getAutoColsClasses();
    const justifyItemsClasses = this.getJustifyItemsClasses();
    const alignItemsClasses = this.getAlignItemsClasses();
    const justifyContentClasses = this.getJustifyContentClasses();
    const alignContentClasses = this.getAlignContentClasses();
    const placeItemsClasses = this.getPlaceItemsClasses();
    const placeContentClasses = this.getPlaceContentClasses();
    
    const combinedClasses = `${baseClasses} ${colsClasses} ${rowsClasses} ${gapClasses} ${autoFlowClasses} ${autoRowsClasses} ${autoColsClasses} ${justifyItemsClasses} ${alignItemsClasses} ${justifyContentClasses} ${alignContentClasses} ${placeItemsClasses} ${placeContentClasses} ${className}`.trim();

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

export default Grid;
export type { GridProps }; 