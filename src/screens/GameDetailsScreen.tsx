import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Text, Card, Button, Chip, List } from 'react-native-paper';
import { colors, spacing, typography, borderRadius } from '../theme';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

type GameDetailsScreenRouteProp = RouteProp<RootStackParamList, 'GameDetails'>;

interface GameDetailsScreenProps {
  route: GameDetailsScreenRouteProp;
}

const GameDetailsScreen: React.FC<GameDetailsScreenProps> = ({ route }) => {
  // Mock data - in a real app, this would come from an API based on route.params.gameId
  const gameDetails = {
    id: '1',
    name: 'Valorant',
    description:
      'A 5v5 character-based tactical shooter where precise gunplay meets unique agent abilities.',
    genre: ['Tactical Shooter', 'FPS'],
    playerCount: '10 players',
    averageMatchTime: '30-40 minutes',
    ranks: [
      'Iron',
      'Bronze',
      'Silver',
      'Gold',
      'Platinum',
      'Diamond',
      'Ascendant',
      'Immortal',
      'Radiant',
    ],
    stats: {
      totalPlayers: '23M+',
      averageRating: 4.5,
      monthlyTournaments: 150,
    },
    topPlayers: [
      {
        username: 'ProGamer123',
        rank: 'Radiant',
        winRate: '72%',
      },
      {
        username: 'AimMaster',
        rank: 'Immortal',
        winRate: '68%',
      },
      {
        username: 'TacticalPro',
        rank: 'Immortal',
        winRate: '65%',
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.headerCard}>
        <Card.Cover
          source={{ uri: 'https://picsum.photos/800/400' }}
          style={styles.coverImage}
        />
        <Card.Content style={styles.headerContent}>
          <Text style={styles.title}>{gameDetails.name}</Text>
          <View style={styles.genreContainer}>
            {gameDetails.genre.map((genre) => (
              <Chip
                key={genre}
                style={styles.genreChip}
                textStyle={styles.genreText}
              >
                {genre}
              </Chip>
            ))}
          </View>
          <Text style={styles.description}>{gameDetails.description}</Text>
        </Card.Content>
      </Card>

      <Card style={styles.statsCard}>
        <Card.Content>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{gameDetails.stats.totalPlayers}</Text>
              <Text style={styles.statLabel}>Active Players</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{gameDetails.stats.averageRating}</Text>
              <Text style={styles.statLabel}>Average Rating</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>
                {gameDetails.stats.monthlyTournaments}
              </Text>
              <Text style={styles.statLabel}>Monthly Tournaments</Text>
            </View>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.infoCard}>
        <Card.Content>
          <List.Item
            title="Player Count"
            description={gameDetails.playerCount}
            left={(props) => <List.Icon {...props} icon="account-group" />}
          />
          <List.Item
            title="Average Match Time"
            description={gameDetails.averageMatchTime}
            left={(props) => <List.Icon {...props} icon="clock-outline" />}
          />
        </Card.Content>
      </Card>

      <Card style={styles.ranksCard}>
        <Card.Title title="Competitive Ranks" />
        <Card.Content>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.ranksContainer}>
              {gameDetails.ranks.map((rank, index) => (
                <Chip
                  key={rank}
                  style={[
                    styles.rankChip,
                    { backgroundColor: getRankColor(index, gameDetails.ranks.length) },
                  ]}
                  textStyle={styles.rankText}
                >
                  {rank}
                </Chip>
              ))}
            </View>
          </ScrollView>
        </Card.Content>
      </Card>

      <Card style={styles.playersCard}>
        <Card.Title title="Top Players" />
        <Card.Content>
          {gameDetails.topPlayers.map((player, index) => (
            <List.Item
              key={player.username}
              title={player.username}
              description={`${player.rank} • ${player.winRate} Win Rate`}
              left={(props) => (
                <Text style={styles.rankingNumber}>#{index + 1}</Text>
              )}
              titleStyle={styles.playerName}
              descriptionStyle={styles.playerStats}
            />
          ))}
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        style={styles.playButton}
        labelStyle={styles.playButtonLabel}
        icon="gamepad-variant"
      >
        Launch Game
      </Button>
    </ScrollView>
  );
};

const getRankColor = (index: number, total: number) => {
  const hue = (index / total) * 360;
  return `hsl(${hue}, 70%, 50%)`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  headerCard: {
    backgroundColor: colors.background.secondary,
    marginBottom: spacing.md,
  },
  coverImage: {
    height: 200,
  },
  headerContent: {
    paddingVertical: spacing.md,
  },
  title: {
    fontSize: typography.sizes.xxl,
    fontWeight: '700',
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginBottom: spacing.md,
  },
  genreChip: {
    backgroundColor: colors.primary.dark,
  },
  genreText: {
    color: colors.text.primary,
  },
  description: {
    fontSize: typography.sizes.md,
    color: colors.text.secondary,
    lineHeight: 24,
  },
  statsCard: {
    backgroundColor: colors.background.secondary,
    marginBottom: spacing.md,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: spacing.md,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: typography.sizes.xl,
    fontWeight: '700',
    color: colors.primary.main,
    marginBottom: spacing.xs,
  },
  statLabel: {
    fontSize: typography.sizes.sm,
    color: colors.text.secondary,
  },
  infoCard: {
    backgroundColor: colors.background.secondary,
    marginBottom: spacing.md,
  },
  ranksCard: {
    backgroundColor: colors.background.secondary,
    marginBottom: spacing.md,
  },
  ranksContainer: {
    flexDirection: 'row',
    gap: spacing.sm,
    paddingVertical: spacing.sm,
  },
  rankChip: {
    marginRight: spacing.xs,
  },
  rankText: {
    color: colors.text.primary,
    fontWeight: '600',
  },
  playersCard: {
    backgroundColor: colors.background.secondary,
    marginBottom: spacing.xl,
  },
  rankingNumber: {
    fontSize: typography.sizes.lg,
    fontWeight: '700',
    color: colors.primary.main,
    width: 40,
    textAlign: 'center',
  },
  playerName: {
    color: colors.text.primary,
    fontSize: typography.sizes.md,
    fontWeight: '600',
  },
  playerStats: {
    color: colors.text.secondary,
    fontSize: typography.sizes.sm,
  },
  playButton: {
    margin: spacing.md,
    marginBottom: spacing.xl,
    paddingVertical: spacing.sm,
    backgroundColor: colors.primary.main,
  },
  playButtonLabel: {
    fontSize: typography.sizes.md,
    fontWeight: '600',
  },
});

export default GameDetailsScreen; 