import React from 'react';
import { View, Text } from 'react-native';
import { ColorTokens, SizeTokens } from '../../constants/tokens';
import { CardProps } from './types';

export default function Card({ 
  title, 
  subtitle, 
  children,
  backgroundColor = ColorTokens.gray[50] 
}: CardProps) {
  return (
    <View
      style={{
        backgroundColor,
        padding: SizeTokens.spacing.lg,
        borderRadius: 12,
        marginBottom: SizeTokens.spacing.lg,
      }}
    >
      {title && (
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: ColorTokens.blue[800],
            marginBottom: subtitle || children ? SizeTokens.spacing.sm : 0,
          }}
        >
          {title}
        </Text>
      )}
      {subtitle && (
        <Text
          style={{
            fontSize: 16,
            color: ColorTokens.gray[800],
            lineHeight: 24,
          }}
        >
          {subtitle}
        </Text>
      )}
      {children}
    </View>
  );
}
