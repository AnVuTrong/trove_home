import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
  fallbackSrc?: string;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
  id?: string;
  'data-testid'?: string;
  onClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
  // onLoad and onError callbacks temporarily removed for compatibility
  // onLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
  // onError?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
}

interface ImageState {
  isLoaded: boolean;
  hasError: boolean;
  currentSrc: string;
}

class Image extends React.Component<ImageProps, ImageState> {
  private imageRef: React.RefObject<HTMLImageElement>;

  constructor(props: ImageProps) {
    super(props);
    this.imageRef = React.createRef();
    this.state = {
      isLoaded: false,
      hasError: false,
      currentSrc: props.src
    };
  }

  componentDidMount(): void {
    this.preloadImage();
  }

  componentDidUpdate(prevProps: ImageProps): void {
    if (prevProps.src !== this.props.src) {
      this.setState({
        isLoaded: false,
        hasError: false,
        currentSrc: this.props.src
      });
      this.preloadImage();
    }
  }

  private preloadImage(): void {
    const img = new window.Image();
    img.onload = this.handleImageLoad;
    img.onerror = this.handleImageError;
    img.src = this.props.src;
  }

  private handleImageLoad = (): void => {
    this.setState({ isLoaded: true, hasError: false });
    // Note: onLoad callback removed to avoid synthetic event complexity
    // Can be re-added if needed with proper event handling
  };

  private handleImageError = (): void => {
    const { fallbackSrc } = this.props;
    
    if (fallbackSrc && this.state.currentSrc !== fallbackSrc) {
      this.setState({ currentSrc: fallbackSrc });
      this.preloadImage();
    } else {
      this.setState({ hasError: true, isLoaded: false });
      // Note: onError callback removed to avoid synthetic event complexity
      // Can be re-added if needed with proper event handling
    }
  };

  private getObjectFitClasses(): string {
    const { objectFit } = this.props;
    
    if (!objectFit) return '';
    
    const objectFitClasses = {
      contain: 'object-contain',
      cover: 'object-cover',
      fill: 'object-fill',
      none: 'object-none',
      'scale-down': 'object-scale-down'
    };
    
    return objectFitClasses[objectFit];
  }

  private getRoundedClasses(): string {
    const { rounded } = this.props;
    
    if (!rounded || rounded === 'none') return '';
    
    const roundedClasses = {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      full: 'rounded-full',
      none: ''
    };
    
    return roundedClasses[rounded];
  }

  private handleClick = (event: React.MouseEvent<HTMLImageElement>): void => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  };

  private renderPlaceholder(): React.ReactNode {
    const { placeholder, width, height, alt } = this.props;
    const objectFitClasses = this.getObjectFitClasses();
    const roundedClasses = this.getRoundedClasses();
    
    const placeholderClasses = `bg-gray-200 animate-pulse flex items-center justify-center ${objectFitClasses} ${roundedClasses}`;
    
    const style: React.CSSProperties = {
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height
    };

    if (placeholder) {
      return (
        <img
          ref={this.imageRef}
          src={placeholder}
          alt={alt}
          className={placeholderClasses}
          style={style}
        />
      );
    }

    return (
      <div className={placeholderClasses} style={style}>
        <svg
          className="w-8 h-8 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  }

  private renderErrorFallback(): React.ReactNode {
    const { width, height, alt } = this.props;
    const roundedClasses = this.getRoundedClasses();
    
    const style: React.CSSProperties = {
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height
    };

    return (
      <div 
        className={`bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center ${roundedClasses}`}
        style={style}
      >
        <div className="text-center">
          <svg
            className="w-8 h-8 text-gray-400 mx-auto mb-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-xs text-gray-500">{alt || 'Image not found'}</p>
        </div>
      </div>
    );
  }

  render(): React.ReactNode {
    const {
      alt,
      width,
      height,
      objectPosition,
      loading = 'lazy',
      className = '',
      id,
      'data-testid': dataTestId,
      onClick
    } = this.props;

    const { isLoaded, hasError, currentSrc } = this.state;

    if (hasError) {
      return this.renderErrorFallback();
    }

    if (!isLoaded) {
      return this.renderPlaceholder();
    }

    const objectFitClasses = this.getObjectFitClasses();
    const roundedClasses = this.getRoundedClasses();
    const combinedClasses = `${objectFitClasses} ${roundedClasses} ${className}`.trim();

    const style: React.CSSProperties = {
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
      objectPosition
    };

    return (
      <img
        ref={this.imageRef}
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={combinedClasses}
        style={style}
        id={id}
        data-testid={dataTestId}
        onClick={onClick ? this.handleClick : undefined}
      />
    );
  }
}

export default Image;
export type { ImageProps }; 