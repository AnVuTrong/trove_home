import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui.components';
import fluidHolographicGreen from '../assets/trove_abstract_bg/dark/green_fluid_holographic_dark.jpg';
import fluidHolographicRed from '../assets/trove_abstract_bg/dark/red_fluid_holographic_dark.png';
import fluidHolographicYellow from '../assets/trove_abstract_bg/dark/yellow_fluid_holographic_dark.png';
import fluidHolographicGreenAlt from '../assets/trove_abstract_bg/dark/green_fluid_holographic_2_dark.jpg';

interface InvestmentOption {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
}

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const [currentOption, setCurrentOption] = useState<string>('default');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const investmentOptions: Record<string, InvestmentOption> = {
    default: {
      id: 'default',
      title: t('app.title') as string,
      description: t('app.description') as string,
      image: fluidHolographicGreenAlt,
      buttonText: t('common.welcome') as string
    },
    stocks: {
      id: 'stocks',
      title: t('home.investments.stocks.title') as string,
      description: t('home.investments.stocks.description') as string,
      image: fluidHolographicGreen,
      buttonText: t('home.investments.stocks.buttonText') as string
    },
    realEstate: {
      id: 'realEstate',
      title: t('home.investments.realEstate.title') as string,
      description: t('home.investments.realEstate.description') as string,
      image: fluidHolographicRed,
      buttonText: t('home.investments.realEstate.buttonText') as string
    },
    crypto: {
      id: 'crypto',
      title: t('home.investments.crypto.title') as string,
      description: t('home.investments.crypto.description') as string,
      image: fluidHolographicYellow,
      buttonText: t('home.investments.crypto.buttonText') as string
    }
  };

  const handleOptionChange = (optionId: string) => {
    if (optionId === currentOption) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentOption(optionId);
      setIsAnimating(false);
    }, 150);
  };

  const currentData = investmentOptions[currentOption];

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative h-screen flex overflow-hidden'>
        {/* Mobile fullscreen background */}
        <div className='lg:hidden absolute inset-0'>
          <img
            src={currentData.image}
            alt='Trove - Investment Platform'
            width={1920}
            height={1080}
            className={`w-full h-full object-cover object-center transition-opacity duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}
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
              className={`w-full h-full object-cover object-center transition-all duration-700 ease-in-out ${
                isAnimating ? 'scale-105 opacity-80' : 'scale-100 opacity-100'
              }`}
            />
            <div className='absolute inset-0 bg-gradient-to-r from-transparent to-black/20'></div>
          </div>

          {/* Right Side - Text Content */}
          <div className='flex-1 lg:w-1/2 flex items-center justify-center p-8 lg:p-16'>
            <div className={`max-w-xl w-full transition-opacity duration-150 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              {/* Header */}
              <h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-white lg:text-gray-900 mb-6 leading-tight'>{currentData.title}</h1>

              {/* Description */}
              <p className='text-lg lg:text-xl text-gray-200 lg:text-gray-600 mb-8 leading-relaxed'>{currentData.description}</p>

              {/* Investment Option Buttons */}
              <div className='space-y-4 mb-8'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                  <Button
                    variant={currentOption === 'stocks' ? 'primary' : 'outline'}
                    size='lg'
                    className={`w-full transition-all duration-150 hover:scale-105 ${
                      currentOption === 'stocks'
                        ? 'bg-green-600 hover:bg-green-700 text-white border-green-600'
                        : 'bg-white/10 lg:bg-gray-100 hover:bg-white/20 lg:hover:bg-gray-200 text-white lg:text-gray-700 border-white/30 lg:border-gray-300'
                    }`}
                    onClick={() => handleOptionChange('stocks')}
                    onMouseEnter={() => handleOptionChange('stocks')}>
                    📈 {t('home.investments.stocks.title')}
                  </Button>

                  <Button
                    variant={currentOption === 'realEstate' ? 'primary' : 'outline'}
                    size='lg'
                    className={`w-full transition-all duration-300 hover:scale-105 ${
                      currentOption === 'realEstate'
                        ? 'bg-red-600 hover:bg-red-700 text-white border-red-600'
                        : 'bg-white/10 lg:bg-gray-100 hover:bg-white/20 lg:hover:bg-gray-200 text-white lg:text-gray-700 border-white/30 lg:border-gray-300'
                    }`}
                    onClick={() => handleOptionChange('realEstate')}
                    onMouseEnter={() => handleOptionChange('realEstate')}>
                    🏠 {t('home.investments.realEstate.title')}
                  </Button>

                  <Button
                    variant={currentOption === 'crypto' ? 'primary' : 'outline'}
                    size='lg'
                    className={`w-full transition-all duration-300 hover:scale-105 ${
                      currentOption === 'crypto'
                        ? 'bg-yellow-600 hover:bg-yellow-700 text-white border-yellow-600'
                        : 'bg-white/10 lg:bg-gray-100 hover:bg-white/20 lg:hover:bg-gray-200 text-white lg:text-gray-700 border-white/30 lg:border-gray-300'
                    }`}
                    onClick={() => handleOptionChange('crypto')}
                    onMouseEnter={() => handleOptionChange('crypto')}>
                    ₿ {t('home.investments.crypto.title')}
                  </Button>
                </div>
              </div>

              {/* Main CTA Button */}
              <div className='flex flex-col sm:flex-row gap-4'>
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
              <div className='mt-12 grid grid-cols-2 lg:grid-cols-3 gap-6 text-sm'>
                <div className='text-center'>
                  <div className='text-2xl mb-2'>🔐</div>
                  <div className='text-white lg:text-gray-600 font-medium'>{t('home.features.secure')}</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl mb-2'>📊</div>
                  <div className='text-white lg:text-gray-600 font-medium'>{t('home.features.realtime')}</div>
                </div>
                <div className='text-center col-span-2 lg:col-span-1'>
                  <div className='text-2xl mb-2'>🎯</div>
                  <div className='text-white lg:text-gray-600 font-medium'>{t('home.features.expert')}</div>
                </div>
              </div>
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
    </div>
  );
};

export default HomePage;
