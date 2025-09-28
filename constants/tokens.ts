// Primitive colors which not to be changed by themes

export const ColorTokens = {
  // Primary colors - HireMock brand colors (Purple theme)
  purple: {
    50: '#F3E8FF',
    100: '#E9D5FF', 
    200: '#D8B4FE',
    300: '#C084FC',
    400: '#A855F7',
    500: '#a354ecff',
    600: '#942db1ff',
    700: '#6B21A8',
    800: '#581C87',
    900: '#4C1D95',
  },
  
  // Grayscale
  gray: {
    50: '#F7FAFC',
    100: '#EDF2F7',
    200: '#E2E8F0',
    300: '#CBD5E0',
    400: '#A0AEC0',
    500: '#718096',
    600: '#4A5568',
    700: '#2D3748',
    800: '#1A202C',
    900: '#171923',
  },

  // Status colors
  green: {
    50: '#F0FFF4',
    100: '#C6F6D5',
    500: '#38A169',
    600: '#2F855A',
    700: '#276749',
  },
  
  red: {
    50: '#FED7D7',
    100: '#FEB2B2',
    500: '#b52b2bff',
    600: '#C53030',
    700: '#9B2C2C',
  },
  
  yellow: {
    50: '#FFFFF0',
    100: '#FEFCBF',
    500: '#D69E2E',
    600: '#B7791F',
  },

  // Pure colors
  white: '#FFFFFF',
  black: '#000000',
} as const;

// Size and spacing tokens
export const SizeTokens = {
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 999,
  },
  
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
} as const;
