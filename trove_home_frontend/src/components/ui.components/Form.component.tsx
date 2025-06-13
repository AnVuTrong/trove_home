import React from 'react';
import { translate } from '../../i18n/TranslationUtils.utils';

interface FormProps {
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onReset?: (event: React.FormEvent<HTMLFormElement>) => void;
  method?: 'get' | 'post' | 'put' | 'patch' | 'delete';
  action?: string;
  encType?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
  autoComplete?: 'on' | 'off';
  noValidate?: boolean;
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  id?: string;
  'data-testid'?: string;
}

interface FormState {
  isSubmitting: boolean;
  hasErrors: boolean;
}

class Form extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      isSubmitting: false,
      hasErrors: false
    };
  }

  private getSpacingClasses(): string {
    const { spacing = 'md' } = this.props;
    
    if (spacing === 'none') return '';
    
    const spacingClasses = {
      xs: 'space-y-2',
      sm: 'space-y-3',
      md: 'space-y-4',
      lg: 'space-y-6',
      xl: 'space-y-8',
      none: ''
    };
    
    return spacingClasses[spacing];
  }

  private handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    const { onSubmit } = this.props;
    
    // Prevent default form submission
    event.preventDefault();
    
    if (!onSubmit) return;
    
    try {
      this.setState({ isSubmitting: true, hasErrors: false });
      
      // Call the provided onSubmit handler
      await onSubmit(event);
      
    } catch (error) {
      console.error(translate('common.formSubmissionError', 'Form submission error:'), error);
      this.setState({ hasErrors: true });
    } finally {
      this.setState({ isSubmitting: false });
    }
  };

  private handleReset = (event: React.FormEvent<HTMLFormElement>): void => {
    const { onReset } = this.props;
    
    this.setState({ hasErrors: false, isSubmitting: false });
    
    if (onReset) {
      onReset(event);
    }
  };

  private validateForm(formElement?: HTMLFormElement): boolean {
    // This could be extended to include more sophisticated validation
    const targetElement = formElement || this.formRef?.current;
    if (!targetElement) return true;
    
    const formData = new FormData(targetElement);
    const requiredFields = Array.from(targetElement.querySelectorAll('[required]'));
    
    for (const field of requiredFields) {
      const input = field as HTMLInputElement;
      const value = formData.get(input.name);
      
      if (!value || (typeof value === 'string' && !value.trim())) {
        return false;
      }
    }
    
    return true;
  }

  public getFormData(): FormData | null {
    const formElement = this.formRef?.current;
    if (!formElement) return null;
    
    return new FormData(formElement);
  }

  public resetForm(): void {
    const formElement = this.formRef?.current;
    if (formElement) {
      formElement.reset();
      this.setState({ hasErrors: false, isSubmitting: false });
    }
  }

  public isValid(): boolean {
    const formElement = this.formRef?.current;
    if (!formElement) return false;
    
    return formElement.checkValidity();
  }

  private formRef = React.createRef<HTMLFormElement>();

  render(): React.ReactNode {
    const {
      children,
      method = 'post',
      action,
      encType,
      autoComplete,
      noValidate,
      className = '',
      id,
      'data-testid': dataTestId
    } = this.props;

    const { isSubmitting, hasErrors } = this.state;
    const spacingClasses = this.getSpacingClasses();
    
    const combinedClasses = `${spacingClasses} ${className}`.trim();

    return (
      <form
        ref={this.formRef}
        className={combinedClasses}
        method={method}
        action={action}
        encType={encType}
        autoComplete={autoComplete}
        noValidate={noValidate}
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}
        id={id}
        data-testid={dataTestId}
        data-submitting={isSubmitting}
        data-has-errors={hasErrors}
        aria-busy={isSubmitting}
      >
        {children}
      </form>
    );
  }
}

export default Form;
export type { FormProps }; 