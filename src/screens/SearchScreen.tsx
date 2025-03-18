import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Searchbar, Card, Avatar, Text, Chip } from 'react-native-paper';
import { colors, spacing, typography } from '../theme';

interface GamePreference {
  game: string;
  rank: string;
}

interface User {
  id: string;
  username: string;
  avatar: string;
  region: string;
  gamePreferences: GamePreference[];
}

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - in a real app, this would come from an API
  const users: User[] = [
    {
      id: '1',
      username: 'ProGamer123',
      avatar: 'https://ui-avatars.com/api/?name=Pro+Gamer',
      region: 'NA',
      gamePreferences: [
        { game: 'Valorant', rank: 'Diamond II' },
        { game: 'CS:GO', rank: 'Global Elite' },
      ],
    },
    {
      id: '2',
      username: 'AimMaster',
      avatar: 'https://ui-avatars.com/api/?name=Aim+Master',
      region: 'EU',
      gamePreferences: [
        { game: 'Valorant', rank: 'Immortal' },
        { game: 'Apex Legends', rank: 'Master' },
      ],
    },
  ];

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search gamers..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchBar}
        iconColor={colors.text.primary}
        inputStyle={styles.searchInput}
        placeholderTextColor={colors.text.muted}
      />

      <ScrollView style={styles.results}>
        {filteredUsers.map((user) => (
          <Card key={user.id} style={styles.userCard}>
            <Card.Content style={styles.cardContent}>
              <View style={styles.userInfo}>
                <Avatar.Image
                  size={60}
                  source={{ uri: user.avatar }}
                  style={styles.avatar}
                />
                <View style={styles.userDetails}>
                  <Text style={styles.username}>{user.username}</Text>
                  <Chip style={styles.regionChip} textStyle={styles.regionText}>
                    {user.region}
                  </Chip>
                </View>
              </View>

              <View style={styles.gamePreferences}>
                {user.gamePreferences.map((pref, index) => (
                  <View key={index} style={styles.gamePreference}>
                    <Text style={styles.gameName}>{pref.game}</Text>
                    <Text style={styles.gameRank}>{pref.rank}</Text>
                  </View>
                ))}
              </View>
            </Card.Content>
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
  searchBar: {
    backgroundColor: colors.background.secondary,
    marginBottom: spacing.lg,
    elevation: 0,
  },
  searchInput: {
    color: colors.text.primary,
  },
  results: {
    flex: 1,
  },
  userCard: {
    marginBottom: spacing.md,
    backgroundColor: colors.background.secondary,
  },
  cardContent: {
    padding: spacing.md,
  },
  userInfo: {
    flexDirection: 'row',
    marginBottom: spacing.md,
  },
  avatar: {
    marginRight: spacing.md,
  },
  userDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  username: {
    color: colors.text.primary,
    fontSize: typography.sizes.lg,
    fontWeight: '600',
    marginBottom: spacing.xs,
  },
  regionChip: {
    backgroundColor: colors.primary.dark,
    alignSelf: 'flex-start',
  },
  regionText: {
    color: colors.text.primary,
    fontSize: typography.sizes.xs,
  },
  gamePreferences: {
    gap: spacing.sm,
  },
  gamePreference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: colors.background.tertiary,
  },
  gameName: {
    color: colors.text.primary,
    fontSize: typography.sizes.md,
  },
  gameRank: {
    color: colors.text.secondary,
    fontSize: typography.sizes.sm,
  },
});

export default SearchScreen; 