# HeroSection Component

A simple and flexible hero section component that splits the content into two parts: an image on the left and text content on the right. Now supports full-screen mode for immersive experiences.

## Features

- **Responsive Design**: Automatically stacks vertically on mobile devices
- **Full-Screen Mode**: NEW! Create immersive full-screen hero sections that extend behind headers
- **Flexible Content**: Supports header, optional subheader, and paragraph text
- **Customizable Styling**: Accepts custom CSS classes for different elements
- **TypeScript Support**: Fully typed with comprehensive interfaces
- **Accessibility**: Semantic HTML structure with proper heading hierarchy
- **Testing**: Comprehensive unit test coverage including full-screen mode

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

### Full-Screen Hero Section (NEW!)

```tsx
import { HeroSection } from '@/components/ui.components';

function FullScreenHomePage() {
  return (
    <HeroSection
      imageSrc="/images/hero-background.jpg"
      imageAlt="Full-screen hero background"
      header="Welcome to Trove"
      subheader="Discover Amazing Features"
      paragraph="Experience the best-in-class solutions designed to help you achieve your goals with ease and efficiency."
      fullScreen={true}
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
| `fullScreen` | boolean | ❌ | false | **NEW!** Enable full-screen mode |
| `data-testid` | string | ❌ | - | Test ID for testing purposes |

## Layout Modes

### Default Mode

The component uses a responsive layout:

- **Desktop (lg and up)**: Image on the left (50% width), text on the right (50% width)
- **Mobile/Tablet**: Stacked vertically with image on top, text below

### Full-Screen Mode (NEW!)

When `fullScreen={true}`:

- **All devices**: Image fills the entire viewport (100vw × 100vh)
- **Text content**: Centered over the image with overlay styling
- **Responsive text**: Scales appropriately across all screen sizes
- **Overlay effects**: Semi-transparent background and text shadows for readability

## Styling

The component uses Tailwind CSS classes and follows the project's design system. You can customize the appearance using the provided className props or by extending the existing style utilities.

### Full-Screen Styling Features

- **Backdrop overlay**: Semi-transparent dark overlay for text readability
- **White text**: High contrast text optimized for image backgrounds
- **Drop shadows**: Text shadows for enhanced readability
- **Responsive typography**: Larger text sizes for full-screen impact
- **Absolute positioning**: Image positioned absolutely behind content

## Navbar Integration

When using full-screen mode, ensure your navbar is configured as an overlay:

```tsx
// Header component should use fixed positioning with backdrop blur
<header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm hover:bg-white/90">
  {/* Header content */}
</header>
```

## Testing

The component includes comprehensive unit tests covering:

- Component rendering with all props
- Optional prop handling
- Custom styling application
- **Full-screen mode functionality** (NEW!)
- **Layout switching between modes** (NEW!)
- **Full-screen specific styling** (NEW!)
- Accessibility features
- Utility function behavior
- Constants validation

Run tests with:
```bash
yarn test --testPathPattern="HeroSection"
``` 