import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import {
  List,
  Switch,
  Divider,
  Text,
  Button,
  Portal,
  Dialog,
  TextInput,
} from 'react-native-paper';
import { colors, spacing, typography } from '../theme';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [showOnlineStatus, setShowOnlineStatus] = useState(true);
  const [showGameActivity, setShowGameActivity] = useState(true);
  const [isChangePasswordVisible, setIsChangePasswordVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    // In a real app, this would call an API to change the password
    console.log('Changing password...');
    setIsChangePasswordVisible(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <ScrollView style={styles.container}>
      <List.Section>
        <List.Subheader style={styles.sectionHeader}>
          Notifications
        </List.Subheader>
        <List.Item
          title="Push Notifications"
          description="Receive notifications about game invites and friend activity"
          titleStyle={styles.itemTitle}
          descriptionStyle={styles.itemDescription}
          right={() => (
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              color={colors.primary.main}
            />
          )}
        />
      </List.Section>

      <Divider style={styles.divider} />

      <List.Section>
        <List.Subheader style={styles.sectionHeader}>Privacy</List.Subheader>
        <List.Item
          title="Show Online Status"
          description="Let others see when you're online"
          titleStyle={styles.itemTitle}
          descriptionStyle={styles.itemDescription}
          right={() => (
            <Switch
              value={showOnlineStatus}
              onValueChange={setShowOnlineStatus}
              color={colors.primary.main}
            />
          )}
        />
        <List.Item
          title="Show Game Activity"
          description="Share your current game status with friends"
          titleStyle={styles.itemTitle}
          descriptionStyle={styles.itemDescription}
          right={() => (
            <Switch
              value={showGameActivity}
              onValueChange={setShowGameActivity}
              color={colors.primary.main}
            />
          )}
        />
      </List.Section>

      <Divider style={styles.divider} />

      <List.Section>
        <List.Subheader style={styles.sectionHeader}>Account</List.Subheader>
        <List.Item
          title="Change Password"
          titleStyle={styles.itemTitle}
          onPress={() => setIsChangePasswordVisible(true)}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
        <List.Item
          title="Delete Account"
          titleStyle={[styles.itemTitle, styles.dangerText]}
          onPress={() => {
            // In a real app, this would show a confirmation dialog
            console.log('Delete account pressed');
          }}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
      </List.Section>

      <Portal>
        <Dialog
          visible={isChangePasswordVisible}
          onDismiss={() => setIsChangePasswordVisible(false)}
          style={styles.dialog}
        >
          <Dialog.Title style={styles.dialogTitle}>Change Password</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Current Password"
              value={currentPassword}
              onChangeText={setCurrentPassword}
              secureTextEntry
              style={styles.input}
              mode="outlined"
            />
            <TextInput
              label="New Password"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
              style={styles.input}
              mode="outlined"
            />
            <TextInput
              label="Confirm New Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              style={styles.input}
              mode="outlined"
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => setIsChangePasswordVisible(false)}
              textColor={colors.text.primary}
            >
              Cancel
            </Button>
            <Button
              onPress={handleChangePassword}
              mode="contained"
              style={styles.saveButton}
            >
              Save
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  sectionHeader: {
    color: colors.primary.main,
    fontSize: typography.sizes.md,
    fontWeight: '600',
  },
  itemTitle: {
    color: colors.text.primary,
    fontSize: typography.sizes.md,
  },
  itemDescription: {
    color: colors.text.secondary,
    fontSize: typography.sizes.sm,
  },
  divider: {
    backgroundColor: colors.background.tertiary,
    height: 1,
    marginVertical: spacing.md,
  },
  dangerText: {
    color: colors.error,
  },
  dialog: {
    backgroundColor: colors.background.secondary,
  },
  dialogTitle: {
    color: colors.text.primary,
    fontSize: typography.sizes.lg,
    fontWeight: '600',
  },
  input: {
    marginBottom: spacing.md,
    backgroundColor: colors.background.primary,
  },
  saveButton: {
    backgroundColor: colors.primary.main,
  },
});

export default SettingsScreen; 