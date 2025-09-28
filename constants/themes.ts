import { ColorTokens } from './tokens';

export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
  // Brand colors
  primary: {
    main: string;
    light: string;
    dark: string;
  };
  
  success: string;
  warning: string;
  error: string;
  
  white: string;
  black: string;
  
  // Semantic colors (changes based on theme)
  background: string;
  surface: string;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  border: string;
}

// Complete theme interface
export interface Theme {
  mode: ThemeMode;
  colors: ThemeColors;
}

// Light Theme
export const lightTheme: Theme = {
  mode: 'light',
  colors: {
    primary: {
      main: ColorTokens.purple[500],
      light: ColorTokens.purple[400],
      dark: ColorTokens.purple[600],
    },
    success: ColorTokens.green[500],
    warning: ColorTokens.yellow[500],
    error: ColorTokens.red[500],
    
    white: ColorTokens.white,
    black: ColorTokens.black,
    
    // Semantic colors (light theme specific)
    background: ColorTokens.white,
    surface: ColorTokens.gray[50],
    text: {
      primary: ColorTokens.gray[900],
      secondary: ColorTokens.gray[600],
      disabled: ColorTokens.gray[400],
    },
    border: ColorTokens.gray[200],
  },
};

// Dark Theme
export const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    // Brand colors
    primary: {
      main: ColorTokens.purple[400], // Lighter in dark mode
      light: ColorTokens.purple[300],
      dark: ColorTokens.purple[500],
    },
    
    // Status colors
    success: ColorTokens.green[500],
    warning: ColorTokens.yellow[500],
    error: ColorTokens.red[500],
    
    // Base colors
    white: ColorTokens.white,
    black: ColorTokens.black,
    
    // Semantic colors (dark theme specific)
    background: ColorTokens.gray[900],
    surface: ColorTokens.gray[800],
    text: {
      primary: ColorTokens.white,
      secondary: ColorTokens.gray[300],
      disabled: ColorTokens.gray[500],
    },
    border: ColorTokens.gray[700],
  },
};

// Default theme
export const defaultTheme = lightTheme;

// Theme collection
export const themes = {
  light: lightTheme,
  dark: darkTheme,
};