import React from 'react';
import { useTranslation } from 'react-i18next';
import { FooterCopyrightProps } from './Footer.types';
import { FooterLogicUtils } from './Footer.utils';
import {
  FOOTER_COPYRIGHT_CONTAINER_CLASSES,
  FOOTER_COPYRIGHT_TEXT_CLASSES
} from './Footer.constants';

/**
 * FooterCopyright Component
 * 
 * A reusable footer copyright component
 * Follows OOP principles with proper separation of concerns
 */
const FooterCopyright: React.FC<FooterCopyrightProps> = ({
  className = '',
  'data-testid': dataTestId = 'footer-copyright'
}) => {
  const { t } = useTranslation();

  const renderCopyrightText = (): React.ReactNode => {
    const companyName = t('company.name', 'Trove Investment');
    const copyrightText = FooterLogicUtils.formatCopyrightText(companyName);

    return (
      <p className={FOOTER_COPYRIGHT_TEXT_CLASSES}>
        {copyrightText}
      </p>
    );
  };

  return (
    <div 
      className={`${FOOTER_COPYRIGHT_CONTAINER_CLASSES} ${className}`.trim()}
      data-testid={dataTestId}
    >
      {renderCopyrightText()}
    </div>
  );
};

export default FooterCopyright; 