// Primitive colors which not to be changed by themes

export const ColorTokens = {
  // Primary colors - HireMock brand colors
  blue: {
    50: '#E8F4FD',
    100: '#BFDDF8', 
    200: '#85C1F1',
    300: '#4DA4EA',
    400: '#2B87E3',
    500: '#1E6FDC', 
    600: '#1A5FC7',
    700: '#154FAF',
    800: '#113F96',
    900: '#0D2F7E',
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
    500: '#E53E3E',
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
