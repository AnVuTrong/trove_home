import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import OptionButtonsGroup from './OptionButtonsGroup.component';
import FeaturesHighlight from './FeaturesHighlight.component';
import { HomeHeroSectionProps, InvestmentOption } from './HomeHeroSection.types';
import fluidHolographicGreenDark from '../../../assets/trove_abstract_bg/dark/green_fluid_holographic_dark.jpg';
import fluidHolographicRedDark from '../../../assets/trove_abstract_bg/dark/red_fluid_holographic_dark.png';
import fluidHolographicYellowDark from '../../../assets/trove_abstract_bg/dark/yellow_fluid_holographic_dark.png';
import fluidHolographicGreenAltDark from '../../../assets/trove_abstract_bg/dark/green_fluid_holographic_2_dark.jpg';
import fluidHolographicGreenLight from '../../../assets/trove_abstract_bg/light/green_fluid_holographic_light.png';
import fluidHolographicGreenAltLight from '../../../assets/trove_abstract_bg/light/green_fluid_holographic_light_2.png';
import fluidHolographicRedLight from '../../../assets/trove_abstract_bg/light/red_fluid_holographic_light.png';
import fluidHolographicYellowLight from '../../../assets/trove_abstract_bg/light/yellow_fluid_holographic_light.png';
import { Button } from '../../ui.components';
import { useTheme } from '../../../contexts/ThemeContext.context';

const HomeHeroSection: React.FC<HomeHeroSectionProps> = ({ defaultOptionId = 'default', className = '' }) => {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  const [currentOption, setCurrentOption] = useState<string>(defaultOptionId);

  const investmentOptions: Record<string, InvestmentOption> = useMemo(() => {
    const images = isDarkMode
      ? {
          default: fluidHolographicGreenAltDark,
          stocks: fluidHolographicGreenDark,
          realEstate: fluidHolographicRedDark,
          crypto: fluidHolographicYellowDark
        }
      : {
          default: fluidHolographicGreenAltLight,
          stocks: fluidHolographicGreenLight,
          realEstate: fluidHolographicRedLight,
          crypto: fluidHolographicYellowLight
        };

    return {
      default: {
        id: 'default',
        title: t('app.title') as string,
        description: t('app.description') as string,
        image: images.default,
        buttonText: t('common.welcome') as string,
        icon: '💼'
      },
      stocks: {
        id: 'stocks',
        title: t('home.investments.stocks.title') as string,
        description: t('home.investments.stocks.description') as string,
        image: images.stocks,
        buttonText: t('home.investments.stocks.buttonText') as string,
        icon: '📈'
      },
      realEstate: {
        id: 'realEstate',
        title: t('home.investments.realEstate.title') as string,
        description: t('home.investments.realEstate.description') as string,
        image: images.realEstate,
        buttonText: t('home.investments.realEstate.buttonText') as string,
        icon: '🏠'
      },
      crypto: {
        id: 'crypto',
        title: t('home.investments.crypto.title') as string,
        description: t('home.investments.crypto.description') as string,
        image: images.crypto,
        buttonText: t('home.investments.crypto.buttonText') as string,
        icon: '₿'
      }
    };
  }, [t, isDarkMode]);

  const handleOptionChange = (optionId: string) => {
    if (optionId === currentOption) return;
    setCurrentOption(optionId);
  };

  const currentData = investmentOptions[currentOption];

  const featureItems = [
    { icon: '🔐', text: t('home.features.secure') as string },
    { icon: '📊', text: t('home.features.realtime') as string },
    { icon: '🎯', text: t('home.features.expert') as string }
  ];

  return (
    <section className={`relative h-screen flex overflow-hidden ${className}`} data-testid='home-hero-section'>
      {/* Mobile fullscreen background */}
      <div className='lg:hidden absolute inset-0'>
        <img
          src={currentData.image}
          alt='Trove - Investment Platform'
          width={1920}
          height={1080}
          className='w-full h-full object-cover object-center transition-opacity duration-300'
        />
        <div className='absolute inset-0 bg-black/40'></div>
      </div>

      {/* Content container */}
      <div className='relative z-10 flex flex-col lg:flex-row w-full'>
        {/* Desktop Left Side - Image */}
        <div className='hidden lg:flex lg:w-1/2 relative overflow-hidden'>
          <img
            src={currentData.image}
            alt='Investment Platform'
            width={1920}
            height={1080}
            className='w-full h-full object-cover object-center transition-transform duration-700 ease-in-out'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-transparent to-black/20'></div>
        </div>

        {/* Right Side - Text Content */}
        <div className='flex-1 lg:w-1/2 flex items-center justify-center p-8 lg:p-16'>
          <div className='max-w-xl w-full'>
            {/* Header */}
            <h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-text-dark lg:text-text-dark_h1 mb-6'>{currentData.title}</h1>

            {/* Description */}
            <p className='text-lg lg:text-xl text-text-dark lg:text-text-dark mb-8 leading-relaxed'>{currentData.description}</p>

            {/* Investment Option Buttons */}
            <OptionButtonsGroup options={investmentOptions} currentOption={currentOption} onOptionChange={handleOptionChange} />

            {/* Main CTA Button */}
            <div className='flex flex-col gap-4'>
              <Button
                variant='primary'
                size='xl'
                className='flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none py-4 px-8 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl'>
                {currentData.buttonText}
              </Button>

              <Button
                variant='outline'
                size='xl'
                className='flex-1 bg-white/10 lg:bg-transparent hover:bg-white/20 lg:hover:bg-gray-50 text-white lg:text-gray-700 border-white/30 lg:border-gray-300 py-4 px-8 text-lg font-semibold transition-all duration-300'>
                {t('home.cta.learnMore')}
              </Button>
            </div>

            {/* Feature highlights */}
            <FeaturesHighlight items={featureItems} />
          </div>
        </div>
      </div>

      {/* Interactive tip for mobile */}
      <div className='lg:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center'>
        <div className='animate-pulse'>
          <div className='text-sm mb-2'>Tap buttons to explore</div>
          <div className='text-2xl'>👆</div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection; 