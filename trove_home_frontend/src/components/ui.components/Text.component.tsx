import React from 'react';

interface TextProps {
  children: React.ReactNode;
  as?: 'p' | 'span' | 'div' | 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'muted';
  align?: 'left' | 'center' | 'right' | 'justify';
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case';
  truncate?: boolean;
  italic?: boolean;
  underline?: boolean;
  className?: string;
  htmlFor?: string;
  id?: string;
  'data-testid'?: string;
  onClick?: (event: React.MouseEvent) => void;
}

class Text extends React.Component<TextProps> {
  private getSizeClasses(): string {
    const { size = 'base' } = this.props;
    
    const sizeClasses = {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl'
    };
    
    return sizeClasses[size];
  }

  private getWeightClasses(): string {
    const { weight = 'normal' } = this.props;
    
    const weightClasses = {
      thin: 'font-thin',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black'
    };
    
    return weightClasses[weight];
  }

  private getColorClasses(): string {
    const { color = 'dark' } = this.props;
    
    const colorClasses = {
      primary: 'text-blue-600',
      secondary: 'text-gray-600',
      success: 'text-green-600',
      danger: 'text-red-600',
      warning: 'text-yellow-600',
      info: 'text-cyan-600',
      light: 'text-gray-300',
      dark: 'text-gray-900',
      muted: 'text-gray-500'
    };
    
    return colorClasses[color];
  }

  private getAlignClasses(): string {
    const { align } = this.props;
    
    if (!align) return '';
    
    const alignClasses = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify'
    };
    
    return alignClasses[align];
  }

  private getTransformClasses(): string {
    const { transform } = this.props;
    
    if (!transform) return '';
    
    const transformClasses = {
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
      'normal-case': 'normal-case'
    };
    
    return transformClasses[transform];
  }

  private getStyleClasses(): string {
    const { truncate, italic, underline } = this.props;
    const classes = [];
    
    if (truncate) classes.push('truncate');
    if (italic) classes.push('italic');
    if (underline) classes.push('underline');
    
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
      as: Component = 'p',
      className = '',
      htmlFor,
      id,
      'data-testid': dataTestId,
      onClick
    } = this.props;

    const sizeClasses = this.getSizeClasses();
    const weightClasses = this.getWeightClasses();
    const colorClasses = this.getColorClasses();
    const alignClasses = this.getAlignClasses();
    const transformClasses = this.getTransformClasses();
    const styleClasses = this.getStyleClasses();
    
    const combinedClasses = `${sizeClasses} ${weightClasses} ${colorClasses} ${alignClasses} ${transformClasses} ${styleClasses} ${className}`.trim();

    const commonProps = {
      className: combinedClasses,
      id,
      'data-testid': dataTestId,
      onClick: onClick ? this.handleClick : undefined
    };

    // Handle label-specific props
    if (Component === 'label') {
      return (
        <Component {...commonProps} htmlFor={htmlFor}>
          {children}
        </Component>
      );
    }

    return (
      <Component {...commonProps}>
        {children}
      </Component>
    );
  }
}

export default Text;
export type { TextProps }; 