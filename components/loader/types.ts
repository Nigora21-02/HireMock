import { StyleProp, ViewStyle } from "react-native";

export type LoaderSize = "sm" | "md" | "lg";

export interface BaseLoaderProps {
  size?: LoaderSize;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

export interface LoaderProps extends BaseLoaderProps {
  variant?: "spinner" | "dots" | "pulse";
}

export type ActivityIndicatorProps = BaseLoaderProps;
