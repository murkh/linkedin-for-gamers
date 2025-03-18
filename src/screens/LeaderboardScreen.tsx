import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Avatar, Chip, SegmentedButtons } from 'react-native-paper';
import { colors, spacing, typography } from '../theme';

type GameType = 'valorant' | 'csgo' | 'apex';

interface Player {
  id: string;
  rank: number;
  username: string;
  avatar: string;
  rating: number;
  winRate: string;
}

interface LeaderboardData {
  valorant: Player[];
  csgo: Player[];
  apex: Player[];
}

const LeaderboardScreen = () => {
  const [selectedGame, setSelectedGame] = useState<GameType>('valorant');

  // Mock data - in a real app, this would come from an API
  const games = [
    { value: 'valorant' as GameType, label: 'Valorant' },
    { value: 'csgo' as GameType, label: 'CS:GO' },
    { value: 'apex' as GameType, label: 'Apex Legends' },
  ];

  const leaderboardData: LeaderboardData = {
    valorant: [
      {
        id: '1',
        rank: 1,
        username: 'ProGamer123',
        avatar: 'https://ui-avatars.com/api/?name=Pro+Gamer',
        rating: 2450,
        winRate: '72%',
      },
      {
        id: '2',
        rank: 2,
        username: 'AimMaster',
        avatar: 'https://ui-avatars.com/api/?name=Aim+Master',
        rating: 2380,
        winRate: '68%',
      },
      {
        id: '3',
        rank: 3,
        username: 'TacticalPro',
        avatar: 'https://ui-avatars.com/api/?name=Tactical+Pro',
        rating: 2310,
        winRate: '65%',
      },
    ],
    csgo: [
      // Similar structure for CS:GO rankings
    ],
    apex: [
      // Similar structure for Apex Legends rankings
    ],
  };

  const handleGameChange = (value: string) => {
    setSelectedGame(value as GameType);
  };

  return (
    <View style={styles.container}>
      <SegmentedButtons
        value={selectedGame}
        onValueChange={handleGameChange}
        buttons={games.map((game) => ({
          value: game.value,
          label: game.label,
        }))}
        style={styles.gameSelector}
      />

      <ScrollView>
        {leaderboardData[selectedGame]?.map((player) => (
          <Card key={player.id} style={styles.playerCard}>
            <View style={styles.playerInfo}>
              <Text style={styles.rankNumber}>#{player.rank}</Text>
              <Avatar.Image
                size={48}
                source={{ uri: player.avatar }}
                style={styles.avatar}
              />
              <View style={styles.playerDetails}>
                <Text style={styles.username}>{player.username}</Text>
                <View style={styles.statsContainer}>
                  <Chip
                    style={[styles.statChip, styles.ratingChip]}
                    textStyle={styles.statText}
                  >
                    {player.rating} MMR
                  </Chip>
                  <Chip
                    style={[styles.statChip, styles.winRateChip]}
                    textStyle={styles.statText}
                  >
                    {player.winRate} WR
                  </Chip>
                </View>
              </View>
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    padding: spacing.md,
  },
  gameSelector: {
    marginBottom: spacing.lg,
    backgroundColor: colors.background.secondary,
  },
  playerCard: {
    marginBottom: spacing.md,
    backgroundColor: colors.background.secondary,
    elevation: 2,
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
  },
  rankNumber: {
    color: colors.primary.main,
    fontSize: typography.sizes.xl,
    fontWeight: '700',
    width: 50,
  },
  avatar: {
    marginRight: spacing.md,
  },
  playerDetails: {
    flex: 1,
  },
  username: {
    color: colors.text.primary,
    fontSize: typography.sizes.md,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  statChip: {
    height: 24,
  },
  ratingChip: {
    backgroundColor: colors.primary.dark,
  },
  winRateChip: {
    backgroundColor: colors.secondary.dark,
  },
  statText: {
    color: colors.text.primary,
    fontSize: typography.sizes.xs,
  },
});

export default LeaderboardScreen; 