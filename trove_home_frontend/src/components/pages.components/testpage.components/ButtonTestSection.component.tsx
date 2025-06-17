import React from 'react';
import { Button } from '../../ui.components';
import { useAppTranslation } from '../../../i18n/TranslationUtils.utils';

interface ButtonTestSectionProps {
  onButtonClick: () => void;
}

const ButtonTestSection: React.FC<ButtonTestSectionProps> = ({ onButtonClick }) => {
  const { t } = useAppTranslation();

  return (
    <div className="bg-background-light border border-gray-200 rounded-lg p-6 mb-8 shadow-sm dark:bg-background-dark dark:border-gray-600">
      <h2 className="text-2xl font-bold mb-4 text-text-DEFAULT dark:text-text-dark_h1">
        {t('componentTest.buttons.title')}
      </h2>
      <div className="flex flex-wrap gap-4">
        <Button variant="primary" onClick={onButtonClick}>
          {t('componentTest.buttons.primary')}
        </Button>
        <Button variant="secondary" onClick={onButtonClick}>
          {t('componentTest.buttons.secondary')}
        </Button>
        <Button variant="danger" onClick={onButtonClick}>
          {t('componentTest.buttons.danger')}
        </Button>
        <Button variant="success" onClick={onButtonClick}>
          {t('componentTest.buttons.success')}
        </Button>
        <Button variant="outline" onClick={onButtonClick}>
          {t('componentTest.buttons.outline')}
        </Button>
        <Button size="sm" onClick={onButtonClick}>
          {t('componentTest.buttons.small')}
        </Button>
        <Button size="lg" onClick={onButtonClick}>
          {t('componentTest.buttons.large')}
        </Button>
        <Button loading>
          {t('componentTest.buttons.loading')}
        </Button>
        <Button disabled>
          {t('componentTest.buttons.disabled')}
        </Button>
      </div>
    </div>
  );
};

export default ButtonTestSection; 