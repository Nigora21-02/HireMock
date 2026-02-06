import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Button from '../../components/button';
import { ColorTokens } from '../../constants/tokens';
import ProgressBar from '../../components/progressBar/ProgressBar';

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
          variant="primary"
          onPress={handlePrimaryAction}
        >
          Ta nästa steg mot drömjobbet!
        </Button>

        <Button
          variant="secondary"
          iconPosition='left'
          icon='home'
          onPress={handleSecondaryAction}>Mitt CV</Button>




        <View style={{ gap: 15, marginTop: 20 }}>
          <ProgressBar progress={progress} />
          <Button variant="outline" onPress={() => setProgress(prev => Math.min(prev + 0.1, 1))}>
            Ta nästa steg mot drömjobbet!
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
