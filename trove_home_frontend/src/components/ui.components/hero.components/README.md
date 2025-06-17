# HeroSection Component

A simple and flexible hero section component that splits the content into two parts: an image on the left and text content on the right.

## Features

- **Responsive Design**: Automatically stacks vertically on mobile devices
- **Flexible Content**: Supports header, optional subheader, and paragraph text
- **Customizable Styling**: Accepts custom CSS classes for different elements
- **TypeScript Support**: Fully typed with comprehensive interfaces
- **Accessibility**: Semantic HTML structure with proper heading hierarchy
- **Testing**: Comprehensive unit test coverage

## Usage

### Basic Example

```tsx
import { HeroSection } from '@/components/ui.components';

function HomePage() {
  return (
    <HeroSection
      imageSrc="/images/hero-image.jpg"
      imageAlt="Welcome to our platform"
      header="Welcome to Trove"
      subheader="Discover Amazing Features"
      paragraph="Experience the best-in-class solutions designed to help you achieve your goals with ease and efficiency."
    />
  );
}
```

### With Custom Styling

```tsx
import { HeroSection } from '@/components/ui.components';

function CustomHeroPage() {
  return (
    <HeroSection
      imageSrc="/images/custom-hero.jpg"
      imageAlt="Custom hero image"
      header="Custom Hero Section"
      paragraph="This hero section has custom styling applied to different elements."
      className="bg-gray-50"
      imageClassName="rounded-xl shadow-2xl"
      textClassName="text-center lg:text-left"
    />
  );
}
```

### Without Subheader

```tsx
import { HeroSection } from '@/components/ui.components';

function SimpleHeroPage() {
  return (
    <HeroSection
      imageSrc="/images/simple-hero.jpg"
      header="Simple Hero"
      paragraph="Sometimes you don't need a subheader, and that's perfectly fine!"
    />
  );
}
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `imageSrc` | string | ✅ | - | Source URL for the hero image |
| `imageAlt` | string | ❌ | "Hero image" | Alt text for the image |
| `header` | string | ✅ | - | Main heading text |
| `subheader` | string | ❌ | - | Optional subheading text |
| `paragraph` | string | ✅ | - | Main paragraph content |
| `className` | string | ❌ | - | Custom CSS classes for the container |
| `imageClassName` | string | ❌ | - | Custom CSS classes for the image |
| `textClassName` | string | ❌ | - | Custom CSS classes for the text container |
| `data-testid` | string | ❌ | - | Test ID for testing purposes |

## Layout

The component uses a responsive layout:

- **Desktop (lg and up)**: Image on the left (50% width), text on the right (50% width)
- **Mobile/Tablet**: Stacked vertically with image on top, text below

## Styling

The component uses Tailwind CSS classes and follows the project's design system. You can customize the appearance using the provided className props or by extending the existing style utilities.

## Testing

The component includes comprehensive unit tests covering:

- Component rendering with all props
- Optional prop handling
- Custom styling application
- Accessibility features
- Utility function behavior
- Constants validation

Run tests with:
```bash
yarn test --testPathPattern="HeroSection"
``` 