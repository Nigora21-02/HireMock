import React from 'react';
import { Text, TextProps } from 'react-native';
import { ButtonVariant } from './types/ButtonProps';
import { getButtonTextStyle } from './styles/getButtonTextStyle';
import { SizeTokens } from '../../constants/tokens';

interface ButtonTextProps extends TextProps {
  variant: ButtonVariant;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

export const ButtonText: React.FC<ButtonTextProps> = ({ 
  children, 
  variant, 
  size = 'medium', 
  disabled = false, 
  style, 
  ...props 
}) => {
  const textStyle = getButtonTextStyle(variant, disabled);
  
  const sizeStyle = {
    fontSize: size === 'small' ? SizeTokens.fontSize.sm :
              size === 'large' ? SizeTokens.fontSize.lg :
              SizeTokens.fontSize.md,
  };

  return (
    <Text 
      style={[textStyle, sizeStyle, style]} 
      {...props}
    >
      {children}
    </Text>
  );
};