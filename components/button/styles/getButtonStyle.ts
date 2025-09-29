import { ViewStyle, TextStyle } from 'react-native';
import { ButtonVariant, ButtonSize } from '../types/ButtonProps';
import { styles } from '../styles';

// Get button container styles
export const getButtonStyle = (
  variant: ButtonVariant,
  size: ButtonSize,
  disabled: boolean,
  loading: boolean,
  fullWidth: boolean,
  customStyle?: ViewStyle
): ViewStyle[] => {
  const baseStyle: any[] = [styles.button, styles[size]];
  
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
    case 'pink':
      baseStyle.push(styles.pinkButton);
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

