import React from 'react';
import { View, Text } from 'react-native';
import { CircularTimerProps } from './types';
import { getCircularTimerStyles } from './getCircularTimerStyles';

export default function CircularTimer({ 
  timeText, 
  label = 'återstår',
  size = 'lg',
  state = 'normal' 
}: CircularTimerProps) {
  const styles = getCircularTimerStyles(size, state);

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{timeText}</Text>
      {label && <Text style={styles.label}>{label}</Text>}
    </View>
  );
}
