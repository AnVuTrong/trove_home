import React from 'react';
import { HeaderProps, HeaderState } from './Header.types';
import { HeaderStyleUtils, HeaderLogicUtils } from './Header.utils';
import { HEADER_CONTAINER_CLASSES, HEADER_CONTENT_CLASSES } from './Header.constants';
import HeaderLogo from './HeaderLogo.component';
import HeaderDesktopNavigation from './HeaderDesktopNavigation.component';
import HeaderMobileMenuButton from './HeaderMobileMenuButton.component';
import HeaderMobileMenu from './HeaderMobileMenu.component';

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
    HeaderLogicUtils.toggleMobileMenu(this.state.isMobileMenuOpen, (isMobileMenuOpen) => this.setState({ isMobileMenuOpen }));
  };

  private handleMobileMenuClose = (): void => {
    HeaderLogicUtils.closeMobileMenu((isMobileMenuOpen) => this.setState({ isMobileMenuOpen }));
  };

  render(): React.ReactNode {
    const { className = '', maxWidth = '6xl', 'data-testid': dataTestId = 'header' } = this.props;
    const { isScrolled } = this.state;

    const headerClasses = HeaderStyleUtils.getHeaderClasses(isScrolled, maxWidth, className);

    return (
      <header className={headerClasses} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} data-testid={dataTestId}>
        <div className={HEADER_CONTAINER_CLASSES}>
          <div className={HEADER_CONTENT_CLASSES}>
            <HeaderLogo logoVariant={this.props.logoVariant} isScrolled={isScrolled} isHovered={this.state.isHovered} />
            <HeaderDesktopNavigation showThemeToggle={this.props.showThemeToggle} showLanguageToggle={this.props.showLanguageToggle} />
            <HeaderMobileMenuButton
              showThemeToggle={this.props.showThemeToggle}
              isMobileMenuOpen={this.state.isMobileMenuOpen}
              onToggle={this.handleMobileMenuToggle}
            />
          </div>
          <HeaderMobileMenu
            showLanguageToggle={this.props.showLanguageToggle}
            isMobileMenuOpen={this.state.isMobileMenuOpen}
            onClose={this.handleMobileMenuClose}
          />
        </div>
      </header>
    );
  }
}

export default Header;
