import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated' | 'filled';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hoverable?: boolean;
  clickable?: boolean;
  className?: string;
  id?: string;
  'data-testid'?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

interface CardState {
  isHovered: boolean;
}

class Card extends React.Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
    this.state = {
      isHovered: false
    };
  }

  private getVariantClasses(): string {
    const { variant = 'default' } = this.props;
    
    const variantClasses = {
      default: 'bg-background-primary border border-gray-200',
      outlined: 'bg-background-primary border-2 border-primary',
      elevated: 'bg-background-primary border border-gray-100',
      filled: 'bg-background-secondary border border-gray-200'
    };
    
    return variantClasses[variant];
  }

  private getSizeClasses(): string {
    const { size = 'md' } = this.props;
    
    const sizeClasses = {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl'
    };
    
    return sizeClasses[size];
  }

  private getRoundedClasses(): string {
    const { rounded = 'md' } = this.props;
    
    const roundedClasses = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
      full: 'rounded-full'
    };
    
    return roundedClasses[rounded];
  }

  private getShadowClasses(): string {
    const { shadow = 'md', hoverable } = this.props;
    const { isHovered } = this.state;
    
    const shadowClasses = {
      none: 'shadow-none',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
      '2xl': 'shadow-2xl'
    };
    
    let shadowClass = shadowClasses[shadow];
    
    if (hoverable && isHovered) {
      // Upgrade shadow on hover
      const hoverShadowMap = {
        none: 'shadow-sm',
        sm: 'shadow-md',
        md: 'shadow-lg',
        lg: 'shadow-xl',
        xl: 'shadow-2xl',
        '2xl': 'shadow-2xl'
      };
      shadowClass = hoverShadowMap[shadow];
    }
    
    return shadowClass;
  }

  private getPaddingClasses(): string {
    const { padding = 'md' } = this.props;
    
    const paddingClasses = {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10'
    };
    
    return paddingClasses[padding];
  }

  private getInteractionClasses(): string {
    const { hoverable, clickable } = this.props;
    const classes = [];
    
    if (hoverable) {
      classes.push('transition-shadow duration-200 ease-in-out');
    }
    
    if (clickable) {
      classes.push('cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105');
    }
    
    return classes.join(' ');
  }

  private handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };

  private handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>): void => {
    this.setState({ isHovered: true });
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(event);
    }
  };

  private handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>): void => {
    this.setState({ isHovered: false });
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  render(): React.ReactNode {
    const {
      children,
      clickable,
      hoverable,
      className = '',
      id,
      'data-testid': dataTestId,
      onClick
    } = this.props;

    const variantClasses = this.getVariantClasses();
    const sizeClasses = this.getSizeClasses();
    const roundedClasses = this.getRoundedClasses();
    const shadowClasses = this.getShadowClasses();
    const paddingClasses = this.getPaddingClasses();
    const interactionClasses = this.getInteractionClasses();
    
    const combinedClasses = `${variantClasses} ${sizeClasses} ${roundedClasses} ${shadowClasses} ${paddingClasses} ${interactionClasses} ${className}`.trim();

    return (
      <div
        className={combinedClasses}
        id={id}
        data-testid={dataTestId}
        onClick={onClick ? this.handleClick : undefined}
        onMouseEnter={hoverable ? this.handleMouseEnter : undefined}
        onMouseLeave={hoverable ? this.handleMouseLeave : undefined}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
      >
        {children}
      </div>
    );
  }
}

export default Card;
export type { CardProps }; 