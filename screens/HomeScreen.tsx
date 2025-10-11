import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Button, { ButtonText } from '../components/button';
import { ColorTokens } from '../constants/tokens';
import InputField from '../components/input/InputField';
import ProgressBar from '../components/progressBar/ProgressBar';
import Loader from '../components/loader/Loader';

export default function HomeScreen() {

  const handlePrimaryAction = () => {
    Alert.alert('Primär knapp', 'Du tryckte på den primära knappen!');
  };

  const handleSecondaryAction = () => {
    Alert.alert('Sekundär knapp', 'Du tryckte på den sekundära knappen!');
  };

  const [progress, setProgress] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hem</Text>
      <Text style={styles.subtitle}>Välkommen till HireMock!</Text>
      <View style={styles.buttonContainer}>
        <Button
          onPress={handlePrimaryAction}
          variant="primary"
          size="medium"
        >
          <ButtonText variant="primary" size="medium">Starta intervju</ButtonText>
        </Button>
        <Button
          onPress={handleSecondaryAction}
          variant="pink"
          size="medium"
        >
          <ButtonText variant="pink" size="medium">Mitt CV</ButtonText>
        </Button>

        <View style={{ gap: 15, marginTop: 20 }}>
          <Loader size="md" />
          <ProgressBar progress={progress} />
          <Button
            onPress={() => setProgress(p => (p >= 100 ? 0 : Math.min(100, p + 10)))}
            variant="outline"
            size="medium"
          >
            <ButtonText variant="outline" size="medium">Increase Progress</ButtonText>
          </Button>
        </View>
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