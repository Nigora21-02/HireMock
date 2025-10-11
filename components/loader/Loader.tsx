import React, { useRef, useEffect } from "react";
import { View, Animated } from "react-native";
import { styles, getLoaderDotStyle } from "./styles/getDotLoaderStyle";
import { LoaderProps } from "./types";
import { ColorTokens } from "../../constants/tokens";

const DOTS = 3;

const Loader = ({ size = "md", color = ColorTokens.blue[700], style }: LoaderProps) => {
    const dotAnims = Array.from({ length: DOTS }, () => useRef(new Animated.Value(0)).current);

    useEffect(() => {
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
    }, []);

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
