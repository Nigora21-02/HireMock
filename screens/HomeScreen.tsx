import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Button from '../components/Button';

export default function HomeScreen() {
  const handlePrimaryAction = () => {
    Alert.alert('Primär knapp', 'Du tryckte på den primära knappen!');
  };

  const handleSecondaryAction = () => {
    Alert.alert('Sekundär knapp', 'Du tryckte på den sekundära knappen!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hem</Text>
      <Text style={styles.subtitle}>Välkommen till HireMock!</Text>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Hitta jobb"
          onPress={handlePrimaryAction}
          variant="primary"
          size="large"
        />
        
        <Button
          title="Mitt CV"
          onPress={handleSecondaryAction}
          variant="outline"
          size="medium"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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