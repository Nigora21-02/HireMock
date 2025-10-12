
import React, { useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { CategorySelector, LanguageSelector, LevelSelector } from '../components/chip';
import Icon from '../components/icon/Icon';
import { iconMap } from '../components/icon/iconMap';
import Button, { ButtonText } from '../components/button';
import { ColorTokens, SizeTokens } from '../constants/tokens';


const categories = [
  { label: 'Soft Skills', value: 'soft' },
  { label: 'Algoritmer', value: 'algo' },
  { label: 'Systemdesign', value: 'system' },
];

const languages = [
  { label: 'Svenska', value: 'sv' },
  { label: 'Engelska', value: 'en' },
];

const levels = [
  { label: 'Junior', value: 'junior' },
  { label: 'Mid', value: 'mid' },
  { label: 'Senior', value: 'senior' },
];


export default function InterviewScreen() {
  const [category, setCategory] = useState(categories[0].value);
  const [language, setLanguage] = useState(languages[0].value);
  const [level, setLevel] = useState(levels[0].value);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Förbered AI-intervjun</Text>
        <Text style={styles.description}>
          Välj kategori, språk och nivå för att starta en AI-baserad intervju. Du kan ändra dina val när som helst.
        </Text>
        {/* Kategori */}
        <View style={{ backgroundColor: ColorTokens.gray[200], borderRadius: 8, paddingHorizontal: 16, marginBottom: 12,paddingTop: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8  }}>
            <Icon name={iconMap.grid.name} type={iconMap.grid.type} size="md" color="pink" />
            <Text style={styles.label}>Kategori</Text>
          </View>
          <CategorySelector
            categories={categories}
            selectedCategory={category}
            onSelect={setCategory}
          />
        </View>

        <View style={{ backgroundColor: ColorTokens.gray[200], borderRadius: 8, paddingHorizontal: 16, marginBottom: 12, paddingTop: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Icon name={iconMap.globe.name} type={iconMap.globe.type} size="md" color="pink" />
            <Text style={styles.label}>Språk</Text>
          </View>
          <LanguageSelector
            languages={languages}
            selectedLanguage={language}
            onSelect={setLanguage}
          />
        </View>

        <View style={{ backgroundColor: ColorTokens.gray[200], borderRadius: 8, paddingHorizontal: 16,paddingTop: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Icon name={iconMap.star.name} type={iconMap.star.type} size="md" color="pink" />
            <Text style={styles.label}>Nivå</Text>
          </View>
          <LevelSelector
            levels={levels}
            selectedLevel={level}
            onSelect={setLevel}
          />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          variant='primary'
          size='medium'
          onPress={() => alert('Starta intervju!')}
        >
          <ButtonText variant='primary'>Starta AI-intervju</ButtonText>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SizeTokens.spacing.md,
    gap: SizeTokens.spacing.lg,
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 15,
    color: ColorTokens.gray[600],
    textAlign: 'center',
    marginBottom: 18,
  },
  buttonWrapper: {
   marginBottom: 30,    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 4,
  },

});
