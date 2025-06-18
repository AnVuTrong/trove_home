import React from 'react';
import { useTranslation } from 'react-i18next';
import { FooterLogoProps } from '../Footer.types';
import { FooterStyleUtils } from '../Footer.utils';
import {
  FOOTER_LOGO_CONTAINER_CLASSES,
  FOOTER_LOGO_IMAGE_CONTAINER_CLASSES,
  FOOTER_LOGO_IMAGE_CLASSES,
  FOOTER_LOGO_DESCRIPTION_CLASSES
} from '../Footer.constants';

/**
 * FooterLogo Component
 * 
 * A reusable footer logo component with configurable variants
 * Follows OOP principles with proper separation of concerns
 */
class FooterLogo extends React.Component<FooterLogoProps> {
  private renderLogo(): React.ReactNode {
    const { variant = 'wordmark' } = this.props;

    return (
      <div className={FOOTER_LOGO_IMAGE_CONTAINER_CLASSES}>
        {/* Light theme logo */}
        <img 
          src={FooterStyleUtils.getLogoSrc(variant, false)} 
          alt="Trove Investment" 
          className={`${FOOTER_LOGO_IMAGE_CLASSES} dark:hidden`}
        />
        {/* Dark theme logo */}
        <img 
          src={FooterStyleUtils.getLogoSrc(variant, true)} 
          alt="Trove Investment" 
          className={`${FOOTER_LOGO_IMAGE_CLASSES} hidden dark:block`}
        />
      </div>
    );
  }

  private renderDescription(): React.ReactNode {
    const { t } = useTranslation();

    return (
      <p className={FOOTER_LOGO_DESCRIPTION_CLASSES}>
        {t('footer.description')}
      </p>
    );
  }

  render(): React.ReactNode {
    const { 
      className = '',
      'data-testid': dataTestId = 'footer-logo'
    } = this.props;

    return (
      <div 
        className={`${FOOTER_LOGO_CONTAINER_CLASSES} ${className}`.trim()}
        data-testid={dataTestId}
      >
        {this.renderLogo()}
        {this.renderDescription()}
      </div>
    );
  }
}

// Export functional component for backward compatibility
const FooterLogoFC: React.FC<FooterLogoProps> = (props) => {
  const { t } = useTranslation();
  return <FooterLogo {...props} />;
};

export default FooterLogoFC; 