import React from 'react';
import { HeroSectionProps } from './HeroSection.types';
import { HeroSectionStyleUtils } from './HeroSection.utils';

class HeroSection extends React.Component<HeroSectionProps> {
  private renderImage(): React.ReactNode {
    const { imageSrc, imageAlt, imageClassName } = this.props;
    
    return (
      <div className="w-full lg:w-1/2">
        <img
          src={imageSrc}
          alt={imageAlt || 'Hero image'}
          className={HeroSectionStyleUtils.getImageClasses(imageClassName)}
        />
      </div>
    );
  }

  private renderTextContent(): React.ReactNode {
    const { header, subheader, paragraph, textClassName } = this.props;
    
    return (
      <div className={HeroSectionStyleUtils.getTextContainerClasses(textClassName)}>
        <h1 className={HeroSectionStyleUtils.getHeaderClasses()}>
          {header}
        </h1>
        
        {subheader && (
          <h2 className={HeroSectionStyleUtils.getSubheaderClasses()}>
            {subheader}
          </h2>
        )}
        
        <p className={HeroSectionStyleUtils.getParagraphClasses()}>
          {paragraph}
        </p>
      </div>
    );
  }

  render(): React.ReactNode {
    const { className, 'data-testid': dataTestId } = this.props;

    return (
      <section 
        className={HeroSectionStyleUtils.getContainerClasses(className)}
        data-testid={dataTestId}
      >
        <div className={HeroSectionStyleUtils.getBaseClasses()}>
          {this.renderImage()}
          {this.renderTextContent()}
        </div>
      </section>
    );
  }
}

export default HeroSection; 