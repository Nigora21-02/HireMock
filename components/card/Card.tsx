import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ColorTokens, SizeTokens } from '../../constants/tokens';
import Icon from '../icon/Icon';
import { CardProps } from './types';

export default function Card({ 
  title, 
  subtitle, 
  children,
  backgroundColor = ColorTokens.gray[50],
  showTipIcon = false,
  onTipPress
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
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
          {showTipIcon && (
            <TouchableOpacity 
              onPress={onTipPress}
              style={{ padding: SizeTokens.spacing.xs }}
            >
              <Icon name="bulb-outline" type="ion" size="md" color="warning" />
            </TouchableOpacity>
          )}
        </View>
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
