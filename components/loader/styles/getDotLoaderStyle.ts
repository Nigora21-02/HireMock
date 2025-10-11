import { StyleSheet, Animated } from "react-native";
import { ColorTokens } from "../../../constants/tokens";

export function getLoaderDotStyle({
    size = "md",
    color = ColorTokens.blue[700],
    opacity = 1,
}: {
    size?: "sm" | "md" | "lg";
    color?: string;
    opacity?: number | Animated.AnimatedInterpolation<number>;
}) {
    const dotSize = size === "sm" ? 8 : size === "lg" ? 16 : 12;
    return [
        styles.dot,
        {
            width: dotSize,
            height: dotSize,
            backgroundColor: color,
            opacity,
            marginHorizontal: dotSize * 0.25,
        },
    ];
}



export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
    },
    dot: {
        borderRadius: 999,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
    },
});

export default styles;
