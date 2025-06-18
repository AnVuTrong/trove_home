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
const FooterLogo: React.FC<FooterLogoProps> = ({
  variant = 'wordmark',
  className = '',
  'data-testid': dataTestId = 'footer-logo'
}) => {
  const { t } = useTranslation();

  const renderLogo = (): React.ReactNode => {
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
  };

  const renderDescription = (): React.ReactNode => {
    return (
      <p className={FOOTER_LOGO_DESCRIPTION_CLASSES}>
        {t('footer.description')}
      </p>
    );
  };

  return (
    <div 
      className={`${FOOTER_LOGO_CONTAINER_CLASSES} ${className}`.trim()}
      data-testid={dataTestId}
    >
      {renderLogo()}
      {renderDescription()}
    </div>
  );
};

export default FooterLogo; 