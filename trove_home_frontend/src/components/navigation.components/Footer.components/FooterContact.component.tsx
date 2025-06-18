import React from 'react';
import { useTranslation } from 'react-i18next';
import { FooterContactProps } from '../Footer.types';
import {
  FOOTER_CONTACT_TITLE_CLASSES,
  FOOTER_CONTACT_LIST_CLASSES,
  FOOTER_CONTACT_ITEM_CLASSES
} from '../Footer.constants';

/**
 * FooterContact Component
 * 
 * A reusable footer contact component
 * Follows OOP principles with proper separation of concerns
 */
class FooterContact extends React.Component<FooterContactProps> {
  private renderTitle(): React.ReactNode {
    const { t } = useTranslation();

    return (
      <h3 className={FOOTER_CONTACT_TITLE_CLASSES}>
        {t('footer.contact')}
      </h3>
    );
  }

  private renderContactItems(): React.ReactNode {
    const { t } = useTranslation();

    return (
      <ul className={FOOTER_CONTACT_LIST_CLASSES}>
        <li>
          <a 
            href={`mailto:${t('footer.email')}`}
            className={FOOTER_CONTACT_ITEM_CLASSES}
          >
            {t('footer.email')}
          </a>
        </li>
        <li>
          <a 
            href={`tel:${t('footer.phone')}`}
            className={FOOTER_CONTACT_ITEM_CLASSES}
          >
            {t('footer.phone')}
          </a>
        </li>
        <li>
          <span className={FOOTER_CONTACT_ITEM_CLASSES}>
            {t('footer.address')}
          </span>
        </li>
      </ul>
    );
  }

  render(): React.ReactNode {
    const { 
      className = '',
      'data-testid': dataTestId = 'footer-contact'
    } = this.props;

    return (
      <div 
        className={className}
        data-testid={dataTestId}
      >
        {this.renderTitle()}
        {this.renderContactItems()}
      </div>
    );
  }
}

// Export functional component for backward compatibility
const FooterContactFC: React.FC<FooterContactProps> = (props) => {
  const { t } = useTranslation();
  return <FooterContact {...props} />;
};

export default FooterContactFC; 