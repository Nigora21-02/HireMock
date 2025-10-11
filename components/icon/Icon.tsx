import React from 'react';
import { Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';
import type { IconProps } from './types';
import { getIconStyle } from './styles';

const Icon = ({ name, type = 'feather', size = 'md', color = 'secondary', style, filled, focused }: IconProps) => {
  // Map size and color to numeric and color values
  const iconStyle = getIconStyle(size, color);
  let iconName = name;

  // If Ionicons and filled/outline variant exists, switch name
  if (type === 'ion' && typeof filled !== 'undefined') {
    if (filled) {
      iconName = name.replace(/-outline$/, '');
    } else {
      iconName = name.endsWith('-outline') ? name : name + '-outline';
    }
  }

  const iconProps = {
    name: iconName as any,
    size: iconStyle.fontSize,
    color: iconStyle.color,
    style,
  };
  if (type === 'material') {
    return <MaterialIcons {...iconProps} />;
  }
  if (type === 'ion') {
    return <Ionicons {...iconProps} />;
  }
  return <Feather {...iconProps} />;
};

export default Icon;
