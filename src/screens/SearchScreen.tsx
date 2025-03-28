import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { mockUsers, User } from '../data/mockUsers';
import { colors, spacing, typography, shadows } from '../theme';

export const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>(mockUsers);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredUsers(mockUsers);
      return;
    }

    const filtered = mockUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.gamingUsername.toLowerCase().includes(query.toLowerCase()) ||
        user.bio.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const renderUserItem = ({ item }: { item: User }) => (
    <TouchableOpacity style={styles.userCard}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.username}>@{item.gamingUsername}</Text>
        <Text style={styles.bio} numberOfLines={2}>
          {item.bio}
        </Text>
        <View style={styles.stats}>
          <Text style={styles.statText}>{item.followers} followers</Text>
          <Text style={styles.statText}>{item.following} following</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={24} color={colors.text.muted} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search users..."
          placeholderTextColor={colors.text.muted}
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={filteredUsers}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    backgroundColor: colors.background.secondary,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  searchIcon: {
    marginRight: spacing.sm,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: typography.sizes.md,
    color: colors.text.primary,
  },
  listContainer: {
    padding: spacing.md,
  },
  userCard: {
    flexDirection: 'row',
    padding: spacing.md,
    backgroundColor: colors.background.secondary,
    borderRadius: 12,
    marginBottom: spacing.md,
    ...shadows.md,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: spacing.md,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: typography.sizes.lg,
    fontWeight: '700' as const,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },
  username: {
    fontSize: typography.sizes.sm,
    color: colors.text.muted,
    marginBottom: spacing.xs,
  },
  bio: {
    fontSize: typography.sizes.sm,
    color: colors.text.secondary,
    marginBottom: spacing.sm,
  },
  stats: {
    flexDirection: 'row',
  },
  statText: {
    fontSize: typography.sizes.xs,
    color: colors.text.muted,
    marginRight: spacing.md,
  },
}); 