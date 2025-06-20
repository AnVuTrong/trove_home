import React from 'react';
import { HeroSectionProps } from './HeroSection.types';
import { HeroSectionStyleUtils } from './HeroSection.utils';

class HeroSection extends React.Component<HeroSectionProps> {
  private renderMobileFullscreenImage(): React.ReactNode {
    const { imageSrc, imageAlt, imageClassName } = this.props;
    
    return (
      <div className="lg:hidden absolute inset-0">
        <img
          src={imageSrc}
          alt={imageAlt || 'Hero image'}
          className={HeroSectionStyleUtils.getMobileFullscreenImageClasses(imageClassName)}
        />
      </div>
    );
  }

  private renderDesktopImage(): React.ReactNode {
    const { imageSrc, imageAlt, imageClassName } = this.props;
    
    return (
      <div className="hidden lg:block lg:w-1/2 order-1">
        <img
          src={imageSrc}
          alt={imageAlt || 'Hero image'}
          className={HeroSectionStyleUtils.getDesktopImageClasses(imageClassName)}
        />
      </div>
    );
  }

  private renderTextContent(): React.ReactNode {
    const { header, subheader, paragraph, textClassName } = this.props;
    
    return (
      <div className={HeroSectionStyleUtils.getResponsiveTextContainerClasses(textClassName)}>
        <h1 className={HeroSectionStyleUtils.getResponsiveHeaderClasses()}>
          {header}
        </h1>
        
        {subheader && (
          <h2 className={HeroSectionStyleUtils.getResponsiveSubheaderClasses()}>
            {subheader}
          </h2>
        )}
        
        <p className={HeroSectionStyleUtils.getResponsiveParagraphClasses()}>
          {paragraph}
        </p>
      </div>
    );
  }

  render(): React.ReactNode {
    const { className, 'data-testid': dataTestId } = this.props;

    return (
      <section 
        className={HeroSectionStyleUtils.getResponsiveContainerClasses(className)}
        data-testid={dataTestId}
      >
        {/* Mobile fullscreen background image */}
        {this.renderMobileFullscreenImage()}
        
        {/* Mobile fullscreen overlay */}
        <div className="lg:hidden absolute inset-0 bg-black/30"></div>
        
        {/* Content container */}
        <div className={HeroSectionStyleUtils.getResponsiveContentClasses()}>
          {/* Desktop left side image */}
          {this.renderDesktopImage()}
          
          {/* Text content - mobile centered, desktop right side */}
          {this.renderTextContent()}
        </div>
      </section>
    );
  }
}

export default HeroSection; 