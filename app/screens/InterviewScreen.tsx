import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import BlockSelector from '../../components/blockSelector/BlockSelector';
import TimerSelector from '../../components/timerSelector/TimerSelector';
import Button from '../../components/button';
import { ColorTokens, SizeTokens } from '../../constants/tokens';


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
  const router = useRouter();
  const [category, setCategory] = useState(categories[0].value);
  const [language, setLanguage] = useState(languages[0].value);
  const [level, setLevel] = useState(levels[0].value);
  const [timer, setTimer] = useState(3);

  const handleStartInterview = () => {
    router.push({
      pathname: '/screens/InterviewSessionScreen',
      params: {
        category,
        language,
        level,
        timer: timer.toString(),
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Anpassa intervjun efter dig</Text>
      <Text style={styles.description}>Välj kategori, språk, nivå och timer</Text>
      <View style={styles.formWrapper}>
        <BlockSelector
          category={category}
          setCategory={setCategory}
          categories={categories}
          language={language}
          setLanguage={setLanguage}
          languages={languages}
          level={level}
          setLevel={setLevel}
          levels={levels}
        />
        <TimerSelector timer={timer} onSelect={setTimer} />
        <View style={styles.buttonWrapper}>
          <Button
            variant='primary'
            size='medium'
            fullWidth={false}
            onPress={handleStartInterview}
          >
            Starta AI-intervju
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SizeTokens.spacing.md,
    gap: SizeTokens.spacing.md,
  },
  formWrapper: {
    gap: 6,
  },
  description: {
    fontSize: 15,
    color: ColorTokens.gray[600],
    textAlign: 'center',
    marginBottom: SizeTokens.spacing.md,
  },
  buttonWrapper: {
    marginTop: SizeTokens.spacing.xl,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  label: {
    fontWeight: '600',
    marginBottom: 4,
  },

});
