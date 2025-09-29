import { TextStyle } from 'react-native';
import { ButtonVariant } from '../types/ButtonProps';
import { ColorTokens,GradientTokens } from '../../../constants/tokens';

export const getButtonTextStyle = (variant: ButtonVariant, disabled: boolean): TextStyle => {
  const baseStyle: TextStyle = {
    fontWeight: '600',
    textAlign: 'center',
  };

  if (disabled) {
    return {
      ...baseStyle,
      color: ColorTokens.gray[500],
    };
  }

  switch (variant) {
    case 'primary':
      return {
        ...baseStyle,
        color: ColorTokens.white,
      };
    case 'secondary':
      return {
        ...baseStyle,
        color: GradientTokens.primaryVertical.colors[3],
      };
    case 'outline':
      return {
        ...baseStyle,
        color: ColorTokens.purple[800],
      };
    case 'danger':
      return {
        ...baseStyle,
        color: ColorTokens.white,
      };
    case 'success':
      return {
        ...baseStyle,
        color: ColorTokens.white,
      };
    case 'ghost':
      return {
        ...baseStyle,
        color: ColorTokens.purple[500],
      };
    case 'pink':
      return {
        ...baseStyle,
        color: ColorTokens.purple[900],
      };
    default:
      return {
        ...baseStyle,
        color: ColorTokens.gray[900],
      };
  }
};