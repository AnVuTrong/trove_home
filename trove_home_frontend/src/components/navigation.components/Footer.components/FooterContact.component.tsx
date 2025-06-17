import React from 'react';
import { useTranslation } from 'react-i18next';

const FooterContact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="text-primary dark:text-text-dark_h1 font-bold mb-4">
        {t('footer.contactUs')}
      </h3>
      <p className="mb-2 text-text-light dark:text-text-dark">
        Email: vta.bsn@gmail.com
      </p>
      <p className="text-text-light dark:text-text-dark">
        Phone: +84 93 824 7283
      </p>
    </div>
  );
};

export default FooterContact; 