import { AuthSecurityUtils } from '../Auth.utils';

describe('AuthSecurityUtils', () => {
  describe('sanitizeInput', () => {
    it('should sanitize HTML characters', () => {
      const input = '<script>alert("xss")</script>';
      const result = AuthSecurityUtils.sanitizeInput(input);
      expect(result).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;&#x2F;script&gt;');
    });

    it('should sanitize quotes and apostrophes', () => {
      const input = `He said "Hello" and she said 'Hi'`;
      const result = AuthSecurityUtils.sanitizeInput(input);
      expect(result).toBe('He said &quot;Hello&quot; and she said &#x27;Hi&#x27;');
    });

    it('should handle empty string', () => {
      const result = AuthSecurityUtils.sanitizeInput('');
      expect(result).toBe('');
    });

    it('should handle normal text without changes', () => {
      const input = 'Normal text without special characters';
      const result = AuthSecurityUtils.sanitizeInput(input);
      expect(result).toBe(input);
    });
  });

  describe('getSecureHeaders', () => {
    it('should return security headers', () => {
      const headers = AuthSecurityUtils.getSecureHeaders();
      
      expect(headers).toEqual({
        'Content-Type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block'
      });
    });

    it('should always return the same headers', () => {
      const headers1 = AuthSecurityUtils.getSecureHeaders();
      const headers2 = AuthSecurityUtils.getSecureHeaders();
      
      expect(headers1).toEqual(headers2);
    });
  });

  describe('validateCSRFToken', () => {
    it('should return false for null token', () => {
      const result = AuthSecurityUtils.validateCSRFToken(null as any);
      expect(result).toBe(false);
    });

    it('should return false for undefined token', () => {
      const result = AuthSecurityUtils.validateCSRFToken(undefined as any);
      expect(result).toBe(false);
    });

    it('should return false for empty token', () => {
      const result = AuthSecurityUtils.validateCSRFToken('');
      expect(result).toBe(false);
    });

    it('should return true for valid token', () => {
      const result = AuthSecurityUtils.validateCSRFToken('valid-csrf-token');
      expect(result).toBe(true);
    });
  });

  describe('checkPasswordStrength', () => {
    it('should return low score for weak password', () => {
      const result = AuthSecurityUtils.checkPasswordStrength('weak');
      expect(result.score).toBe(1); // Only has lowercase
      expect(result.feedback).toContain('Use at least 8 characters');
      expect(result.feedback).toContain('Add uppercase letters');
      expect(result.feedback).toContain('Add numbers');
      expect(result.feedback).toContain('Add special characters');
    });

    it('should return high score for strong password', () => {
      const result = AuthSecurityUtils.checkPasswordStrength('StrongPass123!');
      expect(result.score).toBe(5);
      expect(result.feedback).toHaveLength(0);
    });

    it('should provide specific feedback for missing requirements', () => {
      const result = AuthSecurityUtils.checkPasswordStrength('password');
      expect(result.score).toBe(2); // 'password' has 8+ chars and lowercase letters
      expect(result.feedback).toContain('Add uppercase letters');
      expect(result.feedback).toContain('Add numbers');
      expect(result.feedback).toContain('Add special characters');
      expect(result.feedback).not.toContain('Use at least 8 characters');
    });

    it('should handle password with mixed requirements', () => {
      const result = AuthSecurityUtils.checkPasswordStrength('Password123');
      expect(result.score).toBe(4); // Missing special characters
      expect(result.feedback).toContain('Add special characters');
      expect(result.feedback).not.toContain('Use at least 8 characters');
      expect(result.feedback).not.toContain('Add uppercase letters');
      expect(result.feedback).not.toContain('Add lowercase letters');
      expect(result.feedback).not.toContain('Add numbers');
    });
  });

  describe('checkRateLimit', () => {
    it('should return true for any identifier', () => {
      // Since this is a placeholder implementation
      const result = AuthSecurityUtils.checkRateLimit('test-identifier');
      expect(result).toBe(true);
    });

    it('should handle empty identifier', () => {
      const result = AuthSecurityUtils.checkRateLimit('');
      expect(result).toBe(true);
    });
  });
}); 