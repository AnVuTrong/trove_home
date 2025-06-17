import React from 'react';

const FooterCopyright: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
      <p className="text-text-light dark:text-text-dark">
        © {currentYear} TROVE INVESTMENT. All rights reserved.
      </p>
    </div>
  );
};

export default FooterCopyright; 