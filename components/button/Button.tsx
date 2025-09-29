import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonProps } from './types/ButtonProps';
import { getButtonStyle } from './styles/getButtonStyle';
import { GradientTokens } from '../../constants/tokens';


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

  const buttonStyle = getButtonStyle(variant, size, disabled, loading, fullWidth, style);
  
  // Use gradient for primary variant
  if (variant === 'primary' && !disabled && !loading) {
    const gradientConfig = GradientTokens.primary;
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        activeOpacity={0.8}
        accessibilityLabel={accessibilityLabel}
      >
        <LinearGradient
          colors={['#160078', '#7226ff']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={Array.isArray(buttonStyle) ? Object.assign({}, ...buttonStyle) : buttonStyle}
        >
          {children}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  // Use pink gradient for pink variant
  if (variant === 'pink' && !disabled && !loading) {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled || loading}
        activeOpacity={0.8}
        accessibilityLabel={accessibilityLabel}
      >
        <LinearGradient
          colors={GradientTokens.pink.colors as [string, string]}
          start={GradientTokens.pink.start}
          end={GradientTokens.pink.end}
          style={Array.isArray(buttonStyle) ? Object.assign({}, ...buttonStyle) : buttonStyle}
        >
          {children}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  // Regular TouchableOpacity for other variants
  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      accessibilityLabel={accessibilityLabel}
    >
      {children}
    </TouchableOpacity>
  );
}