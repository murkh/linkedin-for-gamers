import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Avatar, Card, List } from 'react-native-paper';
import { colors, spacing, typography } from '../../src/theme';

export default function ProfileScreen() {
  const userProfile = {
    username: 'ProGamer123',
    avatar: 'https://ui-avatars.com/api/?name=Pro+Gamer',
    stats: {
      followers: '1.2K',
      following: '850',
      posts: '45',
    },
    games: [
      {
        name: 'Valorant',
        rank: 'Diamond II',
        hoursPlayed: '320',
      },
      {
        name: 'CS:GO',
        rank: 'Global Elite',
        hoursPlayed: '580',
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image
          size={100}
          source={{ uri: userProfile.avatar }}
          style={styles.avatar}
        />
        <Text style={styles.username}>{userProfile.username}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{userProfile.stats.followers}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{userProfile.stats.following}</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{userProfile.stats.posts}</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
      </View>

      <Card style={styles.gamesCard}>
        <Card.Title title="My Games" titleStyle={styles.cardTitle} />
        <Card.Content>
          {userProfile.games.map((game) => (
            <List.Item
              key={game.name}
              title={game.name}
              description={`${game.rank} • ${game.hoursPlayed} hours played`}
              left={(props) => (
                <List.Icon {...props} icon="gamepad-variant" />
              )}
              titleStyle={styles.gameTitle}
              descriptionStyle={styles.gameDescription}
            />
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  header: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
    backgroundColor: colors.background.secondary,
  },
  avatar: {
    marginBottom: spacing.md,
  },
  username: {
    fontSize: typography.sizes.xl,
    fontWeight: '700',
    color: colors.text.primary,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: spacing.lg,
    backgroundColor: colors.background.secondary,
    marginBottom: spacing.md,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: typography.sizes.lg,
    fontWeight: '700',
    color: colors.primary.main,
    marginBottom: spacing.xs,
  },
  statLabel: {
    fontSize: typography.sizes.sm,
    color: colors.text.secondary,
  },
  gamesCard: {
    marginHorizontal: spacing.md,
    backgroundColor: colors.background.secondary,
  },
  cardTitle: {
    color: colors.text.primary,
    fontSize: typography.sizes.lg,
    fontWeight: '600',
  },
  gameTitle: {
    color: colors.text.primary,
    fontSize: typography.sizes.md,
  },
  gameDescription: {
    color: colors.text.secondary,
    fontSize: typography.sizes.sm,
  },
}); 