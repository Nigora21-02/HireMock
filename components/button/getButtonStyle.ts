import { ViewStyle, TextStyle } from 'react-native';
import { ButtonVariant, ButtonSize } from './types/ButtonProps';
import { styles } from './styles';

// Get button container styles
export const getButtonStyle = (
  variant: ButtonVariant,
  size: ButtonSize,
  disabled: boolean,
  loading: boolean,
  fullWidth: boolean,
  customStyle?: ViewStyle
): ViewStyle[] => {
  const baseStyle: ViewStyle[] = [styles.button, styles[size]];
  
  // Full width styling
  if (fullWidth) {
    baseStyle.push(styles.fullWidth);
  }
  
  // Variant styling
  switch (variant) {
    case 'primary':
      baseStyle.push(styles.primaryButton);
      break;
    case 'secondary':
      baseStyle.push(styles.secondaryButton);
      break;
    case 'outline':
      baseStyle.push(styles.outlineButton);
      break;
    case 'danger':
      baseStyle.push(styles.dangerButton);
      break;
    case 'success':
      baseStyle.push(styles.successButton);
      break;
    case 'ghost':
      baseStyle.push(styles.ghostButton);
      break;
  }
  
  // Disabled/loading state
  if (disabled || loading) {
    baseStyle.push(styles.disabledButton);
  }
  
  // Custom styling
  if (customStyle) {
    baseStyle.push(customStyle);
  }
  
  return baseStyle;
};

// Get button text styles
export const getTextStyle = (
  variant: ButtonVariant,
  size: ButtonSize,
  disabled: boolean,
  loading: boolean,
  customTextStyle?: TextStyle
): TextStyle[] => {
  const baseStyle: any[] = [styles.text, styles[`${size}Text` as keyof typeof styles]];
  
  // Variant text styling
  switch (variant) {
    case 'primary':
      baseStyle.push(styles.primaryText);
      break;
    case 'secondary':
      baseStyle.push(styles.secondaryText);
      break;
    case 'outline':
      baseStyle.push(styles.outlineText);
      break;
    case 'danger':
      baseStyle.push(styles.dangerText);
      break;
    case 'success':
      baseStyle.push(styles.successText);
      break;
    case 'ghost':
      baseStyle.push(styles.ghostText);
      break;
  }
  
  // Disabled/loading text state
  if (disabled || loading) {
    baseStyle.push(styles.disabledText);
  }
  
  // Custom text styling
  if (customTextStyle) {
    baseStyle.push(customTextStyle);
  }
  
  return baseStyle;
};