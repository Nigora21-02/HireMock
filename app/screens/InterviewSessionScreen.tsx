import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Button, { ButtonText } from '../../components/button';
import { ColorTokens, SizeTokens } from '../../constants/tokens';

export default function InterviewSessionScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  
  const category = params.category as string;
  const language = params.language as string;
  const level = params.level as string;
  const timer = parseInt(params.timer as string);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AI-Intervju</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>Kategori: {category}</Text>
          <Text style={styles.infoText}>Nivå: {level}</Text>
          <Text style={styles.infoText}>Språk: {language}</Text>
          <Text style={styles.infoText}>Timer: {timer} min</Text>
        </View>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.placeholderText}>
          Intervju session kommer här...
        </Text>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          variant="outline"
          size="medium"
          onPress={() => router.back()}
        >
          <ButtonText variant="outline">Tillbaka</ButtonText>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorTokens.white,
  },
  header: {
    padding: SizeTokens.spacing.lg,
    backgroundColor: ColorTokens.blue[50],
    borderBottomWidth: 1,
    borderBottomColor: ColorTokens.gray[200],
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: SizeTokens.spacing.md,
    color: ColorTokens.blue[800],
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: SizeTokens.spacing.sm,
  },
  infoText: {
    fontSize: 14,
    color: ColorTokens.gray[700],
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: SizeTokens.spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  placeholderText: {
    fontSize: 18,
    color: ColorTokens.gray[500],
    textAlign: 'center',
  },
  footer: {
    padding: SizeTokens.spacing.lg,
    borderTopWidth: 1,
    borderTopColor: ColorTokens.gray[200],
    backgroundColor: ColorTokens.white,
  },
});
