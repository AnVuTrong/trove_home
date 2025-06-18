import { FooterVariant, FooterLogoVariant } from './Footer.types';
import { FOOTER_BASE_CLASSES, FOOTER_VARIANT_CLASSES } from './Footer.constants';

// Logo imports
import TroveHorizontalGreen from '../../assets/trove_logo_v1/2_horizontal/2_horizontal_green_fit_svg.svg';
import TroveHorizontalWhite from '../../assets/trove_logo_v1/2_horizontal/2_horizontal_white_fit_svg.svg';
import TroveVerticalGreen from '../../assets/trove_logo_v1/3_vertical/3_verticle_green_svg.svg';
import TroveVerticalWhite from '../../assets/trove_logo_v1/3_vertical/3_verticle_white_svg.svg';
import TroveBrandmarkGreen from '../../assets/trove_logo_v1/4_brandmark/4_brandmark_green_svg.svg';
import TroveBrandmarkWhite from '../../assets/trove_logo_v1/4_brandmark/4_brandmark_white_svg.svg';
import TroveWordmarkGreen from '../../assets/trove_logo_v1/5_wordmark/5_wordmark_green_fit_svg.svg';
import TroveWordmarkWhite from '../../assets/trove_logo_v1/5_wordmark/5_wordmark_white_fit_svg.svg';

export class FooterStyleUtils {
  static getFooterClasses(
    variant: FooterVariant = 'default',
    className: string = ''
  ): string {
    const baseClasses = FOOTER_BASE_CLASSES;
    const variantClasses = FOOTER_VARIANT_CLASSES[variant];
    
    return `${baseClasses} ${variantClasses} ${className}`.trim();
  }

  static getLogoSrc(
    variant: FooterLogoVariant = 'wordmark',
    isDark: boolean = false
  ): string {
    switch (variant) {
      case 'horizontal':
        return isDark ? TroveHorizontalWhite : TroveHorizontalGreen;
      case 'vertical':
        return isDark ? TroveVerticalWhite : TroveVerticalGreen;
      case 'brandmark':
        return isDark ? TroveBrandmarkWhite : TroveBrandmarkGreen;
      case 'wordmark':
      default:
        return isDark ? TroveWordmarkWhite : TroveWordmarkGreen;
    }
  }

  static getGridClasses(
    showLogo: boolean = true,
    showNavigation: boolean = true,
    showContact: boolean = true
  ): string {
    const visibleSections = [showLogo, showNavigation, showContact].filter(Boolean).length;
    
    switch (visibleSections) {
      case 1:
        return 'grid grid-cols-1';
      case 2:
        return 'grid grid-cols-1 md:grid-cols-2 gap-8';
      case 3:
      default:
        return 'grid grid-cols-1 md:grid-cols-3 gap-8';
    }
  }
}

export class FooterLogicUtils {
  static getCurrentYear(): number {
    return new Date().getFullYear();
  }

  static formatCopyrightText(companyName: string = 'Trove Investment'): string {
    const currentYear = this.getCurrentYear();
    return `© ${currentYear} ${companyName}. All rights reserved.`;
  }

  static shouldShowSection(
    showFlag: boolean | undefined,
    variant: FooterVariant
  ): boolean {
    if (showFlag !== undefined) {
      return showFlag;
    }
    
    // Default behavior based on variant
    switch (variant) {
      case 'minimal':
        return false;
      case 'detailed':
      case 'default':
      default:
        return true;
    }
  }
} 