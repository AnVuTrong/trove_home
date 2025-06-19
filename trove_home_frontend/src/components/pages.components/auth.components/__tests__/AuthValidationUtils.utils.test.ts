import { AuthValidationUtils } from '../Auth.utils';
import { AuthFormData } from '../Auth.types';

describe('AuthValidationUtils', () => {
  describe('validateEmail', () => {
    it('should return error for empty email', () => {
      const result = AuthValidationUtils.validateEmail('');
      expect(result).toBe('Email is required');
    });

    it('should return error for email that is too short', () => {
      const result = AuthValidationUtils.validateEmail('a@b');
      expect(result).toBe('Email is too short');
    });

    it('should return error for invalid email format', () => {
      const result = AuthValidationUtils.validateEmail('invalid-email');
      expect(result).toBe('Please enter a valid email address');
    });

    it('should return empty string for valid email', () => {
      const result = AuthValidationUtils.validateEmail('test@example.com');
      expect(result).toBe('');
    });

    it('should handle email with special characters', () => {
      const result = AuthValidationUtils.validateEmail('test+tag@example.co.uk');
      expect(result).toBe('');
    });
  });

  describe('validatePassword', () => {
    it('should return error for empty password', () => {
      const result = AuthValidationUtils.validatePassword('', 'register');
      expect(result).toBe('Password is required');
    });

    it('should not validate strength for login mode', () => {
      const result = AuthValidationUtils.validatePassword('weak', 'login');
      expect(result).toBe('');
    });

    it('should return error for password that is too short', () => {
      const result = AuthValidationUtils.validatePassword('weak', 'register');
      expect(result).toBe('Password must be at least 8 characters long');
    });

    it('should return error for password without uppercase letter', () => {
      const result = AuthValidationUtils.validatePassword('lowercase123!', 'register');
      expect(result).toBe('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
    });

    it('should return error for password without lowercase letter', () => {
      const result = AuthValidationUtils.validatePassword('UPPERCASE123!', 'register');
      expect(result).toBe('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
    });

    it('should return error for password without number', () => {
      const result = AuthValidationUtils.validatePassword('Password!', 'register');
      expect(result).toBe('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
    });

    it('should return error for password without special character', () => {
      const result = AuthValidationUtils.validatePassword('Password123', 'register');
      expect(result).toBe('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
    });

    it('should return empty string for valid password', () => {
      const result = AuthValidationUtils.validatePassword('Password123!', 'register');
      expect(result).toBe('');
    });
  });

  describe('validatePasswordConfirmation', () => {
    it('should return error for empty confirmation', () => {
      const result = AuthValidationUtils.validatePasswordConfirmation('password', '');
      expect(result).toBe('Please confirm your password');
    });

    it('should return error for mismatched passwords', () => {
      const result = AuthValidationUtils.validatePasswordConfirmation('password1', 'password2');
      expect(result).toBe('Passwords do not match');
    });

    it('should return empty string for matching passwords', () => {
      const result = AuthValidationUtils.validatePasswordConfirmation('password', 'password');
      expect(result).toBe('');
    });
  });

  describe('validateName', () => {
    it('should return error for empty name', () => {
      const result = AuthValidationUtils.validateName('', 'First name');
      expect(result).toBe('First name is required');
    });

    it('should return error for name that is too short', () => {
      const result = AuthValidationUtils.validateName('A', 'First name');
      expect(result).toBe('First name must be at least 2 characters long');
    });

    it('should return error for name with invalid characters', () => {
      const result = AuthValidationUtils.validateName('John123', 'First name');
      expect(result).toBe('First name can only contain letters, spaces, hyphens, and apostrophes');
    });

    it('should return empty string for valid name', () => {
      const result = AuthValidationUtils.validateName('John', 'First name');
      expect(result).toBe('');
    });

    it('should allow hyphens and apostrophes', () => {
      const result = AuthValidationUtils.validateName("Mary-Jane O'Connor", 'First name');
      expect(result).toBe('');
    });
  });

  describe('validateTermsAgreement', () => {
    it('should return error for false agreement', () => {
      const result = AuthValidationUtils.validateTermsAgreement(false);
      expect(result).toBe('You must agree to the terms and conditions');
    });

    it('should return empty string for true agreement', () => {
      const result = AuthValidationUtils.validateTermsAgreement(true);
      expect(result).toBe('');
    });
  });

  describe('validateForm', () => {
    const validLoginData: AuthFormData = {
      email: 'test@example.com',
      password: 'password123'
    };

    const validRegisterData: AuthFormData = {
      email: 'test@example.com',
      password: 'Password123!',
      confirmPassword: 'Password123!',
      firstName: 'John',
      lastName: 'Doe',
      agreeToTerms: true
    };

    it('should validate login form correctly', () => {
      const result = AuthValidationUtils.validateForm(validLoginData, 'login');
      expect(result.isValid).toBe(true);
      expect(Object.values(result.errors).every(error => error === '')).toBe(true);
    });

    it('should validate register form correctly', () => {
      const result = AuthValidationUtils.validateForm(validRegisterData, 'register');
      expect(result.isValid).toBe(true);
      expect(Object.values(result.errors).every(error => error === '')).toBe(true);
    });

    it('should return validation errors for invalid login data', () => {
      const invalidData: AuthFormData = {
        email: 'invalid-email',
        password: ''
      };
      
      const result = AuthValidationUtils.validateForm(invalidData, 'login');
      expect(result.isValid).toBe(false);
      expect(result.errors.email).toBe('Please enter a valid email address');
      expect(result.errors.password).toBe('Password is required');
    });

    it('should validate forgot-password form correctly', () => {
      const forgotPasswordData: AuthFormData = {
        email: 'test@example.com',
        password: '' // Password is not required for forgot-password
      };
      
      const result = AuthValidationUtils.validateForm(forgotPasswordData, 'forgot-password');
      expect(result.isValid).toBe(true);
      expect(result.errors.email).toBe('');
      expect(result.errors.password).toBe(''); // Should be cleared for forgot-password mode
    });
  });
}); 