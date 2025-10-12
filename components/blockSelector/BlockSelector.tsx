import OptionSelector from './OptionSelector';
import blockSelectorStyles from './blockSelectorStyles';
import { BlockSelectorProps } from './types';
import { iconMap } from '../icon/iconMap';
import React from 'react';

const BlockSelector: React.FC<BlockSelectorProps> = ({
  category, setCategory, categories,
  language, setLanguage, languages,
  level, setLevel, levels
}) => (
  <>
    <OptionSelector
      options={categories}
      selected={category}
      onSelect={setCategory}
      icon={{
        name: iconMap.grid.name,
        type: iconMap.grid.type ?? 'ion',
      }}
      label="Kategori"
    />
    <OptionSelector
      options={languages}
      selected={language}
      onSelect={setLanguage}
      icon={{
        name: iconMap.globe.name,
        type: iconMap.globe.type ?? 'ion',
      }}
      label="Språk"
    />
    <OptionSelector
      options={levels}
      selected={level}
      onSelect={setLevel}
      icon={{
        name: iconMap.star.name,
        type: iconMap.star.type ?? 'ion',
      }}
      label="Nivå"
    />
  </>
);

export default BlockSelector;
