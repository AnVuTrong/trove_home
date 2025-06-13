import React from 'react';
import { translate } from '../../i18n/TranslationUtils.utils';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
  className?: string;
  id?: string;
  'data-testid'?: string;
}

interface ModalState {
  shouldRender: boolean;
}

class Modal extends React.Component<ModalProps, ModalState> {
  private modalRef = React.createRef<HTMLDivElement>();

  constructor(props: ModalProps) {
    super(props);
    this.state = {
      shouldRender: props.isOpen
    };
  }

  componentDidMount(): void {
    document.addEventListener('keydown', this.handleKeyDown);
    if (this.props.isOpen) {
      document.body.style.overflow = 'hidden';
      this.setState({ shouldRender: true });
    }
  }

  componentDidUpdate(prevProps: ModalProps): void {
    if (prevProps.isOpen !== this.props.isOpen) {
      if (this.props.isOpen) {
        document.body.style.overflow = 'hidden';
        this.setState({ shouldRender: true });
      } else {
        document.body.style.overflow = '';
        this.setState({ shouldRender: false });
      }
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = '';
  }

  private handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && this.props.isOpen) {
      this.props.onClose();
    }
  };

  private handleBackdropClick = (event: React.MouseEvent): void => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  private getSizeClasses(): string {
    const { size = 'md' } = this.props;
    
    const sizeClasses = {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      full: 'max-w-full'
    };
    
    return sizeClasses[size];
  }

  render(): React.ReactNode {
    const {
      children,
      title,
      showCloseButton = true,
      className = '',
      id,
      'data-testid': dataTestId
    } = this.props;

    const { shouldRender } = this.state;

    if (!shouldRender) return null;

    const sizeClasses = this.getSizeClasses();

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={this.handleBackdropClick}
        role="dialog"
        aria-modal="true"
        data-testid={dataTestId}
      >
        <div
          ref={this.modalRef}
          className={`relative w-full mx-4 bg-background-primary rounded-lg shadow-xl ${sizeClasses} ${className}`.trim()}
          id={id}
        >
          {showCloseButton && (
            <button
              type="button"
              className="absolute top-4 right-4 text-text-secondary hover:text-text-primary"
              onClick={this.props.onClose}
              aria-label={translate('common.close', 'Close')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
          
          {title && (
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-text-primary">{title}</h2>
            </div>
          )}
          
          <div className="px-6 py-4">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
export type { ModalProps }; 