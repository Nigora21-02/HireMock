import React, { ReactNode } from 'react';
import { ViewStyle, TextStyle } from 'react-native';

// Button variants
export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'outline' 
  | 'danger' 
  | 'success' 
  | 'ghost'
  | 'pink';

// Button sizes
export type ButtonSize = 'small' | 'medium' | 'large';

// Icon position
export type IconPosition = 'left' | 'right';

// Button Props Interface
export interface ButtonProps {
  children: ReactNode;  // Changed from title to children
  onPress: () => void;
  
  // Styling props
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  
  // Icon props
  icon?: string; // Ionicons name
  iconPosition?: IconPosition;
  
  // Loading state
  loading?: boolean;
  loadingText?: string;
  
  // Custom styling
  style?: ViewStyle;
  textStyle?: TextStyle;
  
  // Accessibility
  accessibilityLabel?: string;
  testID?: string;
  
  // UX enhancements
  haptic?: boolean; // Vibration feedback
}

// Button style configuration
export interface ButtonStyleConfig {
  backgroundColor: string;
  borderColor?: string;
  textColor: string;
}

// Button theme mapping
export type ButtonThemeMap = {
  [K in ButtonVariant]: ButtonStyleConfig;
};