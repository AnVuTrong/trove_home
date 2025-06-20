import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../i18n/i18n.test.config';
import OptionButtonsGroup from '../OptionButtonsGroup.component';
import { InvestmentOption } from '../HomeHeroSection.types';

const options: Record<string, InvestmentOption> = {
  default: {
    id: 'default',
    title: 'Default',
    description: 'Default',
    image: '',
    buttonText: '',
    icon: '💼'
  },
  stocks: {
    id: 'stocks',
    title: 'Stocks',
    description: 'Stocks',
    image: '',
    buttonText: '',
    icon: '📈'
  },
  realEstate: {
    id: 'realEstate',
    title: 'Real Estate',
    description: 'Real Estate',
    image: '',
    buttonText: '',
    icon: '🏠'
  },
  crypto: {
    id: 'crypto',
    title: 'Crypto',
    description: 'Crypto',
    image: '',
    buttonText: '',
    icon: '₿'
  }
};

describe('OptionButtonsGroup Component', () => {
  it('should render all option buttons', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <OptionButtonsGroup options={options} currentOption='stocks' onOptionChange={jest.fn()} />
      </I18nextProvider>
    );

    expect(screen.getByTestId('option-btn-stocks')).toBeInTheDocument();
    expect(screen.getByTestId('option-btn-realEstate')).toBeInTheDocument();
    expect(screen.getByTestId('option-btn-crypto')).toBeInTheDocument();
  });
}); 