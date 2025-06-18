import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/Routes.constant';
import { ThemeToggle } from '../ui.components';
import LanguageToggle from './LanguageToggle.component';
import NavigationMenu from './NavigationMenu.component';
import { HeaderProps, HeaderState } from './Header.types';
import { HeaderStyleUtils, HeaderLogicUtils } from './Header.utils';
import {
  HEADER_CONTAINER_CLASSES,
  HEADER_CONTENT_CLASSES,
  HEADER_LOGO_CLASSES,
  HEADER_DESKTOP_NAV_CLASSES,
  HEADER_MOBILE_BUTTON_CLASSES,
  HEADER_MOBILE_MENU_CLASSES,
  LOGO_IMAGE_CLASSES,
  MOBILE_MENU_BUTTON_CLASSES,
  MOBILE_MENU_SEPARATOR_CLASSES
} from './Header.constants';

/**
 * Header Component
 * 
 * A reusable header component with navigation, theme toggle, and language toggle
 * Follows OOP principles with separate concerns for styling, logic, and state management
 */
class Header extends React.Component<HeaderProps, HeaderState> {
  private scrollCleanup?: () => void;

  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      isMobileMenuOpen: false,
      isScrolled: false,
      isHovered: false
    };
  }

  componentDidMount(): void {
    this.scrollCleanup = HeaderStyleUtils.handleScroll(this.handleScrollChange);
  }

  componentWillUnmount(): void {
    if (this.scrollCleanup) {
      this.scrollCleanup();
    }
  }

  private handleScrollChange = (isScrolled: boolean): void => {
    this.setState({ isScrolled });
  };

  private handleMouseEnter = (): void => {
    this.setState({ isHovered: true });
  };

  private handleMouseLeave = (): void => {
    this.setState({ isHovered: false });
  };

  private handleMobileMenuToggle = (): void => {
    HeaderLogicUtils.toggleMobileMenu(
      this.state.isMobileMenuOpen,
      (isMobileMenuOpen) => this.setState({ isMobileMenuOpen })
    );
  };

  private handleMobileMenuClose = (): void => {
    HeaderLogicUtils.closeMobileMenu(
      (isMobileMenuOpen) => this.setState({ isMobileMenuOpen })
    );
  };

  private renderLogo(): React.ReactNode {
    const { logoVariant = 'horizontal' } = this.props;
    const { isScrolled, isHovered } = this.state;

    return (
      <Link
        to={ROUTES.HOME}
        className={HEADER_LOGO_CLASSES}
      >
        {/* Light theme logo */}
        <img 
          src={HeaderStyleUtils.getLogoSrc(logoVariant, isScrolled, isHovered, false)} 
          alt='Trove Logo' 
          className={`${LOGO_IMAGE_CLASSES} dark:hidden`}
        />
        {/* Dark theme logo */}
        <img 
          src={HeaderStyleUtils.getLogoSrc(logoVariant, isScrolled, isHovered, true)} 
          alt='Trove Logo' 
          className={`${LOGO_IMAGE_CLASSES} hidden dark:block`}
        />
      </Link>
    );
  }

  private renderDesktopNavigation(): React.ReactNode {
    const { showThemeToggle = true, showLanguageToggle = true } = this.props;

    return (
      <div className={HEADER_DESKTOP_NAV_CLASSES}>
        <NavigationMenu />

        {showThemeToggle && (
          <ThemeToggle 
            size='sm' 
            variant='primary' 
            showLabel={false} 
            data-testid='theme-toggle' 
          />
        )}

        {showLanguageToggle && (
          <LanguageToggle 
            size='sm' 
            variant='primary' 
            showLabel={false} 
            data-testid='language-toggle' 
          />
        )}
      </div>
    );
  }

  private renderMobileMenuButton(): React.ReactNode {
    const { showThemeToggle = true } = this.props;
    const { isMobileMenuOpen } = this.state;

    return (
      <div className={HEADER_MOBILE_BUTTON_CLASSES}>
        {showThemeToggle && (
          <ThemeToggle 
            size='sm' 
            variant='primary' 
            showLabel={false} 
            data-testid='mobile-theme-toggle' 
          />
        )}

        <button
          onClick={this.handleMobileMenuToggle}
          className={MOBILE_MENU_BUTTON_CLASSES}
          aria-label="Toggle mobile menu"
        >
          <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            {isMobileMenuOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
            )}
          </svg>
        </button>
      </div>
    );
  }

  private renderMobileMenu(): React.ReactNode {
    const { showLanguageToggle = true } = this.props;
    const { isMobileMenuOpen } = this.state;

    if (!isMobileMenuOpen) return null;

    return (
      <div className={HEADER_MOBILE_MENU_CLASSES}>
        <NavigationMenu isMobile onItemClick={this.handleMobileMenuClose} />
        
        {showLanguageToggle && (
          <div className={MOBILE_MENU_SEPARATOR_CLASSES}>
            <LanguageToggle 
              size='sm' 
              variant='primary' 
              showLabel={true} 
              data-testid='mobile-language-toggle' 
            />
          </div>
        )}
      </div>
    );
  }

  render(): React.ReactNode {
    const { 
      className = '', 
      maxWidth = '6xl',
      'data-testid': dataTestId = 'header'
    } = this.props;
    const { isScrolled } = this.state;

    const headerClasses = HeaderStyleUtils.getHeaderClasses(
      isScrolled,
      maxWidth,
      className
    );

    return (
      <header
        className={headerClasses}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        data-testid={dataTestId}
      >
        <div className={HEADER_CONTAINER_CLASSES}>
          <div className={HEADER_CONTENT_CLASSES}>
            {this.renderLogo()}
            {this.renderDesktopNavigation()}
            {this.renderMobileMenuButton()}
          </div>
          {this.renderMobileMenu()}
        </div>
      </header>
    );
  }
}

export default Header;
