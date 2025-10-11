import React from 'react';
import { View } from 'react-native';
import Chip from './Chip';
import { Option, OptionSelectorProps } from './types';

// Generic OptionSelector
export const OptionSelector: React.FC<OptionSelectorProps> = ({ options, selected, onSelect }) => (
  <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical: 8 }}>
    {options.map(option => (
      <Chip
        key={option.value}
        label={option.label}
        selected={selected === option.value}
        onPress={() => onSelect(option.value)}
      />
    ))}
  </View>
);

// CategorySelector
export const CategorySelector = ({ categories, selectedCategory, onSelect }: { categories: Option[]; selectedCategory: string; onSelect: (value: string) => void }) => (
  <OptionSelector options={categories} selected={selectedCategory} onSelect={onSelect} />
);

// LanguageSelector
export const LanguageSelector = ({ languages, selectedLanguage, onSelect }: { languages: Option[]; selectedLanguage: string; onSelect: (value: string) => void }) => (
  <OptionSelector options={languages} selected={selectedLanguage} onSelect={onSelect} />
);

// LevelSelector
export const LevelSelector = ({ levels, selectedLevel, onSelect }: { levels: Option[]; selectedLevel: string; onSelect: (value: string) => void }) => (
  <OptionSelector options={levels} selected={selectedLevel} onSelect={onSelect} />
);
