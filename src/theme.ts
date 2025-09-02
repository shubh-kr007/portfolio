'use client';
import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: { // We continue to build on the 'light' mode
      palette: {
        // --- Primary Colors (Beige/Tan for accents) ---
        primary: {
          solidBg: '#D2B48C',      // Background of solid buttons (tan)
          solidColor: '#141414',   // Text color on solid buttons (black)
          solidHoverBg: '#c1a37c', // Darker tan on hover
          main: '#D2B48C',         // Main color for links, highlights (tan)
          500: '#D2B48C',         // Standard token for the main color
        },

        // --- Background Colors ---
        background: {
          body: '#141414',         // Main page background (dark black)
          surface: '#1C1C1C',     // Card and paper backgrounds (slightly lighter black)
        },

        // --- Text Colors ---
        text: {
          primary: '#F5F5DC',      // Main text color (beige) - HIGH CONTRAST
          secondary: '#a9a9a9',    // Secondary text color (light gray)
          tertiary: '#888888',     // For less important text
        },

        // --- Neutral Colors for borders, dividers, etc. ---
        neutral: {
          200: '#2a2a2a', // Alternating section backgrounds
          outlinedBorder: '#4a4a4a',
        },
        
        // --- Common Colors ---
        common: {
            white: '#F5F5DC' // Treat our beige as the default "white"
        }
      },
    },
    dark: {}, // Dark mode remains default
  },
  // --- COMPONENT OVERRrides ---
  // This section tells specific components how to behave.
  components: {
    JoyTypography: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          // Set the default text color to our high-contrast beige
          color: theme.palette.text.primary,
        }),
      },
    },
    JoyLink: {
        styleOverrides: {
            root: ({ theme }) => ({
                // Make all links use our primary tan color
                color: theme.palette.primary.main,
            }),
        }
    },
    JoyChip: {
        styleOverrides: {
            root: ({ theme }) => ({
                // Ensure chips have readable text and borders
                color: theme.palette.text.secondary,
                borderColor: theme.palette.neutral.outlinedBorder,
            })
        }
    }
  },
});

export default theme;

