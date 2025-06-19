import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routeConfig } from '../../../routes/RouteConfig.route';
import { FooterNavigationProps } from './Footer.types';
import {
  FOOTER_NAV_TITLE_CLASSES,
  FOOTER_NAV_LIST_CLASSES,
  FOOTER_NAV_ITEM_CLASSES
} from './Footer.constants';

/**
 * Extended props interface that includes translation function
 */
interface FooterNavigationClassProps extends FooterNavigationProps {
  t: (key: string) => string;
}

/**
 * FooterNavigation Component
 * 
 * A reusable footer navigation component
 * Follows OOP principles with proper separation of concerns
 */
class FooterNavigation extends React.Component<FooterNavigationClassProps> {
  private getNavigationRoutes() {
    return Object.values(routeConfig).filter(route => route.showInNavigation);
  }

  private renderTitle(): React.ReactNode {
    const { t } = this.props;

    return (
      <h3 className={FOOTER_NAV_TITLE_CLASSES}>
        {t('footer.quickLinks')}
      </h3>
    );
  }

  private renderNavigationItems(): React.ReactNode {
    const { t } = this.props;
    const navigationRoutes = this.getNavigationRoutes();

    return (
      <ul className={FOOTER_NAV_LIST_CLASSES}>
        {navigationRoutes.map((route) => (
          <li key={route.path}>
            <Link 
              to={route.path} 
              className={FOOTER_NAV_ITEM_CLASSES}
            >
              {t(route.translationKey)}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  render(): React.ReactNode {
    const { 
      className = '',
      'data-testid': dataTestId = 'footer-navigation'
    } = this.props;

    return (
      <div 
        className={className}
        data-testid={dataTestId}
      >
        {this.renderTitle()}
        {this.renderNavigationItems()}
      </div>
    );
  }
}

// Export functional component for backward compatibility
const FooterNavigationFC: React.FC<FooterNavigationProps> = (props) => {
  const { t } = useTranslation();
  return <FooterNavigation {...props} t={t} />;
};

export default FooterNavigationFC; 