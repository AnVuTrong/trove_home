import React from 'react';
import { translate } from '../../i18n/TranslationUtils.utils';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'error' | 'success';
  label?: string;
  helperText?: string;
  errorMessage?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  id?: string;
  name?: string;
  className?: string;
  'data-testid'?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

interface InputState {
  isFocused: boolean;
  hasError: boolean;
}

class Input extends React.Component<InputProps, InputState> {
  private inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: InputProps) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      isFocused: false,
      hasError: false
    };
  }

  componentDidMount(): void {
    if (this.props.autoFocus && this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }

  private getSizeClasses(): string {
    const { size = 'md' } = this.props;
    
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-4 py-3 text-lg'
    };
    
    return sizeClasses[size];
  }

  private getVariantClasses(): string {
    const { variant = 'default', errorMessage } = this.props;
    const { hasError } = this.state;
    
    if (errorMessage || hasError || variant === 'error') {
      return 'border-red-500 focus:border-red-500 focus:ring-red-500';
    }
    
    if (variant === 'success') {
      return 'border-green-500 focus:border-green-500 focus:ring-green-500';
    }
    
    return 'border-gray-300 focus:border-blue-500 focus:ring-blue-500';
  }

  private getDisabledClasses(): string {
    return this.props.disabled ? 'bg-gray-50 cursor-not-allowed opacity-50' : 'bg-white';
  }

  private handleFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  private handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    this.setState({ isFocused: false });
    this.validateInput(event.target.value);
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  private handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  };

  private validateInput(value: string): void {
    const { required, minLength, maxLength, pattern } = this.props;
    let hasError = false;

    if (required && !value.trim()) {
      hasError = true;
    }

    if (minLength && value.length < minLength) {
      hasError = true;
    }

    if (maxLength && value.length > maxLength) {
      hasError = true;
    }

    if (pattern && !new RegExp(pattern).test(value)) {
      hasError = true;
    }

    this.setState({ hasError });
  }

  public focus(): void {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }

  public blur(): void {
    if (this.inputRef.current) {
      this.inputRef.current.blur();
    }
  }

  render(): React.ReactNode {
    const {
      type = 'text',
      value,
      defaultValue,
      placeholder,
      disabled = false,
      readOnly = false,
      required = false,
      label,
      helperText,
      errorMessage,
      maxLength,
      minLength,
      pattern,
      autoComplete,
      id,
      name,
      className = '',
      'data-testid': dataTestId
    } = this.props;

    const { hasError } = this.state;

    const baseClasses = 'w-full rounded-md border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0';
    const sizeClasses = this.getSizeClasses();
    const variantClasses = this.getVariantClasses();
    const disabledClasses = this.getDisabledClasses();
    
    const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${disabledClasses} ${className}`.trim();

    const shouldShowError = errorMessage || hasError;
    const shouldShowHelper = helperText && !shouldShowError;

    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={id} 
            className={`block text-sm font-medium mb-1 ${
              shouldShowError ? 'text-red-700' : 'text-gray-700'
            }`}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          <input
            ref={this.inputRef}
            type={type}
            id={id}
            name={name}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            maxLength={maxLength}
            minLength={minLength}
            pattern={pattern}
            autoComplete={autoComplete}
            className={combinedClasses}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onKeyDown={this.handleKeyDown}
            data-testid={dataTestId}
            aria-invalid={shouldShowError ? 'true' : 'false'}
            aria-describedby={
              shouldShowError 
                ? `${id}-error` 
                : shouldShowHelper 
                  ? `${id}-helper` 
                  : undefined
            }
          />
          
          {shouldShowError && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
        
        {shouldShowError && (
          <p 
            id={`${id}-error`} 
            className="mt-1 text-sm text-red-600"
            role="alert"
          >
            {errorMessage || translate('common.invalidField', 'This field is invalid')}
          </p>
        )}
        
        {shouldShowHelper && (
          <p 
            id={`${id}-helper`} 
            className="mt-1 text-sm text-gray-500"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
}

export default Input;
export type { InputProps }; 