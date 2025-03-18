import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { List, Avatar, Text, IconButton } from 'react-native-paper';
import { colors, spacing, typography } from '../theme';

interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'achievement';
  user?: {
    username: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  read: boolean;
}

const NotificationsScreen = () => {
  // Mock data - in a real app, this would come from an API
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'like',
      user: {
        username: 'ProGamer123',
        avatar: 'https://ui-avatars.com/api/?name=Pro+Gamer',
      },
      content: 'liked your post about your Valorant ace',
      timestamp: '2h ago',
      read: false,
    },
    {
      id: '2',
      type: 'achievement',
      content: 'You reached Diamond rank in CS:GO! 🎮',
      timestamp: '5h ago',
      read: true,
    },
    {
      id: '3',
      type: 'comment',
      user: {
        username: 'GameMaster',
        avatar: 'https://ui-avatars.com/api/?name=Game+Master',
      },
      content: 'commented on your post: "Amazing play!"',
      timestamp: '1d ago',
      read: true,
    },
    {
      id: '4',
      type: 'follow',
      user: {
        username: 'TacticalPro',
        avatar: 'https://ui-avatars.com/api/?name=Tactical+Pro',
      },
      content: 'started following you',
      timestamp: '2d ago',
      read: true,
    },
  ];

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'like':
        return 'heart';
      case 'comment':
        return 'comment';
      case 'follow':
        return 'account-plus';
      case 'achievement':
        return 'trophy';
      default:
        return 'bell';
    }
  };

  const getNotificationColor = (type: Notification['type']) => {
    switch (type) {
      case 'like':
        return colors.error;
      case 'comment':
        return colors.primary.main;
      case 'follow':
        return colors.secondary.main;
      case 'achievement':
        return colors.accent.main;
      default:
        return colors.text.primary;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {notifications.map((notification) => (
        <List.Item
          key={notification.id}
          style={[
            styles.notificationItem,
            !notification.read && styles.unreadNotification,
          ]}
          left={() =>
            notification.user ? (
              <Avatar.Image
                source={{ uri: notification.user.avatar }}
                size={48}
                style={styles.avatar}
              />
            ) : (
              <IconButton
                icon={getNotificationIcon(notification.type)}
                iconColor={getNotificationColor(notification.type)}
                size={24}
                style={styles.iconButton}
              />
            )
          }
          title={
            <View style={styles.contentContainer}>
              <Text style={styles.content}>
                {notification.user && (
                  <Text style={styles.username}>
                    {notification.user.username}{' '}
                  </Text>
                )}
                {notification.content}
              </Text>
              <Text style={styles.timestamp}>{notification.timestamp}</Text>
            </View>
          }
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  notificationItem: {
    backgroundColor: colors.background.secondary,
    marginBottom: 1,
    paddingVertical: spacing.sm,
  },
  unreadNotification: {
    backgroundColor: colors.background.tertiary,
  },
  avatar: {
    marginHorizontal: spacing.md,
  },
  iconButton: {
    margin: spacing.md,
    backgroundColor: colors.background.tertiary,
  },
  contentContainer: {
    flex: 1,
    marginRight: spacing.md,
  },
  content: {
    color: colors.text.primary,
    fontSize: typography.sizes.md,
    marginBottom: spacing.xs,
  },
  username: {
    fontWeight: '600',
  },
  timestamp: {
    color: colors.text.muted,
    fontSize: typography.sizes.sm,
  },
});

export default NotificationsScreen; 