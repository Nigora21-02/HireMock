import React from 'react';
import { View, Text } from 'react-native';
import Chip from '../chip/Chip';
import Icon from '../icon/Icon';
import blockSelectorStyles from './blockSelectorStyles';
import { Option } from './types';

import { IconType } from '../icon/types';

interface OptionSelectorProps {
  options: Option[];
  selected: string;
  onSelect: (value: string) => void;
  icon: { name: string; type: IconType };
  label: string;
}

const OptionSelector: React.FC<OptionSelectorProps> = ({ options, selected, onSelect, icon, label }) => (
  <View style={blockSelectorStyles.container}>
    <View style={blockSelectorStyles.labelRow}>
      <Icon name={icon.name} type={icon.type} size="md" color="pink" />
      <Text style={blockSelectorStyles.label}>{label}</Text>
    </View>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {options.map(option => (
        <Chip
          key={option.value}
          label={option.label}
          selected={selected === option.value}
          onPress={() => onSelect(option.value)}
        />
      ))}
    </View>
  </View>
);

export default OptionSelector;
