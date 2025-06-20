import React from 'react';
import { FormFieldProps } from './Auth.types';
import { AUTH_FORM_CLASSES } from './Auth.constants';

class FormField extends React.Component<FormFieldProps> {
  private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { onChange, type } = this.props;
    
    if (type === 'checkbox') {
      onChange(event.target.checked);
    } else {
      onChange(event.target.value);
    }
  };

  private getInputClasses(): string {
    const { error } = this.props;
    const baseClasses = AUTH_FORM_CLASSES.INPUT;
    const errorClasses = error ? AUTH_FORM_CLASSES.INPUT_ERROR : '';
    
    return `${baseClasses} ${errorClasses}`.trim();
  }

  private renderInput(): React.ReactNode {
    const {
      name,
      type,
      value,
      placeholder,
      required = false,
      'data-testid': dataTestId
    } = this.props;

    if (type === 'checkbox') {
      return (
        <div className={AUTH_FORM_CLASSES.CHECKBOX_CONTAINER}>
          <input
            id={name}
            name={name}
            type="checkbox"
            checked={value as boolean}
            onChange={this.handleInputChange}
            required={required}
            className={AUTH_FORM_CLASSES.CHECKBOX}
            data-testid={dataTestId}
          />
          <label htmlFor={name} className={AUTH_FORM_CLASSES.LABEL}>
            I agree to the{' '}
            <a href="#" className={AUTH_FORM_CLASSES.MODE_TOGGLE_LINK}>
              Terms and Conditions
            </a>{' '}
            and{' '}
            <a href="#" className={AUTH_FORM_CLASSES.MODE_TOGGLE_LINK}>
              Privacy Policy
            </a>
          </label>
        </div>
      );
    }

    return (
      <input
        id={name}
        name={name}
        type={type}
        value={value as string}
        onChange={this.handleInputChange}
        placeholder={placeholder}
        required={required}
        className={this.getInputClasses()}
        data-testid={dataTestId}
        autoComplete={this.getAutoCompleteValue()}
      />
    );
  }

  private getAutoCompleteValue(): string {
    const { name, type } = this.props;
    
    switch (name) {
      case 'email':
        return 'email';
      case 'password':
        return type === 'password' ? 'current-password' : 'new-password';
      case 'confirmPassword':
        return 'new-password';
      case 'firstName':
        return 'given-name';
      case 'lastName':
        return 'family-name';
      default:
        return 'off';
    }
  }

  render(): React.ReactNode {
    const { label, error, type, className = '' } = this.props;

    if (type === 'checkbox') {
      return (
        <div className={`${AUTH_FORM_CLASSES.FIELD_GROUP} ${className}`.trim()}>
          {this.renderInput()}
          {error && (
            <p className={AUTH_FORM_CLASSES.ERROR_MESSAGE} role="alert">
              {error}
            </p>
          )}
        </div>
      );
    }

    return (
      <div className={`${AUTH_FORM_CLASSES.FIELD_GROUP} ${className}`.trim()}>
        <label htmlFor={this.props.name} className={AUTH_FORM_CLASSES.LABEL}>
          {label}
          {this.props.required && <span className="text-feedback-error ml-1">*</span>}
        </label>
        {this.renderInput()}
        {error && (
          <p className={AUTH_FORM_CLASSES.ERROR_MESSAGE} role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
}

export default FormField; 