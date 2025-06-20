import { LogoVariant, HeaderMaxWidth } from './Header.types';
import {
  HEADER_BASE_CLASSES,
  HEADER_SCROLLED_CLASSES,
  HEADER_DEFAULT_CLASSES,
  HEADER_HOVER_CLASSES,
  HEADER_MAX_WIDTH_CLASSES
} from './Header.constants';

// Logo imports
import TroveLogoGreen from '../../../assets/trove_logo_v1/2_horizontal/2_horizontal_green_fit_svg.svg';
import TroveLogoWhite from '../../../assets/trove_logo_v1/2_horizontal/2_horizontal_white_fit_svg.svg';
import TroveVerticalGreen from '../../../assets/trove_logo_v1/3_vertical/3_verticle_green_svg.svg';
import TroveVerticalWhite from '../../../assets/trove_logo_v1/3_vertical/3_verticle_white_svg.svg';
import TroveBrandmarkGreen from '../../../assets/trove_logo_v1/4_brandmark/4_brandmark_green_svg.svg';
import TroveBrandmarkWhite from '../../../assets/trove_logo_v1/4_brandmark/4_brandmark_white_svg.svg';
import TroveWordmarkGreen from '../../../assets/trove_logo_v1/5_wordmark/5_wordmark_green_fit_svg.svg';
import TroveWordmarkWhite from '../../../assets/trove_logo_v1/5_wordmark/5_wordmark_white_fit_svg.svg';

export class HeaderStyleUtils {
  static getMaxWidthClasses(maxWidth: HeaderMaxWidth = '6xl'): string {
    return HEADER_MAX_WIDTH_CLASSES[maxWidth];
  }

  static getHeaderClasses(isScrolled: boolean, maxWidth: HeaderMaxWidth = '6xl', className: string = ''): string {
    const baseClasses = HEADER_BASE_CLASSES;
    const maxWidthClasses = this.getMaxWidthClasses(maxWidth);
    const stateClasses = isScrolled ? HEADER_SCROLLED_CLASSES : HEADER_DEFAULT_CLASSES;
    const hoverClasses = HEADER_HOVER_CLASSES;

    return `${baseClasses} ${maxWidthClasses} ${stateClasses} ${hoverClasses} ${className}`.trim();
  }

  static getLogoSrc(variant: LogoVariant = 'horizontal', isScrolled: boolean, isHovered: boolean, isDark: boolean = false): string {
    // In light theme (isDark === false) we always prefer the green logo,
    // regardless of scroll or hover state. In dark theme the logo remains white.
    const shouldUseGreen = !isDark;

    switch (variant) {
      case 'vertical':
        return shouldUseGreen ? TroveVerticalGreen : TroveVerticalWhite;
      case 'brandmark':
        return shouldUseGreen ? TroveBrandmarkGreen : TroveBrandmarkWhite;
      case 'wordmark':
        return shouldUseGreen ? TroveWordmarkGreen : TroveWordmarkWhite;
      case 'horizontal':
      default:
        return shouldUseGreen ? TroveLogoGreen : TroveLogoWhite;
    }
  }

  static handleScroll(callback: (isScrolled: boolean) => void): () => void {
    const handleScrollEvent = () => {
      const scrollPosition = window.scrollY;
      callback(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }
}

export class HeaderLogicUtils {
  static toggleMobileMenu(currentState: boolean, setState: (state: boolean) => void): void {
    setState(!currentState);
  }

  static closeMobileMenu(setState: (state: boolean) => void): void {
    setState(false);
  }
}
