import { AuthFormData, AuthFormValidation, AuthFormMode } from './Auth.types';
import { AUTH_FORM_VALIDATION_RULES } from './Auth.constants';

export class AuthValidationUtils {
  /**
   * Validates email format and length
   */
  static validateEmail(email: string): string {
    if (!email.trim()) {
      return 'Email is required';
    }
    
    if (email.length < AUTH_FORM_VALIDATION_RULES.EMAIL.MIN_LENGTH) {
      return 'Email is too short';
    }
    
    if (email.length > AUTH_FORM_VALIDATION_RULES.EMAIL.MAX_LENGTH) {
      return 'Email is too long';
    }
    
    if (!AUTH_FORM_VALIDATION_RULES.EMAIL.PATTERN.test(email)) {
      return 'Please enter a valid email address';
    }
    
    return '';
  }

  /**
   * Validates password strength and requirements
   */
  static validatePassword(password: string, mode: AuthFormMode): string {
    if (!password) {
      return 'Password is required';
    }
    
    if (mode === 'login') {
      // For login, just check if password is provided
      return '';
    }
    
    if (password.length < AUTH_FORM_VALIDATION_RULES.PASSWORD.MIN_LENGTH) {
      return `Password must be at least ${AUTH_FORM_VALIDATION_RULES.PASSWORD.MIN_LENGTH} characters long`;
    }
    
    if (password.length > AUTH_FORM_VALIDATION_RULES.PASSWORD.MAX_LENGTH) {
      return `Password must be less than ${AUTH_FORM_VALIDATION_RULES.PASSWORD.MAX_LENGTH} characters long`;
    }
    
    if (!AUTH_FORM_VALIDATION_RULES.PASSWORD.PATTERN.test(password)) {
      return 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
    }
    
    return '';
  }

  /**
   * Validates password confirmation
   */
  static validatePasswordConfirmation(password: string, confirmPassword: string): string {
    if (!confirmPassword) {
      return 'Please confirm your password';
    }
    
    if (password !== confirmPassword) {
      return 'Passwords do not match';
    }
    
    return '';
  }

  /**
   * Validates name fields
   */
  static validateName(name: string, fieldName: string): string {
    if (!name.trim()) {
      return `${fieldName} is required`;
    }
    
    if (name.length < AUTH_FORM_VALIDATION_RULES.NAME.MIN_LENGTH) {
      return `${fieldName} must be at least ${AUTH_FORM_VALIDATION_RULES.NAME.MIN_LENGTH} characters long`;
    }
    
    if (name.length > AUTH_FORM_VALIDATION_RULES.NAME.MAX_LENGTH) {
      return `${fieldName} must be less than ${AUTH_FORM_VALIDATION_RULES.NAME.MAX_LENGTH} characters long`;
    }
    
    if (!AUTH_FORM_VALIDATION_RULES.NAME.PATTERN.test(name)) {
      return `${fieldName} can only contain letters, spaces, hyphens, and apostrophes`;
    }
    
    return '';
  }

  /**
   * Validates terms agreement
   */
  static validateTermsAgreement(agreeToTerms: boolean): string {
    if (!agreeToTerms) {
      return 'You must agree to the terms and conditions';
    }
    
    return '';
  }

  /**
   * Validates entire form based on mode
   */
  static validateForm(data: AuthFormData, mode: AuthFormMode): AuthFormValidation {
    const errors: Record<keyof AuthFormData, string> = {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      agreeToTerms: ''
    };

    // Common validations
    errors.email = this.validateEmail(data.email);
    errors.password = this.validatePassword(data.password, mode);

    // Mode-specific validations
    switch (mode) {
      case 'register':
        if (data.confirmPassword !== undefined) {
          errors.confirmPassword = this.validatePasswordConfirmation(data.password, data.confirmPassword);
        }
        if (data.firstName !== undefined) {
          errors.firstName = this.validateName(data.firstName, 'First name');
        }
        if (data.lastName !== undefined) {
          errors.lastName = this.validateName(data.lastName, 'Last name');
        }
        if (data.agreeToTerms !== undefined) {
          errors.agreeToTerms = this.validateTermsAgreement(data.agreeToTerms);
        }
        break;
      
      case 'forgot-password':
        // Only email validation needed
        errors.password = '';
        break;
    }

    const isValid = Object.values(errors).every(error => error === '');

    return { isValid, errors };
  }
}

export class AuthSecurityUtils {
  /**
   * Sanitizes input to prevent XSS attacks
   */
  static sanitizeInput(input: string): string {
    return input
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  }

  /**
   * Generates secure headers for API requests
   */
  static getSecureHeaders(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block'
    };
  }

  /**
   * Validates CSRF token (placeholder for future implementation)
   */
  static validateCSRFToken(token: string): boolean {
    // This would be implemented with actual CSRF token validation
    return token !== null && token !== undefined && token.length > 0;
  }

  /**
   * Checks if password meets security requirements
   */
  static checkPasswordStrength(password: string): {
    score: number;
    feedback: string[];
  } {
    const feedback: string[] = [];
    let score = 0;

    if (password.length >= 8) score += 1;
    else feedback.push('Use at least 8 characters');

    if (/[a-z]/.test(password)) score += 1;
    else feedback.push('Add lowercase letters');

    if (/[A-Z]/.test(password)) score += 1;
    else feedback.push('Add uppercase letters');

    if (/\d/.test(password)) score += 1;
    else feedback.push('Add numbers');

    if (/[@$!%*?&]/.test(password)) score += 1;
    else feedback.push('Add special characters');

    return { score, feedback };
  }

  /**
   * Rate limiting helper (placeholder for future implementation)
   */
  static checkRateLimit(identifier: string): boolean {
    // This would be implemented with actual rate limiting logic
    // For now, always return true (no rate limiting)
    return true;
  }
} 