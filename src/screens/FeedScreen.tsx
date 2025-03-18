import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Avatar, IconButton } from 'react-native-paper';
import { colors, spacing, typography } from '../theme';

const FeedScreen = () => {
  // Mock data - in a real app, this would come from an API
  const posts = [
    {
      id: '1',
      user: {
        username: 'ProGamer123',
        avatar: 'https://ui-avatars.com/api/?name=Pro+Gamer',
      },
      game: 'Valorant',
      content: 'Just hit Radiant rank! Check out this ace clutch! 🎮',
      image: 'https://picsum.photos/400/300',
      likes: 245,
      comments: 23,
      timestamp: '2h ago',
    },
    {
      id: '2',
      user: {
        username: 'GameMaster',
        avatar: 'https://ui-avatars.com/api/?name=Game+Master',
      },
      game: 'CS:GO',
      content: 'New personal best! 40 kills in competitive 🔥',
      image: 'https://picsum.photos/400/300',
      likes: 189,
      comments: 15,
      timestamp: '4h ago',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {posts.map((post) => (
        <Card key={post.id} style={styles.postCard}>
          <Card.Title
            title={post.user.username}
            subtitle={post.game}
            left={(props) => (
              <Avatar.Image {...props} source={{ uri: post.user.avatar }} />
            )}
            titleStyle={styles.postUsername}
            subtitleStyle={styles.postGame}
          />
          <Card.Content>
            <Text style={styles.postContent}>{post.content}</Text>
          </Card.Content>
          <Card.Cover source={{ uri: post.image }} style={styles.postImage} />
          <Card.Actions style={styles.postActions}>
            <View style={styles.actionGroup}>
              <IconButton
                icon="heart-outline"
                iconColor={colors.text.primary}
                size={24}
              />
              <Text style={styles.actionText}>{post.likes}</Text>
            </View>
            <View style={styles.actionGroup}>
              <IconButton
                icon="comment-outline"
                iconColor={colors.text.primary}
                size={24}
              />
              <Text style={styles.actionText}>{post.comments}</Text>
            </View>
            <View style={styles.timestamp}>
              <Text style={styles.timestampText}>{post.timestamp}</Text>
            </View>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  postCard: {
    marginHorizontal: spacing.md,
    marginVertical: spacing.sm,
    backgroundColor: colors.background.secondary,
  },
  postUsername: {
    color: colors.text.primary,
    fontSize: typography.sizes.md,
    fontWeight: '600',
  },
  postGame: {
    color: colors.text.secondary,
    fontSize: typography.sizes.sm,
  },
  postContent: {
    color: colors.text.primary,
    fontSize: typography.sizes.md,
    marginBottom: spacing.sm,
  },
  postImage: {
    marginTop: spacing.sm,
  },
  postActions: {
    justifyContent: 'flex-start',
    paddingHorizontal: spacing.sm,
  },
  actionGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacing.lg,
  },
  actionText: {
    color: colors.text.primary,
    fontSize: typography.sizes.sm,
  },
  timestamp: {
    flex: 1,
    alignItems: 'flex-end',
  },
  timestampText: {
    color: colors.text.muted,
    fontSize: typography.sizes.sm,
  },
});

export default FeedScreen; 