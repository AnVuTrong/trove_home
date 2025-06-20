import React from 'react';
import { useTranslation } from 'react-i18next';
import { PricingTestimonialsSectionProps, Testimonial } from './PricingTestimonialsSection.types';
import { GradientCard } from '../../ui.components';

/**
 * PricingTestimonialsSection Component
 * 
 * A reusable testimonials section component for the pricing page
 * Displays customer testimonials with ratings
 */
export class PricingTestimonialsSectionClass {
  private static readonly SECTION_CONTAINER_CLASSES = 'py-20 px-4 bg-gray-50 dark:bg-background-surface_dark';
  private static readonly CONTENT_CONTAINER_CLASSES = 'max-w-7xl mx-auto';
  private static readonly HEADER_CONTAINER_CLASSES = 'text-center mb-16';
  private static readonly TITLE_CLASSES = 'text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4';
  private static readonly SUBTITLE_CLASSES = 'text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto';
  private static readonly TESTIMONIALS_GRID_CLASSES = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8';
  private static readonly TESTIMONIAL_CARD_CLASSES = 'p-0';
  private static readonly TESTIMONIAL_CONTENT_CLASSES = 'mb-6';
  private static readonly TESTIMONIAL_TEXT_CLASSES = 'text-gray-700 dark:text-gray-300 italic leading-relaxed mb-4';
  private static readonly RATING_CONTAINER_CLASSES = 'flex items-center mb-4';
  private static readonly STAR_ICON_CLASSES = 'w-5 h-5 text-yellow-400 mr-1';
  private static readonly TESTIMONIAL_AUTHOR_CLASSES = 'border-t border-gray-200 dark:border-gray-700 pt-6';
  private static readonly AUTHOR_NAME_CLASSES = 'font-semibold text-gray-900 dark:text-white';
  private static readonly AUTHOR_POSITION_CLASSES = 'text-sm text-gray-600 dark:text-gray-400';
  private static readonly AUTHOR_COMPANY_CLASSES = 'text-sm text-primary font-medium';

  public static getSectionContainerClasses(): string {
    return this.SECTION_CONTAINER_CLASSES;
  }

  public static getContentContainerClasses(): string {
    return this.CONTENT_CONTAINER_CLASSES;
  }

  public static getHeaderContainerClasses(): string {
    return this.HEADER_CONTAINER_CLASSES;
  }

  public static getTitleClasses(): string {
    return this.TITLE_CLASSES;
  }

  public static getSubtitleClasses(): string {
    return this.SUBTITLE_CLASSES;
  }

  public static getTestimonialsGridClasses(): string {
    return this.TESTIMONIALS_GRID_CLASSES;
  }

  public static getTestimonialCardClasses(): string {
    return this.TESTIMONIAL_CARD_CLASSES;
  }

  public static getTestimonialContentClasses(): string {
    return this.TESTIMONIAL_CONTENT_CLASSES;
  }

  public static getTestimonialTextClasses(): string {
    return this.TESTIMONIAL_TEXT_CLASSES;
  }

  public static getRatingContainerClasses(): string {
    return this.RATING_CONTAINER_CLASSES;
  }

  public static getStarIconClasses(): string {
    return this.STAR_ICON_CLASSES;
  }

  public static getTestimonialAuthorClasses(): string {
    return this.TESTIMONIAL_AUTHOR_CLASSES;
  }

  public static getAuthorNameClasses(): string {
    return this.AUTHOR_NAME_CLASSES;
  }

  public static getAuthorPositionClasses(): string {
    return this.AUTHOR_POSITION_CLASSES;
  }

  public static getAuthorCompanyClasses(): string {
    return this.AUTHOR_COMPANY_CLASSES;
  }
}

const StarIcon: React.FC = () => (
  <svg 
    className={PricingTestimonialsSectionClass.getStarIconClasses()} 
    fill="currentColor" 
    viewBox="0 0 20 20"
    role="img"
    aria-label="Star rating"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const PricingTestimonialsSection: React.FC<PricingTestimonialsSectionProps> = ({ 
  className = '',
  titleKey = 'pricing.testimonials.title',
  subtitleKey = 'pricing.testimonials.subtitle'
}) => {
  const { t } = useTranslation();

  const testimonialsData = t('pricing.testimonials.items', { returnObjects: true });
  const testimonials = Array.isArray(testimonialsData) ? testimonialsData as Testimonial[] : [];

  // Fallback testimonials if none are loaded
  const fallbackTestimonials: Testimonial[] = [
    {
      name: "Happy Customer",
      position: "Investor",
      company: "Trove User",
      testimonial: "Great investment tools that have helped improve my portfolio performance.",
      rating: 5
    }
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : fallbackTestimonials;

  return (
    <section 
      className={`${PricingTestimonialsSectionClass.getSectionContainerClasses()} ${className}`}
      role="region"
      aria-labelledby="testimonials-title"
    >
      <div className={PricingTestimonialsSectionClass.getContentContainerClasses()}>
        <div className={PricingTestimonialsSectionClass.getHeaderContainerClasses()}>
          <h2 id="testimonials-title" className={PricingTestimonialsSectionClass.getTitleClasses()}>
            {t(titleKey)}
          </h2>
          <p className={PricingTestimonialsSectionClass.getSubtitleClasses()}>
            {t(subtitleKey)}
          </p>
        </div>

        <div className={PricingTestimonialsSectionClass.getTestimonialsGridClasses()}>
          {displayTestimonials.map((testimonial, index) => (
            <GradientCard key={index} className={PricingTestimonialsSectionClass.getTestimonialCardClasses()}>
              <div className={PricingTestimonialsSectionClass.getTestimonialContentClasses()}>
                <div className={PricingTestimonialsSectionClass.getRatingContainerClasses()}>
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className={PricingTestimonialsSectionClass.getTestimonialTextClasses()}>
                  "{testimonial.testimonial}"
                </p>
              </div>
              
              <div className={PricingTestimonialsSectionClass.getTestimonialAuthorClasses()}>
                <div className={PricingTestimonialsSectionClass.getAuthorNameClasses()}>
                  {testimonial.name}
                </div>
                <div className={PricingTestimonialsSectionClass.getAuthorPositionClasses()}>
                  {testimonial.position}
                </div>
                <div className={PricingTestimonialsSectionClass.getAuthorCompanyClasses()}>
                  {testimonial.company}
                </div>
              </div>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTestimonialsSection; 