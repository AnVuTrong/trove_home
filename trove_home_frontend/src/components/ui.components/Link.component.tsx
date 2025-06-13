import React from 'react';

interface LinkProps {
  children: React.ReactNode;
  href: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  rel?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'danger' | 'muted';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  underline?: 'none' | 'hover' | 'always';
  external?: boolean;
  disabled?: boolean;
  className?: string;
  id?: string;
  'data-testid'?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

interface LinkState {
  isHovered: boolean;
}

class Link extends React.Component<LinkProps, LinkState> {
  constructor(props: LinkProps) {
    super(props);
    this.state = {
      isHovered: false
    };
  }

  private getVariantClasses(): string {
    const { variant = 'default' } = this.props;
    
    const variantClasses = {
      default: 'text-blue-600 hover:text-blue-800',
      primary: 'text-blue-600 hover:text-blue-800',
      secondary: 'text-gray-600 hover:text-gray-800',
      danger: 'text-red-600 hover:text-red-800',
      muted: 'text-gray-500 hover:text-gray-700'
    };
    
    return variantClasses[variant];
  }

  private getSizeClasses(): string {
    const { size = 'md' } = this.props;
    
    const sizeClasses = {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl'
    };
    
    return sizeClasses[size];
  }

  private getUnderlineClasses(): string {
    const { underline = 'hover' } = this.props;
    const { isHovered } = this.state;
    
    const underlineClasses = {
      none: 'no-underline',
      hover: isHovered ? 'underline' : 'no-underline',
      always: 'underline'
    };
    
    return underlineClasses[underline];
  }

  private getDisabledClasses(): string {
    const { disabled } = this.props;
    
    if (!disabled) return '';
    
    return 'opacity-50 cursor-not-allowed pointer-events-none';
  }

  private getExternalAttrs(): { target?: string; rel?: string } {
    const { external, target, rel } = this.props;
    
    if (external || target === '_blank') {
      return {
        target: target || '_blank',
        rel: rel || 'noopener noreferrer'
      };
    }
    
    return {
      target,
      rel
    };
  }

  private renderExternalIcon(): React.ReactNode {
    const { external, target } = this.props;
    
    if (!external && target !== '_blank') return null;
    
    return (
      <svg
        className="inline w-3 h-3 ml-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  private handleClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    const { disabled, onClick } = this.props;
    
    if (disabled) {
      event.preventDefault();
      return;
    }
    
    if (onClick) {
      onClick(event);
    }
  };

  private handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    this.setState({ isHovered: true });
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(event);
    }
  };

  private handleMouseLeave = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    this.setState({ isHovered: false });
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  render(): React.ReactNode {
    const {
      children,
      href,
      disabled,
      className = '',
      id,
      'data-testid': dataTestId
    } = this.props;

    const variantClasses = this.getVariantClasses();
    const sizeClasses = this.getSizeClasses();
    const underlineClasses = this.getUnderlineClasses();
    const disabledClasses = this.getDisabledClasses();
    const externalAttrs = this.getExternalAttrs();
    
    const baseClasses = 'inline-flex items-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
    const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${underlineClasses} ${disabledClasses} ${className}`.trim();

    return (
      <a
        href={disabled ? undefined : href}
        className={combinedClasses}
        id={id}
        data-testid={dataTestId}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        aria-disabled={disabled}
        {...externalAttrs}
      >
        {children}
        {this.renderExternalIcon()}
      </a>
    );
  }
}

export default Link;
export type { LinkProps }; 