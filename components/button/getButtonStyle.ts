import { ViewStyle, TextStyle } from 'react-native';
import { ButtonVariant, ButtonSize } from './types/ButtonProps';
import { styles } from './styles/styles';
import { Theme } from '#/constants';

export type GetButtonStyleParams = {
  variant: ButtonVariant;
  size: ButtonSize;
  disabled: boolean;
  loading: boolean;
  fullWidth: boolean;
  style?: ViewStyle;
  theme: Theme;
};

export type ButtonStyles = {
  container: ViewStyle[];
  text: TextStyle[];
};

export function getButtonStyle({
  variant,
  size,
  disabled,
  loading,
  fullWidth,
  style,
  theme,
}: GetButtonStyleParams): ButtonStyles {
  const container: ViewStyle[] = [
    styles.button,
    styles[size],
  ];

  const text: TextStyle[] = [
    styles.text,
    styles[`${size}Text`],
  ];

  if (fullWidth) {
    container.push(styles.fullWidth);
  }

  switch (variant) {
    case 'primary':
      container.push({ backgroundColor: theme.colors.primary.main });
      text.push({ color: theme.colors.white });
      break;

    case 'secondary':
      container.push({ backgroundColor: theme.colors.surface });
      text.push({ color: theme.colors.primary.main });
      break;

    case 'outline':
      container.push({
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: theme.colors.border,
      });
      text.push({ color: theme.colors.primary.main });
      break;

    case 'danger':
      container.push({ backgroundColor: theme.colors.error });
      text.push({ color: theme.colors.white });
      break;

    case 'ghost':
      container.push({ backgroundColor: 'transparent' });
      text.push({ color: theme.colors.primary.main });
      break;
  }

  if (disabled || loading) {
    container.push({ opacity: 0.5 });
    text.push({ color: theme.colors.text.disabled });
  }

  if (style) {
    container.push(style);
  }

  return { container, text };
}
