import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'main' | 'nav';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full' | 'fluid';
  centerContent?: boolean;
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  paddingX?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  paddingY?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  id?: string;
  'data-testid'?: string;
  onClick?: (event: React.MouseEvent) => void;
}

class Container extends React.Component<ContainerProps> {
  private getSizeClasses(): string {
    const { size = 'lg' } = this.props;
    
    const sizeClasses = {
      xs: 'max-w-xs',
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      '2xl': 'max-w-2xl',
      '3xl': 'max-w-3xl',
      '4xl': 'max-w-4xl',
      '5xl': 'max-w-5xl',
      '6xl': 'max-w-6xl',
      '7xl': 'max-w-7xl',
      full: 'max-w-full',
      fluid: 'max-w-none'
    };
    
    return sizeClasses[size];
  }

  private getCenterClasses(): string {
    const { centerContent } = this.props;
    
    return centerContent ? 'mx-auto' : '';
  }

  private getPaddingClasses(): string {
    const { padding, paddingX, paddingY } = this.props;
    const classes = [];
    
    if (padding && padding !== 'none') {
      const paddingMap = {
        xs: 'p-2',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-10',
        '2xl': 'p-12'
      };
      classes.push(paddingMap[padding]);
    } else {
      if (paddingX && paddingX !== 'none') {
        const paddingXMap = {
          xs: 'px-2',
          sm: 'px-4',
          md: 'px-6',
          lg: 'px-8',
          xl: 'px-10',
          '2xl': 'px-12'
        };
        classes.push(paddingXMap[paddingX]);
      }
      
      if (paddingY && paddingY !== 'none') {
        const paddingYMap = {
          xs: 'py-2',
          sm: 'py-4',
          md: 'py-6',
          lg: 'py-8',
          xl: 'py-10',
          '2xl': 'py-12'
        };
        classes.push(paddingYMap[paddingY]);
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

    const sizeClasses = this.getSizeClasses();
    const centerClasses = this.getCenterClasses();
    const paddingClasses = this.getPaddingClasses();
    
    const combinedClasses = `${sizeClasses} ${centerClasses} ${paddingClasses} ${className}`.trim();

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

export default Container;
export type { ContainerProps }; 