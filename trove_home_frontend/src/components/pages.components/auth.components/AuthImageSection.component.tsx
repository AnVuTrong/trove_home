import React from 'react';
import { AuthImageSectionProps } from './Auth.types';
import { AUTH_IMAGE_CLASSES } from './Auth.constants';

class AuthImageSection extends React.Component<AuthImageSectionProps> {
  private renderOverlayContent(): React.ReactNode {
    const { overlayTitle, overlaySubtitle } = this.props;

    if (!overlayTitle && !overlaySubtitle) {
      return null;
    }

    return (
      <div className={AUTH_IMAGE_CLASSES.OVERLAY}>
        {overlayTitle && (
          <h1 className={AUTH_IMAGE_CLASSES.TITLE}>
            {overlayTitle}
          </h1>
        )}
        {overlaySubtitle && (
          <p className={AUTH_IMAGE_CLASSES.SUBTITLE}>
            {overlaySubtitle}
          </p>
        )}
      </div>
    );
  }

  render(): React.ReactNode {
    const { 
      imageSrc, 
      imageAlt = 'Auth background', 
      className = '',
      'data-testid': dataTestId 
    } = this.props;

    const combinedClasses = `${AUTH_IMAGE_CLASSES.CONTAINER} ${AUTH_IMAGE_CLASSES.MOBILE_HEIGHT} ${className}`.trim();

    return (
      <div className={combinedClasses} data-testid={dataTestId}>
        <img
          src={imageSrc}
          alt={imageAlt}
          className={AUTH_IMAGE_CLASSES.IMAGE}
          loading="lazy"
        />
        {this.renderOverlayContent()}
      </div>
    );
  }
}

export default AuthImageSection; 