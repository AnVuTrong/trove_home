import React from 'react';
import { AuthPageLayoutProps } from './Auth.types';
import { AUTH_PAGE_CLASSES } from './Auth.constants';

class AuthPageLayout extends React.Component<AuthPageLayoutProps> {
  render(): React.ReactNode {
    const { children, className = '', 'data-testid': dataTestId } = this.props;

    const combinedClasses = `${AUTH_PAGE_CLASSES.CONTAINER} ${className}`.trim();

    return (
      <div className={combinedClasses} data-testid={dataTestId}>
        <div className={AUTH_PAGE_CLASSES.RESPONSIVE_LAYOUT}>
          {children}
        </div>
      </div>
    );
  }
}

export default AuthPageLayout; 