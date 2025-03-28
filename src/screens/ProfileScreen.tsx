import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { colors } from '@/src/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ProfileData {
  name: string;
  username: string;
  bio: string;
  avatar: string;
  stats: {
    games: number;
    followers: number;
    following: number;
  };
  recentGames: Array<{
    id: string;
    title: string;
    score: number;
    date: string;
  }>;
}

export default function ProfileScreen() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      setError(null);
      // TODO: Replace with actual API call
      const mockProfile: ProfileData = {
        name: 'John Doe',
        username: 'johndoe',
        bio: 'Gaming enthusiast | Game Developer',
        avatar: 'https://via.placeholder.com/150',
        stats: {
          games: 42,
          followers: 1234,
          following: 567,
        },
        recentGames: [
          {
            id: '1',
            title: 'Game of the Year',
            score: 950,
            date: '2024-03-28',
          },
          {
            id: '2',
            title: 'Epic Adventure',
            score: 850,
            date: '2024-03-27',
          },
        ],
      };
      setProfile(mockProfile);
    } catch (err) {
      setError('Failed to load profile data');
      console.error('Profile fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchProfile();
    setRefreshing(false);
  };

  if (loading && !refreshing) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading profile...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchProfile}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!profile) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No profile data available</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.header}>
        <Image source={{ uri: profile.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.username}>@{profile.username}</Text>
        <Text style={styles.bio}>{profile.bio}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{profile.stats.games}</Text>
          <Text style={styles.statLabel}>Games</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{profile.stats.followers}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{profile.stats.following}</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Games</Text>
        {profile.recentGames.map((game) => (
          <TouchableOpacity key={game.id} style={styles.gameItem}>
            <View style={styles.gameInfo}>
              <Text style={styles.gameTitle}>{game.title}</Text>
              <Text style={styles.gameDate}>{game.date}</Text>
            </View>
            <View style={styles.scoreContainer}>
              <MaterialCommunityIcons
                name="trophy"
                size={20}
                color={colors.accent.main}
              />
              <Text style={styles.score}>{game.score}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background.primary,
  },
  loadingText: {
    color: colors.text.primary,
    fontSize: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background.primary,
    padding: 20,
  },
  errorText: {
    color: colors.error,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: colors.primary.main,
    padding: 12,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  retryButtonText: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    color: colors.text.muted,
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: colors.text.muted,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 16,
  },
  gameItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.background.secondary,
    borderRadius: 8,
    marginBottom: 12,
  },
  gameInfo: {
    flex: 1,
  },
  gameTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 4,
  },
  gameDate: {
    fontSize: 14,
    color: colors.text.muted,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  score: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.accent.main,
    marginLeft: 8,
  },
}); 