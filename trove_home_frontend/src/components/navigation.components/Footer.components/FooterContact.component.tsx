import React from 'react';
import { useTranslation } from 'react-i18next';
import { FooterContactProps } from './Footer.types';
import {
  FOOTER_CONTACT_TITLE_CLASSES,
  FOOTER_CONTACT_LIST_CLASSES,
  FOOTER_CONTACT_ITEM_CLASSES
} from './Footer.constants';

/**
 * FooterContact Component
 * 
 * A reusable footer contact component
 * Follows OOP principles with proper separation of concerns
 */
const FooterContact: React.FC<FooterContactProps> = ({
  className = '',
  'data-testid': dataTestId = 'footer-contact'
}) => {
  const { t } = useTranslation();

  const renderTitle = (): React.ReactNode => {
    return (
      <h3 className={FOOTER_CONTACT_TITLE_CLASSES}>
        {t('footer.contact')}
      </h3>
    );
  };

  const renderContactItems = (): React.ReactNode => {
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
  };

  return (
    <div 
      className={className}
      data-testid={dataTestId}
    >
      {renderTitle()}
      {renderContactItems()}
    </div>
  );
};

export default FooterContact; 