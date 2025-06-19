# SubpageHeroSection Component

A highly reusable and configurable hero section component designed specifically for subpages like About, Pricing, etc. This component follows Object-Oriented Programming (OOP) principles and provides multiple variants to suit different design needs.

## Features

- **Multiple Variants**: Image overlay, gradient, and solid background variants
- **Responsive Design**: Fully responsive with mobile-first approach
- **Accessibility**: Built with ARIA attributes and semantic HTML
- **Internationalization**: Full i18n support with React i18next
- **Type Safety**: Comprehensive TypeScript definitions
- **OOP Design**: Clean separation of concerns with utility classes
- **Customizable**: Extensive customization options through props
- **Performance**: Optimized rendering with proper component composition

## Variants

### 1. Image Overlay Variant (`SubpageHeroVariant.IMAGE_OVERLAY`)
Perfect for hero sections that need a dramatic visual impact with background images.

```tsx
<SubpageHeroSection
  titleKey="about.hero.title"
  descriptionKey="about.hero.description"
  variant={SubpageHeroVariant.IMAGE_OVERLAY}
  backgroundImage={holographicBg}
  backgroundImageAlt="About Us Background"
/>
```

### 2. Gradient Variant (`SubpageHeroVariant.GRADIENT`)
Ideal for clean, modern hero sections with gradient backgrounds.

```tsx
<SubpageHeroSection
  titleKey="pricing.hero.title"
  descriptionKey="pricing.hero.description"
  variant={SubpageHeroVariant.GRADIENT}
/>
```

### 3. Solid Variant (`SubpageHeroVariant.SOLID`)
Simple and elegant hero section with solid background colors.

```tsx
<SubpageHeroSection
  titleKey="services.hero.title"
  descriptionKey="services.hero.description"
  variant={SubpageHeroVariant.SOLID}
/>
```

## Sizes

- **Small** (`SubpageHeroSize.SMALL`): 40vh height with compact padding
- **Medium** (`SubpageHeroSize.MEDIUM`): 60vh height (default)
- **Large** (`SubpageHeroSize.LARGE`): 80vh height for maximum impact

## Props Interface

```tsx
interface SubpageHeroSectionProps {
  titleKey: string;                    // Translation key for title (required)
  descriptionKey: string;              // Translation key for description (required)
  variant?: SubpageHeroVariant;        // Hero variant style
  size?: SubpageHeroSize;              // Hero section size
  backgroundImage?: string;            // Background image URL (required for IMAGE_OVERLAY)
  backgroundImageAlt?: string;         // Alt text for background image
  className?: string;                  // Additional CSS classes
  titleClassName?: string;             // Title-specific CSS classes
  descriptionClassName?: string;       // Description-specific CSS classes
  overlayOpacity?: number;             // Overlay opacity (0-100)
  style?: React.CSSProperties;         // Custom inline styles
  'data-testid'?: string;             // Testing identifier
}
```

## OOP Architecture

### Class Structure

The component follows OOP principles with the following class hierarchy:

1. **`SubpageHeroSectionClass`**: Main component class with factory methods
2. **`SubpageHeroSectionUtils`**: Utility class for styling and validation
3. **Constants**: Centralized styling constants and defaults

### Design Patterns Used

- **Factory Pattern**: For creating style configurations and accessibility attributes
- **Strategy Pattern**: Different styling strategies for each variant
- **Composition Pattern**: Modular component structure with render methods
- **Validation Pattern**: Props validation and normalization

### Separation of Concerns

- **Types**: Type definitions and interfaces (`SubpageHeroSection.types.ts`)
- **Constants**: Styling constants and defaults (`SubpageHeroSection.constants.ts`)
- **Utils**: Business logic and styling utilities (`SubpageHeroSection.utils.ts`)
- **Component**: Pure presentation logic (`SubpageHeroSection.component.tsx`)

## Usage Examples

### About Page Implementation

