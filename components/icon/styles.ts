import { StyleSheet } from 'react-native';
import { ColorTokens } from '../../constants/tokens';

export const getIconStyle = (size: 'sm' | 'md' | 'lg', color: 'primary' | 'secondary' | 'pink' | 'warning') => {
  const sizeMap = { sm: 20, md: 28, lg: 32 };
  const colorMap = {
    primary: ColorTokens.blue[800], 
    secondary: ColorTokens.gray[400], 
    pink : ColorTokens.pink[500],
    warning: ColorTokens.yellow[600],
  };
  return StyleSheet.create({
    icon: {
      fontSize: sizeMap[size],
      color: colorMap[color],
    },
  }).icon;
};
