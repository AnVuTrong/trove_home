import React from 'react';
import { useTranslation } from 'react-i18next';
import { FooterCopyrightProps } from '../Footer.types';
import { FooterLogicUtils } from '../Footer.utils';
import {
  FOOTER_COPYRIGHT_CONTAINER_CLASSES,
  FOOTER_COPYRIGHT_TEXT_CLASSES
} from '../Footer.constants';

/**
 * FooterCopyright Component
 * 
 * A reusable footer copyright component
 * Follows OOP principles with proper separation of concerns
 */
class FooterCopyright extends React.Component<FooterCopyrightProps> {
  private renderCopyrightText(): React.ReactNode {
    const { t } = useTranslation();
    const companyName = t('company.name', 'Trove Investment');
    const copyrightText = FooterLogicUtils.formatCopyrightText(companyName);

    return (
      <p className={FOOTER_COPYRIGHT_TEXT_CLASSES}>
        {copyrightText}
      </p>
    );
  }

  render(): React.ReactNode {
    const { 
      className = '',
      'data-testid': dataTestId = 'footer-copyright'
    } = this.props;

    return (
      <div 
        className={`${FOOTER_COPYRIGHT_CONTAINER_CLASSES} ${className}`.trim()}
        data-testid={dataTestId}
      >
        {this.renderCopyrightText()}
      </div>
    );
  }
}

// Export functional component for backward compatibility
const FooterCopyrightFC: React.FC<FooterCopyrightProps> = (props) => {
  const { t } = useTranslation();
  return <FooterCopyright {...props} />;
};

export default FooterCopyrightFC; 