import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Button from '../components/Button';

export default function ProfileScreen() {
  const handleEditProfile = () => {
    Alert.alert('Redigera profil', 'Öppnar profilredigeraren');
  };

  const handleSettings = () => {
    Alert.alert('Inställningar', 'Öppnar inställningar');
  };

  const handleLogout = () => {
    Alert.alert('Logga ut', 'Är du säker på att du vill logga ut?', [
      { text: 'Avbryt', style: 'cancel' },
      { text: 'Logga ut', style: 'destructive' },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>
      <Text style={styles.subtitle}>Hantera din profil och inställningar</Text>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Redigera profil"
          onPress={handleEditProfile}
          variant="primary"
          size="large"
        />
        
        <Button
          title="Inställningar"
          onPress={handleSettings}
          variant="secondary"
          size="medium"
        />
        
        <Button
          title="Logga ut"
          onPress={handleLogout}
          variant="danger"
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