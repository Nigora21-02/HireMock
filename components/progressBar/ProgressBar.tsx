
import React, { useRef, useEffect } from "react";
import { View, Animated, Text, StyleSheet, Easing } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ColorTokens } from "../../constants/tokens";
import { ProgressBarProps } from "./types";
import { getProgressBarStyles, GRADIENTS, FILL_GRADIENT, TRACK_GRADIENT } from "./getProgressBarStyle";

const ProgressBar = ({
  progress,
  size = "md",
  label = "You have completed",
  showPercent = true,
  backgroundColor,
  style,
}: ProgressBarProps) => {
  const styles = getProgressBarStyles(size);
  const animatedWidth = useRef(new Animated.Value(0)).current;
  const fadeText = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    Animated.parallel([
      Animated.timing(animatedWidth, {
        toValue: Math.min(progress, 100),
        duration: 900,
        useNativeDriver: false,
      }),
      Animated.timing(fadeText, {
        toValue: 1,
        duration: 1200,
        delay: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [progress]);

  const widthInterpolated = animatedWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={[styles.container, style]}>
      <Animated.Text style={[styles.label, { opacity: fadeText }]}>
        {label}
        {showPercent && (
          <Text style={styles.percent}> {Math.round(progress)}%</Text>
        )}
        of this course
      </Animated.Text>

      <View style={[styles.track, backgroundColor ? { backgroundColor } : null]}>
        <View style={styles.innerShine} />
        <LinearGradient
          colors={TRACK_GRADIENT.colors}
          start={TRACK_GRADIENT.start}
          end={TRACK_GRADIENT.end}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderRadius: styles.track.borderRadius }}
          pointerEvents="none"
        />
        <View style={styles.innerShine} />

        <Animated.View
          style={[
            styles.fill,
            {
              width: widthInterpolated
            },
          ]}
        >
          <LinearGradient
            colors={FILL_GRADIENT.colors}
            start={FILL_GRADIENT.start}
            end={FILL_GRADIENT.end}
            style={[StyleSheet.absoluteFill, { borderRadius: styles.fill.borderRadius }]}
          />
        </Animated.View>
      </View>

      <View style={[styles.glow]} />
    </View>
  );
};


export default ProgressBar;
