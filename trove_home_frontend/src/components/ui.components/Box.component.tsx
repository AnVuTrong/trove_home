import React from 'react';

interface BoxProps {
  children?: React.ReactNode;
  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'main' | 'nav';
  display?: 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'hidden';
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  maxHeight?: string | number;
  margin?: string | number;
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginX?: string | number;
  marginY?: string | number;
  padding?: string | number;
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingX?: string | number;
  paddingY?: string | number;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string | number;
  borderRadius?: string | number;
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  zIndex?: number;
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  className?: string;
  id?: string;
  'data-testid'?: string;
  onClick?: (event: React.MouseEvent) => void;
}

class Box extends React.Component<BoxProps> {
  private parseSpacing(value: string | number): string {
    if (typeof value === 'number') {
      return `${value}px`;
    }
    return value;
  }

  private getDisplayClasses(): string {
    const { display } = this.props;
    
    if (!display) return '';
    
    const displayClasses = {
      block: 'block',
      inline: 'inline',
      'inline-block': 'inline-block',
      flex: 'flex',
      'inline-flex': 'inline-flex',
      grid: 'grid',
      'inline-grid': 'inline-grid',
      hidden: 'hidden'
    };
    
    return displayClasses[display];
  }

  private getPositionClasses(): string {
    const { position } = this.props;
    
    if (!position || position === 'static') return '';
    
    const positionClasses = {
      relative: 'relative',
      absolute: 'absolute',
      fixed: 'fixed',
      sticky: 'sticky',
      static: ''
    };
    
    return positionClasses[position];
  }

  private getOverflowClasses(): string {
    const { overflow } = this.props;
    
    if (!overflow || overflow === 'visible') return '';
    
    const overflowClasses = {
      hidden: 'overflow-hidden',
      scroll: 'overflow-scroll',
      auto: 'overflow-auto',
      visible: ''
    };
    
    return overflowClasses[overflow];
  }

  private getInlineStyles(): React.CSSProperties {
    const {
      width,
      height,
      minWidth,
      maxWidth,
      minHeight,
      maxHeight,
      margin,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      marginX,
      marginY,
      padding,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      paddingX,
      paddingY,
      backgroundColor,
      borderColor,
      borderWidth,
      borderRadius,
      top,
      right,
      bottom,
      left,
      zIndex
    } = this.props;

    const styles: React.CSSProperties = {};

    // Dimensions
    if (width !== undefined) styles.width = this.parseSpacing(width);
    if (height !== undefined) styles.height = this.parseSpacing(height);
    if (minWidth !== undefined) styles.minWidth = this.parseSpacing(minWidth);
    if (maxWidth !== undefined) styles.maxWidth = this.parseSpacing(maxWidth);
    if (minHeight !== undefined) styles.minHeight = this.parseSpacing(minHeight);
    if (maxHeight !== undefined) styles.maxHeight = this.parseSpacing(maxHeight);

    // Margin
    if (margin !== undefined) styles.margin = this.parseSpacing(margin);
    if (marginTop !== undefined) styles.marginTop = this.parseSpacing(marginTop);
    if (marginRight !== undefined) styles.marginRight = this.parseSpacing(marginRight);
    if (marginBottom !== undefined) styles.marginBottom = this.parseSpacing(marginBottom);
    if (marginLeft !== undefined) styles.marginLeft = this.parseSpacing(marginLeft);
    if (marginX !== undefined) {
      styles.marginLeft = this.parseSpacing(marginX);
      styles.marginRight = this.parseSpacing(marginX);
    }
    if (marginY !== undefined) {
      styles.marginTop = this.parseSpacing(marginY);
      styles.marginBottom = this.parseSpacing(marginY);
    }

    // Padding
    if (padding !== undefined) styles.padding = this.parseSpacing(padding);
    if (paddingTop !== undefined) styles.paddingTop = this.parseSpacing(paddingTop);
    if (paddingRight !== undefined) styles.paddingRight = this.parseSpacing(paddingRight);
    if (paddingBottom !== undefined) styles.paddingBottom = this.parseSpacing(paddingBottom);
    if (paddingLeft !== undefined) styles.paddingLeft = this.parseSpacing(paddingLeft);
    if (paddingX !== undefined) {
      styles.paddingLeft = this.parseSpacing(paddingX);
      styles.paddingRight = this.parseSpacing(paddingX);
    }
    if (paddingY !== undefined) {
      styles.paddingTop = this.parseSpacing(paddingY);
      styles.paddingBottom = this.parseSpacing(paddingY);
    }

    // Colors and borders
    if (backgroundColor) styles.backgroundColor = backgroundColor;
    if (borderColor) styles.borderColor = borderColor;
    if (borderWidth !== undefined) styles.borderWidth = this.parseSpacing(borderWidth);
    if (borderRadius !== undefined) styles.borderRadius = this.parseSpacing(borderRadius);

    // Position
    if (top !== undefined) styles.top = this.parseSpacing(top);
    if (right !== undefined) styles.right = this.parseSpacing(right);
    if (bottom !== undefined) styles.bottom = this.parseSpacing(bottom);
    if (left !== undefined) styles.left = this.parseSpacing(left);
    if (zIndex !== undefined) styles.zIndex = zIndex;

    return styles;
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

    const displayClasses = this.getDisplayClasses();
    const positionClasses = this.getPositionClasses();
    const overflowClasses = this.getOverflowClasses();
    const inlineStyles = this.getInlineStyles();
    
    const combinedClasses = `${displayClasses} ${positionClasses} ${overflowClasses} ${className}`.trim();

    return (
      <Component
        className={combinedClasses}
        style={inlineStyles}
        id={id}
        data-testid={dataTestId}
        onClick={onClick ? this.handleClick : undefined}
      >
        {children}
      </Component>
    );
  }
}

export default Box;
export type { BoxProps }; 