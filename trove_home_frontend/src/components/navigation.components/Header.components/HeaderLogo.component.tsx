import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../constants/Routes.constant';
import { LogoVariant } from './Header.types';
import { HeaderStyleUtils } from './Header.utils';
import {
  HEADER_LOGO_CLASSES,
  LOGO_IMAGE_CLASSES
} from './Header.constants';

export interface HeaderLogoProps {
  logoVariant?: LogoVariant;
  isScrolled: boolean;
  isHovered: boolean;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({
  logoVariant = 'horizontal',
  isScrolled,
  isHovered
}) => (
  <Link to={ROUTES.HOME} className={HEADER_LOGO_CLASSES}>
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

export default HeaderLogo; 