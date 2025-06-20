import React from 'react';

export interface GradientCardProps {
  /**
   * Additional Tailwind CSS classes to apply to the card.
   */
  className?: string;
  /**
   * Card content.
   */
  children: React.ReactNode;
}

/**
 * GradientCard Component
 *
 * A simple, reusable rectangular card that applies a bottom-to-top green gradient background.
 * Intended to be shared between the About page (team section) and Pricing page components.
 *
 * Design rules applied:
 * • No border-radius (pure rectangle)
 * • Gradient from the primary brand green at the bottom → lighter green at the top
 *
 * Usage:
 * ```tsx
 * <GradientCard>
 *   ...content
 * </GradientCard>
 * ```
 */
const GradientCard: React.FC<GradientCardProps> = ({ className = '', children }) => {
  return (
    <div
      className={`bg-gradient-to-t from-primary via-primary-light to-primary-light p-6 rounded-none shadow-lg hover:bg-blur transition-shadow duration-150 ${className}`}>
      {children}
    </div>
  );
};

export default GradientCard;
