import React from 'react';
import { View, Text } from 'react-native';
import timerSelectorStyles from './timerSelectorStyles';
import Chip from '../chip/Chip';
import Icon from '../icon/Icon';
import { iconMap } from '../icon/iconMap';


interface TimerSelectorProps {
  timer: number;
  onSelect: (min: number) => void;
  options?: number[];
}

const TimerSelector: React.FC<TimerSelectorProps> = ({ timer, onSelect, options = [2, 3, 5] }) => (
  <View style={timerSelectorStyles.container}>
    <View style={timerSelectorStyles.labelRow}>
      <Icon name={iconMap.timer.name} type={iconMap.timer.type} size="md" color="pink" />
      <Text style={timerSelectorStyles.label}>Timer</Text>
    </View>
    <View style={timerSelectorStyles.chipRow}>
      {options.map((min) => (
        <Chip
          key={min}
          label={min + ' min'}
          selected={timer === min}
          onPress={() => onSelect(min)}
          style={timerSelectorStyles.chip}
        />
      ))}
    </View>
  </View>
);

export default TimerSelector;
