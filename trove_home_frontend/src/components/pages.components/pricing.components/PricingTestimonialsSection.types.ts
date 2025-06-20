export interface Testimonial {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  rating: number;
}

export interface PricingTestimonialsSectionProps {
  className?: string;
  titleKey?: string;
  subtitleKey?: string;
}

export interface PricingTestimonialsSectionStyles {
  sectionContainer: string;
  contentContainer: string;
  headerContainer: string;
  title: string;
  subtitle: string;
  testimonialsGrid: string;
  testimonialCard: string;
  testimonialContent: string;
  testimonialText: string;
  testimonialAuthor: string;
  authorName: string;
  authorPosition: string;
  authorCompany: string;
  ratingContainer: string;
  starIcon: string;
} 