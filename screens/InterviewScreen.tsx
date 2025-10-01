import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Button, { ButtonText } from '../components/button';
import { ColorTokens } from '../constants/tokens';

export default function InterviewScreen() {
  const handleStartInterview = () => {
    Alert.alert('AI Intervju', 'Startar AI-driven intervju...');
  };

  const handleSelectCategory = () => {
    Alert.alert('Kategori', 'Välj intervjukategori: Tech, Behavioral, Case Study');
  };

  const handleViewResults = () => {
    Alert.alert('Resultat', 'Visar dina intervjuresultat och AI-feedback');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Intervju</Text>
      <Text style={styles.subtitle}>Öva intervjuer med AI-assistent</Text>
      
      <View style={styles.buttonContainer}>
        <Button
          onPress={handleStartInterview}
          variant="primary"
          size="medium"
        >
         <ButtonText variant="primary" size="medium">🎥 Starta AI Intervju</ButtonText>
        </Button>
        
        <Button
          onPress={handleSelectCategory}
          variant="pink"
          size="medium"
        >
          <ButtonText variant="pink" size="medium">📋 Välj Kategori</ButtonText>
        </Button>
        
        <Button
          onPress={handleViewResults}
          variant="outline"
          size="medium"
        >
          <ButtonText variant="outline" size="medium">📊 Mina Resultat</ButtonText>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorTokens.blue[50],
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '80%',
    gap: 15,
  },
});