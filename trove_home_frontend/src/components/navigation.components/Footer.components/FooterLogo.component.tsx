import React from 'react';
import { useTranslation } from 'react-i18next';
import TroveWordmarkGreen from '../../../assets/trove_logo_v1/5_wordmark/5_wordmark_green_fit_svg.svg';
import TroveWordmarkWhite from '../../../assets/trove_logo_v1/5_wordmark/5_wordmark_white_fit_svg.svg';

const FooterLogo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full mb-8 md:mb-0">
      <div className="mb-4">
        {/* Light theme wordmark */}
        <img 
          src={TroveWordmarkGreen} 
          alt="Trove Investment" 
          className="h-10 w-auto dark:hidden" 
        />
        {/* Dark theme wordmark */}
        <img 
          src={TroveWordmarkWhite} 
          alt="Trove Investment" 
          className="h-10 w-auto hidden dark:block" 
        />
      </div>
    </div>
  );
};

export default FooterLogo; 