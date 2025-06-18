import React from 'react';
import { 
  FooterLogo, 
  FooterNavigation, 
  FooterContact, 
  FooterCopyright 
} from './Footer.components';
import { FooterProps } from './Footer.types';
import { FooterStyleUtils, FooterLogicUtils } from './Footer.utils';
import { FOOTER_CONTAINER_CLASSES } from './Footer.constants';

/**
 * Footer Component
 * 
 * A reusable footer component with configurable sections
 * Follows OOP principles with proper separation of concerns
 */
class Footer extends React.Component<FooterProps> {
  private renderGridContent(): React.ReactNode {
    const { 
      variant = 'default',
      showLogo,
      showNavigation,
      showContact,
      logoVariant = 'wordmark'
    } = this.props;

    const shouldShowLogo = FooterLogicUtils.shouldShowSection(showLogo, variant);
    const shouldShowNavigation = FooterLogicUtils.shouldShowSection(showNavigation, variant);
    const shouldShowContactInfo = FooterLogicUtils.shouldShowSection(showContact, variant);

    const gridClasses = FooterStyleUtils.getGridClasses(
      shouldShowLogo,
      shouldShowNavigation,
      shouldShowContactInfo
    );

    return (
      <div className={gridClasses}>
        {shouldShowLogo && (
          <FooterLogo 
            variant={logoVariant}
            data-testid="footer-logo-section"
          />
        )}

        {shouldShowNavigation && (
          <FooterNavigation data-testid="footer-navigation-section" />
        )}

        {shouldShowContactInfo && (
          <FooterContact data-testid="footer-contact-section" />
        )}
      </div>
    );
  }

  private renderCopyright(): React.ReactNode {
    const { variant = 'default', showCopyright } = this.props;
    const shouldShowCopyright = FooterLogicUtils.shouldShowSection(showCopyright, variant);

    if (!shouldShowCopyright) return null;

    return <FooterCopyright data-testid="footer-copyright-section" />;
  }

  render(): React.ReactNode {
    const { 
      className = '',
      variant = 'default',
      'data-testid': dataTestId = 'footer'
    } = this.props;

    const footerClasses = FooterStyleUtils.getFooterClasses(variant, className);

    return (
      <footer 
        className={footerClasses}
        data-testid={dataTestId}
      >
        <div className={FOOTER_CONTAINER_CLASSES}>
          {this.renderGridContent()}
          {this.renderCopyright()}
        </div>
      </footer>
    );
  }
}

export default Footer; 