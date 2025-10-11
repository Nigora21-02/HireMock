
import React, { useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CategorySelector, LanguageSelector, LevelSelector } from '../components/chip';
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
        <View style={{ backgroundColor: ColorTokens.gray[200], borderRadius: 8, paddingHorizontal: 16, marginBottom: 12 }}>
          <Text style={styles.label}>Kategori</Text>
          <CategorySelector
            categories={categories}
            selectedCategory={category}
            onSelect={setCategory}
          />
        </View>

        <View style={{ backgroundColor: ColorTokens.gray[200], borderRadius: 8, paddingHorizontal: 16, marginBottom: 12 }}>
          <Text style={styles.label}>Språk</Text>
          <LanguageSelector
            languages={languages}
            selectedLanguage={language}
            onSelect={setLanguage}
          />
        </View>

        <View style={{ backgroundColor: ColorTokens.gray[200], borderRadius: 8, paddingHorizontal: 16 }}>
          <Text style={styles.label}>Nivå</Text>
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
