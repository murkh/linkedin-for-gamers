import { Stack } from 'expo-router';
import SettingsScreen from '@/src/screens/SettingsScreen';

export default function Settings() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Settings',
        }}
      />
      <SettingsScreen />
    </>
  );
} 