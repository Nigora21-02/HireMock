import React from 'react';
import { Text, Pressable } from 'react-native';
import { ButtonProps} from './types/ButtonProps';
import { getButtonStyle } from './styles/getButtonStyle';
import { defaultTheme } from '../../constants';


export default function Button({
  children,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  loading = false,
  style,
  accessibilityLabel,
}: ButtonProps) {
  const theme = defaultTheme;

  const styles = getButtonStyle({
    variant,
    size,
    disabled,
    loading,
    fullWidth,
    style,
    theme,
  });

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      accessibilityLabel={accessibilityLabel}
      style={styles.container}
    >
      <Text>{children}</Text>
    </Pressable>
  );
}