```tsx
import { SubpageHeroSection, SubpageHeroVariant } from '../components/ui.components';
import holographicBg from '../assets/backgrounds/about-bg.jpg';

const AboutPage: React.FC = () => (
  <div>
    <SubpageHeroSection
      titleKey="about.hero.title"
      descriptionKey="about.hero.description"
      variant={SubpageHeroVariant.IMAGE_OVERLAY}
      backgroundImage={holographicBg}
      backgroundImageAlt="About Us - Company Culture"
      size={SubpageHeroSize.LARGE}
      data-testid="about-hero-section"
    />
    {/* Other sections */}
  </div>
);
```

### Pricing Page Implementation

```tsx
import { SubpageHeroSection, SubpageHeroVariant } from '../components/ui.components';

const PricingPage: React.FC = () => (
  <div>
    <SubpageHeroSection
      titleKey="pricing.hero.title"
      descriptionKey="pricing.hero.description"
      variant={SubpageHeroVariant.GRADIENT}
      size={SubpageHeroSize.MEDIUM}
      data-testid="pricing-hero-section"
    />
    {/* Other sections */}
  </div>
);
```

### Custom Styling

```tsx
<SubpageHeroSection
  titleKey="custom.hero.title"
  descriptionKey="custom.hero.description"
  variant={SubpageHeroVariant.IMAGE_OVERLAY}
  backgroundImage={customBg}
  className="custom-hero-container"
  titleClassName="text-6xl font-black"
  descriptionClassName="text-2xl text-blue-200"
  overlayOpacity={50}
  style={{ minHeight: '90vh' }}
/>
```

## Accessibility Features

- **ARIA Labels**: Proper role and labelledby attributes
- **Semantic HTML**: Correct use of section, h1, and p elements
- **Screen Reader Support**: Hidden background images with descriptive alt text
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: High contrast text for all variants

## Internationalization

The component fully supports i18n through React i18next:

```json
// en/translation.json
{
  "about": {
    "hero": {
      "title": "About Trove",
      "description": "Discover our mission to revolutionize investment tools..."
    }
  },
  "pricing": {
    "hero": {
      "title": "Choose Your Plan",
      "description": "Select the perfect plan for your investment journey..."
    }
  }
}
```

## Testing

The component includes comprehensive testing capabilities:

```tsx
// Testing example
render(
  <SubpageHeroSection
    titleKey="test.hero.title"
    descriptionKey="test.hero.description"
    variant={SubpageHeroVariant.GRADIENT}
    data-testid="test-hero"
  />
);

expect(screen.getByTestId('test-hero')).toBeInTheDocument();
expect(screen.getByRole('region')).toHaveAttribute('aria-labelledby');
```

## Performance Considerations

- **Lazy Loading**: Background images are loaded efficiently
- **CSS Optimization**: Minimal and reusable CSS classes
- **Bundle Size**: Optimized exports and tree-shaking support
- **Render Optimization**: Memoization where appropriate

## Migration Guide

### From AboutHeroSection

```tsx
// Before
<AboutHeroSection
  className="custom-class"
  titleKey="about.hero.title"
  descriptionKey="about.hero.description"
/>

// After
<SubpageHeroSection
  titleKey="about.hero.title"
  descriptionKey="about.hero.description"
  variant={SubpageHeroVariant.IMAGE_OVERLAY}
  backgroundImage={holographicBg}
  className="custom-class"
/>
```

### From PricingHeroSection

```tsx
// Before
<PricingHeroSection
  titleKey="pricing.hero.title"
  descriptionKey="pricing.hero.description"
/>

// After
<SubpageHeroSection
  titleKey="pricing.hero.title"
  descriptionKey="pricing.hero.description"
  variant={SubpageHeroVariant.GRADIENT}
/>
```

## Contributing

When extending this component:

1. Follow the established OOP patterns
2. Add new variants through the constants file
3. Update TypeScript definitions
4. Include comprehensive tests
5. Document new features in this README

## License

This component is part of the Trove frontend application and follows the project's licensing terms. 