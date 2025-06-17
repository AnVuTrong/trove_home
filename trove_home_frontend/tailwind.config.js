/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary branding colors are based on the core identity.
        // Brunswick Green is the anchor, while Mint is used for primary components in Dark Mode.
        primary: {
          DEFAULT: '#2D4C3C', // Brunswick Green: For main branding, footers, solid sections.
          light: '#61CA7F',   // Emerald: A lighter variant for hover states or secondary branding.
          dark: '#3BBF95',    // Mint: The primary color for components in Dark Mode.
        },
        // Accent colors are for user interaction and calls-to-action (CTAs).
        accent: {
          DEFAULT: '#71F1A1', // Light Green: The brightest color, for main CTAs that need to pop.
          light: '#3BBF95',   // Mint: For secondary buttons, interactive icons, and links.
          dark: '#71F1A1',    // Light Green: Also the main CTA for dark mode, creating high contrast.
        },
        // Text colors defined for light and dark backgrounds.
        text: {
          DEFAULT: '#2D2D2D', // Jet: Main text color on light backgrounds for max readability.
          light: '#363B38',   // Black Olive: Softer text for subtitles or less important info.
          dark: '#FFFFFF',    // White: Main text color on dark backgrounds.
          // Heading colors for light theme
          light_h1: '#3bbf95',      // Darker variant for main headings
          light_h2: '#3bbf95',      // Primary text color for secondary headings
          light_h3: '#3bbf95',      // Slightly softer for tertiary headings
          light_h4: '#3bbf95',      // Medium gray for quaternary headings
          light_h5: '#3bbf95',      // Lighter gray for quinary headings
          light_h6: '#3bbf95',      // Lightest gray for senary headings
          // Heading colors for dark theme
          dark_h1: '#71f1a1',    // Pure white for main headings in dark mode
          dark_h2: '#71f1a1',    // Slightly off-white for secondary headings
          dark_h3: '#71f1a1',    // Light gray for tertiary headings
          dark_h4: '#71f1a1',    // Medium light gray for quaternary headings
          dark_h5: '#71f1a1',    // Darker gray for quinary headings
          dark_h6: '#71f1a1',    // Even darker gray for senary headings
        },
        // Background colors for the overall theme.
        background: {
          DEFAULT: '#FFFFFF', // White: Default background for the light theme.
          light: '#FFFFFF',   // For light theme surfaces, like cards, which sit on the default BG.
          dark: '#2D2D2D',    // Jet: Default background for the dark theme.
          surface_dark: '#363B38' // Black Olive: For cards/surfaces in dark mode to create depth.
        },
        // Feedback colors for user notifications.
        // Note: This palette is excellent for 'success'. You should add your own brand's colors for error and warning.
        feedback: {
          success: '#3BBF95',         // Mint: A clear, positive green for success messages.
          success_light: '#71F1A1',  // Light Green: A lighter/brighter success variant.
          error: '#D84646',   // A Poppy red for error messages.
          warning: '  #E8A93D', // A hunyadi yellow for warnings.
        }
      }
    },
  },
  plugins: [],
}