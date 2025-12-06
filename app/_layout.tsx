import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen 
          name="interview-session" 
          options={{
            headerShown: true,
            title: 'AI-Intervju',
            headerBackTitle: 'Tillbaka',
          }}
        />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
