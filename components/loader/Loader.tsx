import React, { useRef, useEffect } from "react";
import { View, Animated, Easing } from "react-native";
import { styles, getLoaderDotStyle } from "./styles/getDotLoaderStyle";
import { LoaderProps } from "./types";
import { ColorTokens } from "../../constants/tokens";
import { LinearGradient } from "expo-linear-gradient";

const DOTS = 3;

const Loader = ({ size = "md", color = ColorTokens.blue[700], style, variant = "dots" }: LoaderProps) => {
    // Progress dots
    const dotAnims = Array.from({ length: DOTS }, () => useRef(new Animated.Value(0)).current);

    // Spinner
    const spinAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (variant === "dots") {
            const animations = dotAnims.map((anim, i) =>
                Animated.loop(
                    Animated.sequence([
                        Animated.delay(i * 150),
                        Animated.timing(anim, {
                            toValue: 1,
                            duration: 400,
                            useNativeDriver: true,
                        }),
                        Animated.timing(anim, {
                            toValue: 0.3,
                            duration: 600,
                            useNativeDriver: true,
                        }),
                    ])
                )
            );
            animations.forEach(anim => anim.start());
            return () => animations.forEach(anim => anim.stop && anim.stop());
        } else if (variant === "spinner") {
            const spin = Animated.loop(
                Animated.timing(spinAnim, {
                    toValue: 1,
                    duration: 2000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                })
            );
            spin.start();
            return () => spin.stop && spin.stop();
        }
    }, [variant]);

    if (variant === "spinner") {
        const spinnerSize = size === "sm" ? 24 : size === "lg" ? 48 : 36;
        const spin = spinAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "360deg"]
        });
        return (
            <View style={[styles.container, style]}>
                <Animated.View
                    style={{
                        width: spinnerSize,
                        height: spinnerSize,
                        borderRadius: spinnerSize / 2,
                        alignItems: "center",
                        justifyContent: "center",
                        transform: [{ rotate: spin }],
                    }}
                >
                    <LinearGradient
                        colors={[color, ColorTokens.blue[200], "transparent"]}
                        start={{ x: 0.2, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{
                            width: spinnerSize,
                            height: spinnerSize,
                            borderRadius: spinnerSize / 2,
                            borderWidth: 4,
                            borderColor: "transparent",
                            borderTopColor: color,
                        }}
                    />
                </Animated.View>
            </View>
        );
    }

    // Default: progress dots
    const dotStyle = (i: number) => getLoaderDotStyle({ size, color, opacity: dotAnims[i] });
    return (
        <View style={[styles.container, style, { flexDirection: "row" }]}>
            {dotAnims.map((_, i) => (
                <Animated.View key={i} style={dotStyle(i)} />
            ))}
        </View>
    );
};

export default Loader;
