import { Stack } from 'expo-router';
import GameDetailsScreen from '@/src/screens/GameDetailsScreen';
import { useLocalSearchParams } from 'expo-router';

export default function GameDetails() {
  const { gameId } = useLocalSearchParams<{ gameId: string }>();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Game Details',
        }}
      />
      <GameDetailsScreen gameId={gameId} />
    </>
  );
} 