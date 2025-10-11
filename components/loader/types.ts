import { StyleProp, ViewStyle } from "react-native";

export type LoaderSize = "sm" | "md" | "lg";

export interface LoaderProps {
  size?: LoaderSize;
  color?: string;
  variant?: "spinner" | "dots" | "pulse";
  style?: StyleProp<ViewStyle>;
}
