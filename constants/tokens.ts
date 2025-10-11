// Primitive colors which not to be changed by themes

export const ColorTokens = {
  // Primary colors - HireMock brand colors (Purple theme)
  purple: {
    50: '#F3E8FF',
    100: '#E9D5FF', 
    200: '#D8B4FE',
    300: '#C084FC',
    400: '#A855F7',
    500: '#7226FF',
    600: '#942db1ff',
    700: '#6B21A8',
    800: '#581C87',
    900: '#4C1D95',
  },
  blue: {
    50: '#F0F3FF',
    100: '#D6DEFF', 
    200: '#B8C6FF',
    300: '#8B9EFF',
    400: '#5D73FF',
    500: '#3B4FE6',
    600: '#2A3BC9',
    700: '#1E2B9B',
    800: '#140263',
    900: '#0F0146',
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
    500: '#FF6B6B',
    600: '#E53E3E',
    700: '#9B2C2C',
  },
  
  pink: {
    50: '#F042FF',
    100: '#f6e6edff',
    200: '#e8bbdfff',
    300: '#d8a3dfff',
    400: '#ee97f0ff',
    500: '#d600b3ff',
    600: '#b30099ff',
    700: '#800066ff',
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
  height: {
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
  },
} as const;

// Comprehensive Gradient System for all components
export const GradientTokens = {
  // Primary brand gradients
  primary: {
    colors: ['#7226ff', '#160078'], // HireMock brand gradient
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 }, // Horizontal (left to right)
  },
  // Unique ProgressBar gradient (so it stands out from buttons)
  progressBar: {
    colors: ['#f7b4fdff', '#0b0698ff'], // Soft pink to blue for a modern look
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },
  primaryVertical: {
    colors: ['#7226ff', '#160078'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 }, // Vertical (top to bottom)
  },
  primaryReverse: {
    colors: ['#140263ff', '#7226ff'], // Reversed for variety
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },
  
  // Pink gradient (från din bild)
  pink: {
    colors: ['#F042FF', '#f6e6edff'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 }, // Horizontal
  },
  
  // Secondary gradients (for borders, icons, etc.)
  secondary: {
    colors: [ColorTokens.purple[400], ColorTokens.purple[600]],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },
  
  // Status gradients
  success: {
    colors: [ColorTokens.green[100], ColorTokens.green[500]],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },
  error: {
    colors: [ColorTokens.red[500], ColorTokens.red[600]], 
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },
  warning: {
    colors: [ColorTokens.yellow[100], ColorTokens.yellow[500]],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },
  
  // Subtle gradients (för backgrounds, borders)
  subtle: {
    colors: [ColorTokens.gray[100], ColorTokens.gray[300]],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },

  // ProgressBar background (metallic, bright effect)
  progressBarBg: {
    colors: [
      ColorTokens.gray[600],
      ColorTokens.gray[700],
      ColorTokens.gray[800],
      ColorTokens.gray[700],
      ColorTokens.gray[900],
    ],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    borderRadius: 'capsule',
    shadowColor: ColorTokens.gray[900],
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 3,
  },
  
  // Special effects
  shine: {
    colors: [ColorTokens.white, 'transparent', ColorTokens.white],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },
};
