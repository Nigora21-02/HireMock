// Gradient for track
export const TRACK_GRADIENT = {
  colors: [ColorTokens.gray[50], ColorTokens.gray[200], ColorTokens.gray[500]] as const,
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
};
// Gradient for fill
export const FILL_GRADIENT = {
  colors: [ColorTokens.blue[200], ColorTokens.blue[500], ColorTokens.blue[900]] as const,
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
};
import { StyleSheet } from "react-native";
import { ProgressBarSize, ProgressBarType } from "./types";
import { ColorTokens, SizeTokens, GradientTokens } from "../../constants/tokens";

// 🎨 Gradients
export const GRADIENTS: Record<ProgressBarType, [string, string]> = {
  primary: GradientTokens.primary.colors as [string, string],
  secondary: GradientTokens.pink.colors as [string, string],
};

// 📏 Heights by tokens
const HEIGHTS: Record<ProgressBarSize, number> = {
  sm: SizeTokens.height.sm,
  md: SizeTokens.height.md,
  lg: SizeTokens.height.lg,
};


export const getProgressBarStyles = (size: ProgressBarSize = "sm") => {
  const height = HEIGHTS[size];

  return StyleSheet.create({
    container: {
      width: "100%",
      alignSelf: "center",
      justifyContent: "center",
    },

    // --- label "You have completed"
    label: {
      color: ColorTokens.gray[500],
      fontSize: SizeTokens.fontSize.md,
      marginBottom: SizeTokens.spacing.sm,
      textAlign: "center",
    },

    percent: {
      color: ColorTokens.purple[500],
      fontWeight: "600",
    },

    // --- track background
    track: {
      width: "100%",
      height,
      //backgroundColor: ColorTokens.gray[800],
      borderRadius: height / 2,
      overflow: "hidden",
      position: "relative",
      borderTopWidth: 0.4,
      borderTopColor: "rgba(97, 94, 94, 0.7)",

    },
    // --- fill (gradient)
    fill: {
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0,
      borderRadius: height / 2,
      backgroundColor: ColorTokens.blue[400], // modern blå fill
    },
    // --- glow effect
    glow: {
      position: "absolute",
      top: "62%",
      left: "7%",
      width: "86%",
      height,
      borderRadius: height / 2,
      backgroundColor: ColorTokens.purple[500] + "55",
      shadowColor: ColorTokens.purple[500],
      shadowOpacity: 0.6,
      shadowRadius: 15,
      elevation: 10,
      zIndex: -1,
    },

    percentWrap: {
      ...StyleSheet.absoluteFillObject,
      alignItems: "center",
      justifyContent: "center",
    },
    percentText: {
      color: ColorTokens.white,
      fontWeight: "bold",
      fontSize: SizeTokens.fontSize.sm,
      textShadowColor: ColorTokens.black,
      textShadowOffset: { width: 0, height: 1 },
      textShadowRadius: 2,
    },
    innerShine: {
      ...StyleSheet.absoluteFillObject,
      top: 0,
      height: "40%",
      backgroundColor: "rgba(255,255,255,0.15)",
    }
  });
};
