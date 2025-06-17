import React from 'react';
import { HeroSectionProps } from './HeroSection.types';
import { HeroSectionStyleUtils } from './HeroSection.utils';

class HeroSection extends React.Component<HeroSectionProps> {
  private renderImage(): React.ReactNode {
    const { imageSrc, imageAlt, imageClassName, fullScreen } = this.props;
    
    return (
      <div className={fullScreen ? "absolute inset-0" : "w-full lg:w-1/2"}>
        <img
          src={imageSrc}
          alt={imageAlt || 'Hero image'}
          className={HeroSectionStyleUtils.getImageClasses(imageClassName, fullScreen)}
        />
      </div>
    );
  }

  private renderTextContent(): React.ReactNode {
    const { header, subheader, paragraph, textClassName, fullScreen } = this.props;
    
    return (
      <div className={HeroSectionStyleUtils.getTextContainerClasses(textClassName, fullScreen)}>
        <h1 className={HeroSectionStyleUtils.getHeaderClasses(fullScreen)}>
          {header}
        </h1>
        
        {subheader && (
          <h2 className={HeroSectionStyleUtils.getSubheaderClasses(fullScreen)}>
            {subheader}
          </h2>
        )}
        
        <p className={HeroSectionStyleUtils.getParagraphClasses(fullScreen)}>
          {paragraph}
        </p>
      </div>
    );
  }

  private renderFullScreenLayout(): React.ReactNode {
    const { className, 'data-testid': dataTestId } = this.props;

    return (
      <section 
        className={HeroSectionStyleUtils.getContainerClasses(className, true)}
        data-testid={dataTestId}
      >
        {this.renderImage()}
        <div className={HeroSectionStyleUtils.getBaseClasses(true)}>
          {this.renderTextContent()}
        </div>
      </section>
    );
  }

  private renderDefaultLayout(): React.ReactNode {
    const { className, 'data-testid': dataTestId } = this.props;

    return (
      <section 
        className={HeroSectionStyleUtils.getContainerClasses(className, false)}
        data-testid={dataTestId}
      >
        <div className={HeroSectionStyleUtils.getBaseClasses(false)}>
          {this.renderImage()}
          {this.renderTextContent()}
        </div>
      </section>
    );
  }

  render(): React.ReactNode {
    const { fullScreen } = this.props;

    return fullScreen ? this.renderFullScreenLayout() : this.renderDefaultLayout();
  }
}

export default HeroSection; 