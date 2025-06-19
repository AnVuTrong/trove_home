# Authentication Components

A comprehensive set of authentication components for the Trove application, featuring elegant design, robust security, and seamless integration with external authentication providers like Keycloak.

## Overview

The authentication system provides a complete login/registration experience with:

- **Elegant Design**: Modern, responsive UI with image-on-left, form-on-right layout
- **Security First**: Input validation, XSS protection, and secure password handling
- **Keycloak Ready**: Built-in support for SSO integration
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Mobile Responsive**: Optimized for all device sizes

## Components

### `LoginSection`
Main component that combines all authentication functionality.

```tsx
import { LoginSection } from '../components/pages.components/auth.components';

<LoginSection
  imageSrc="/path/to/image.jpg"
  imageAlt="Authentication background"
  overlayTitle="Welcome to Trove"
  overlaySubtitle="Secure access to your digital world"
  onSubmit={handleAuthSubmit}
  onKeycloakLogin={handleKeycloakLogin}
  onGoogleLogin={handleGoogleLogin}
  initialMode="login"
/>
```

### `AuthPageLayout`
Container component providing the overall page structure.

### `AuthImageSection`
Left-side image section with optional overlay content.

### `AuthFormSection`
Right-side form section handling login, registration, and password reset.

### `FormField`
Reusable form input component with validation and error display.

## Features

### Multi-Mode Support
- **Login**: Email and password authentication
- **Register**: Full registration with name fields and terms agreement
- **Forgot Password**: Password reset functionality

### Validation & Security
- **Email Validation**: Format and length checking
- **Password Strength**: Comprehensive password requirements for registration
- **XSS Protection**: Input sanitization and secure headers
- **CSRF Ready**: Token validation framework in place

### External Authentication
- **Keycloak Integration**: Ready for SSO implementation
- **Google OAuth**: Social login support
- **Extensible**: Easy to add more providers

## Usage Examples

### Basic Login Page
```tsx
import React from 'react';
import { LoginSection } from '../components/pages.components/auth.components';
import { AuthFormData, AuthFormMode } from '../components/pages.components/auth.components/Auth.types';

class LoginPage extends React.Component {
  private handleAuthSubmit = async (data: AuthFormData, mode: AuthFormMode): Promise<void> => {
    switch (mode) {
      case 'login':
        await authService.login(data.email, data.password);
        break;
      case 'register':
        await authService.register(data);
        break;
      case 'forgot-password':
        await authService.sendPasswordReset(data.email);
        break;
    }
  };

  render() {
    return (
      <LoginSection
        imageSrc="/assets/auth-background.jpg"
        overlayTitle="Welcome Back"
        overlaySubtitle="Sign in to continue your journey"
        onSubmit={this.handleAuthSubmit}
      />
    );
  }
}
```

### With Keycloak Integration
```tsx
private handleKeycloakLogin = (): void => {
  // Initialize Keycloak authentication
  const keycloak = new Keycloak({
    url: process.env.REACT_APP_KEYCLOAK_URL,
    realm: process.env.REACT_APP_KEYCLOAK_REALM,
    clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID
  });
  
  keycloak.login();
};

<LoginSection
  // ... other props
  onKeycloakLogin={this.handleKeycloakLogin}
/>
```

## Security Best Practices

### Password Requirements
- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter  
- At least one number
- At least one special character (@$!%*?&)

### Input Sanitization
All user inputs are automatically sanitized to prevent XSS attacks:
```tsx
const sanitizedInput = AuthSecurityUtils.sanitizeInput(userInput);
```

### Secure Headers
API requests include security headers:
```tsx
const headers = AuthSecurityUtils.getSecureHeaders();
// Returns:
// {
//   'Content-Type': 'application/json',
//   'X-Content-Type-Options': 'nosniff',
//   'X-Frame-Options': 'DENY',
//   'X-XSS-Protection': '1; mode=block'
// }
```

## Styling & Theming

The components use Tailwind CSS with dark mode support:

```tsx
// Light/Dark mode responsive classes
'bg-background-light dark:bg-background-dark'
'text-text-DEFAULT dark:text-text-dark'
'border-border-light dark:border-border-dark'
```

### Mobile Responsive Design
- Mobile: Stacked layout with small image header
- Desktop: Side-by-side image and form layout
- Fluid typography and spacing

## Testing

Comprehensive test coverage includes:

### Unit Tests
- Validation utilities
- Security utilities
- Component rendering
- User interactions

### Running Tests
```bash
yarn test --testPathPattern="auth.components"
```

## Integration Guide

### Step 1: Install Dependencies
```bash
# For Keycloak integration (optional)
yarn add keycloak-js

# For Google OAuth (optional)
yarn add react-google-login
```

### Step 2: Environment Variables
```env
# Keycloak Configuration
REACT_APP_KEYCLOAK_URL=https://your-keycloak-server.com/auth
REACT_APP_KEYCLOAK_REALM=your-realm
REACT_APP_KEYCLOAK_CLIENT_ID=your-client-id

# Google OAuth Configuration
REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
```

### Step 3: Route Configuration
```tsx
// In your routes file
import LoginPage from '../pages/Login.page';

{
  path: '/login',
  component: LoginPage
}
```

## API Integration

### Backend Endpoints
The components expect these API endpoints:

```
POST /auth/login
POST /auth/register
POST /auth/forgot-password
GET /auth/keycloak/redirect
GET /auth/google/redirect
```

### GraphQL Mutations (Optional)
```graphql
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      id
      email
      firstName
      lastName
    }
  }
}

mutation Register($input: RegisterInput!) {
  register(input: $input) {
    token
    user {
      id
      email
      firstName
      lastName
    }
  }
}
```

## Accessibility Features

- **ARIA Labels**: All form fields have proper labels
- **Error Announcements**: Screen reader compatible error messages
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Logical tab order
- **High Contrast**: Compatible with system preferences

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Contributing

When adding new features:

1. Follow the existing component structure
2. Add comprehensive TypeScript types
3. Include unit tests
4. Update this documentation
5. Ensure accessibility compliance

## License

This component library is part of the Trove application and follows the project's licensing terms. 