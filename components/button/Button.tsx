import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ButtonProps } from './types/ButtonProps';
import { getButtonStyle } from './styles/getButtonStyle';

export default function Button({
  children,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  loading = false,
  loadingText,
  style,
  accessibilityLabel,
}: ButtonProps) {

  return (
    <TouchableOpacity
      style={getButtonStyle(variant, size, disabled, loading, fullWidth, style)}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      accessibilityLabel={accessibilityLabel}
    >
      {children}
    </TouchableOpacity>
  );
}