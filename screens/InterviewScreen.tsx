
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CategorySelector, LanguageSelector, LevelSelector } from '../components/chip';
import TimerSelector from '../components/timer/TimerSelector';
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
    const [timer, setTimer] = useState(3);

  return (
    <View style={styles.container}>
      <View>
        
      </View>
      <View>
        <Text style={styles.title}>Anpassa intervjun efter dig </Text>
        <Text style={styles.description}>Välj kategori, språk, nivå och timer</Text>
       
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

        <View style={{ backgroundColor: ColorTokens.gray[200], borderRadius: 8, paddingHorizontal: 16, paddingTop: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 }}>
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
        <TimerSelector timer={timer} onSelect={setTimer} />
    
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
    
  },
  description: {
    fontSize: 15,
    color: ColorTokens.gray[600],
    textAlign: 'center',
    marginBottom: 24,
  },
  buttonWrapper: {
   marginBottom: 30,    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 4,
  },

});
