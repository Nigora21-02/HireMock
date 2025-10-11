
import React, { useRef, useEffect } from "react";
import { View, Animated, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ProgressBarProps } from "./types";
import { getProgressBarStyles, GRADIENTS } from "./getProgressBarStyle";

const ProgressBar = ({
  progress,
  size = "sm",
  label = "You have completed",
  showPercent = true,
  gradientColors = GRADIENTS.secondary,
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
        {label} <Text style={styles.percent}>{Math.round(progress)}%</Text> of this course
      </Animated.Text>

      <View style={[styles.track, backgroundColor ? { backgroundColor } : null]}>
        <Animated.View
          style={[
            styles.fill,
            { width: widthInterpolated },
          ]}
        >
          <LinearGradient
            colors={gradientColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
          />
        </Animated.View>
      </View>

      <View style={[styles.glow]} />
    </View>
  );
};


export default ProgressBar;
