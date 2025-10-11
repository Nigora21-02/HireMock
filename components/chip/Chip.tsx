import React from 'react';
import { Text, ViewStyle, TextStyle, Pressable } from 'react-native';
import styles from './styles';

export interface ChipProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Chip: React.FC<ChipProps> = ({ label, selected = false, onPress, style, textStyle }) => {
  return (
    <Pressable
      style={[
        styles.chip,
        selected && styles.selected,
        style,
      ]}
      onPress={onPress}
      
    >
      <Text style={[styles.label, selected && styles.selectedLabel, textStyle]}>{label}</Text>
    </Pressable>
  );
};

export default Chip;
