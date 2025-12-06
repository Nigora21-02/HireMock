import { StyleProp, ViewStyle } from 'react-native';

export type IconType = 'feather' | 'material' | 'ion';
export type IconColor = 'primary' | 'secondary' | 'pink' | 'warning';
export type IconSize = 'sm' | 'md' | 'lg';

export interface IconProps {
  name: string;
  type?: IconType;
  size?: IconSize;
  color?: IconColor;
  style?: StyleProp<ViewStyle>;
  filled?: boolean;
  focused?: boolean;
}
