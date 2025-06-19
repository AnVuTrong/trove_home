import { AUTH_FORM_VALIDATION_RULES, AUTH_FORM_MODE_CONFIG } from '../Auth.constants';

describe('Auth Constants', () => {
  describe('AUTH_FORM_VALIDATION_RULES', () => {
    it('should have email validation rules', () => {
      expect(AUTH_FORM_VALIDATION_RULES.EMAIL).toBeDefined();
      expect(AUTH_FORM_VALIDATION_RULES.EMAIL.PATTERN).toBeInstanceOf(RegExp);
      expect(AUTH_FORM_VALIDATION_RULES.EMAIL.MIN_LENGTH).toBe(5);
      expect(AUTH_FORM_VALIDATION_RULES.EMAIL.MAX_LENGTH).toBe(254);
    });

    it('should have password validation rules', () => {
      expect(AUTH_FORM_VALIDATION_RULES.PASSWORD).toBeDefined();
      expect(AUTH_FORM_VALIDATION_RULES.PASSWORD.PATTERN).toBeInstanceOf(RegExp);
      expect(AUTH_FORM_VALIDATION_RULES.PASSWORD.MIN_LENGTH).toBe(8);
      expect(AUTH_FORM_VALIDATION_RULES.PASSWORD.MAX_LENGTH).toBe(128);
    });

    it('should have name validation rules', () => {
      expect(AUTH_FORM_VALIDATION_RULES.NAME).toBeDefined();
      expect(AUTH_FORM_VALIDATION_RULES.NAME.PATTERN).toBeInstanceOf(RegExp);
      expect(AUTH_FORM_VALIDATION_RULES.NAME.MIN_LENGTH).toBe(2);
      expect(AUTH_FORM_VALIDATION_RULES.NAME.MAX_LENGTH).toBe(50);
    });
  });

  describe('AUTH_FORM_MODE_CONFIG', () => {
    it('should have login configuration', () => {
      const loginConfig = AUTH_FORM_MODE_CONFIG.login;
      expect(loginConfig.title).toBe('Welcome back');
      expect(loginConfig.subtitle).toBe('Sign in to your account');
      expect(loginConfig.submitText).toBe('Sign in');
      expect(loginConfig.toggleMode).toBe('register');
    });

    it('should have register configuration', () => {
      const registerConfig = AUTH_FORM_MODE_CONFIG.register;
      expect(registerConfig.title).toBe('Create account');
      expect(registerConfig.subtitle).toBe('Get started with your free account');
      expect(registerConfig.submitText).toBe('Create account');
      expect(registerConfig.toggleMode).toBe('login');
    });

    it('should have forgot-password configuration', () => {
      const forgotConfig = AUTH_FORM_MODE_CONFIG['forgot-password'];
      expect(forgotConfig.title).toBe('Reset password');
      expect(forgotConfig.subtitle).toBe('Enter your email to reset your password');
      expect(forgotConfig.submitText).toBe('Send reset link');
      expect(forgotConfig.toggleMode).toBe('login');
    });
  });
}); 