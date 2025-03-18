import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text, Card, Avatar } from "react-native-paper";
import { colors, spacing, typography } from "../../src/theme";

export default function HomeScreen() {
  const posts = [
    {
      id: "1",
      user: {
        username: "ProGamer123",
        avatar: "https://ui-avatars.com/api/?name=Pro+Gamer",
      },
      content: "Just hit a new high score! 🎮",
      timestamp: "2h ago",
    },
    {
      id: "2",
      user: {
        username: "GameMaster",
        avatar: "https://ui-avatars.com/api/?name=Game+Master",
      },
      content: "Looking for teammates for tonight\'s tournament! 🏆",
      timestamp: "4h ago",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {posts.map((post) => (
        <Card key={post.id} style={styles.postCard}>
          <Card.Title
            title={post.user.username}
            subtitle={post.timestamp}
            left={(props) => (
              <Avatar.Image {...props} source={{ uri: post.user.avatar }} />
            )}
            titleStyle={styles.username}
            subtitleStyle={styles.timestamp}
          />
          <Card.Content>
            <Text style={styles.content}>{post.content}</Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

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
  username: {
    color: colors.text.primary,
    fontSize: typography.sizes.md,
    fontWeight: "600",
  },
  timestamp: {
    color: colors.text.muted,
    fontSize: typography.sizes.sm,
  },
  content: {
    color: colors.text.primary,
    fontSize: typography.sizes.md,
    marginBottom: spacing.sm,
  },
});
