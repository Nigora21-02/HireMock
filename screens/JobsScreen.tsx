import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from '../components/button';

export default function JobsScreen() {
  const handleSearchJobs = () => {
    Alert.alert('Sök jobb', 'Söker efter lediga jobb...');
  };

  const handleFilterJobs = () => {
    Alert.alert('Filter', 'Öppnar filtreringsinställningar');
  };

  const handleSavedJobs = () => {
    Alert.alert('Sparade jobb', 'Visar dina sparade jobb');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobb</Text>
      <Text style={styles.subtitle}>Här hittar du alla jobbmöjligheter</Text>
      
      <View style={styles.buttonContainer}>
        <Button
          onPress={handleSearchJobs}
          variant="primary"
          size="large"
        >
          <Text>Sök jobb</Text>
        </Button>
        
        <Button
          onPress={handleFilterJobs}
          variant="secondary"
          size="medium"
        >
          <Text>Filter</Text>
        </Button>
        
        <Button
          onPress={handleSavedJobs}
          variant="outline"
          size="medium"
        >
          <Text>Sparade jobb</Text>
        </Button>
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