import { TextStyle } from "react-native";
import { ButtonSize, ButtonVariant } from "../types/ButtonProps";
import { styles } from "../styles";

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