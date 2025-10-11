import { ViewStyle } from "react-native";


export type ProgressBarType = 'primary' | 'secondary';
export type ProgressBarSize = 'sm' | 'md' | 'lg';


export interface ProgressBarProps {
  progress: number; // 0 to 1
  size?: ProgressBarSize;
  style?: ViewStyle;
  label?: string;
  showPercent?: boolean;
  gradientColors?: [string, string] | [string, string, ...string[]];
  backgroundColor?: string;
  type?: ProgressBarType;
}

