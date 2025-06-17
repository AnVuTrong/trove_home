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