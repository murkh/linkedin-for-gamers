import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  TextInput,
  Button,
  Text,
  Portal,
  Dialog,
  List,
  IconButton,
} from 'react-native-paper';
import { colors, spacing, typography, borderRadius } from '../theme';

const CreatePostScreen = () => {
  const [content, setContent] = useState('');
  const [selectedGame, setSelectedGame] = useState('');
  const [isGameSelectorVisible, setIsGameSelectorVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Mock data - in a real app, this would come from an API or user's game library
  const availableGames = [
    { id: '1', name: 'Valorant' },
    { id: '2', name: 'CS:GO' },
    { id: '3', name: 'Apex Legends' },
    { id: '4', name: 'League of Legends' },
  ];

  const handlePost = () => {
    // In a real app, this would upload the image and create a post
    console.log('Creating post...', {
      content,
      selectedGame,
      selectedImage,
    });
  };

  const handleSelectImage = () => {
    // In a real app, this would open the image picker
    // For now, we'll just set a mock image
    setSelectedImage('https://picsum.photos/400/300');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Share your gaming moment..."
        value={content}
        onChangeText={setContent}
        multiline
        numberOfLines={4}
        style={styles.contentInput}
        placeholderTextColor={colors.text.muted}
        mode="outlined"
      />

      <Button
        mode="outlined"
        onPress={() => setIsGameSelectorVisible(true)}
        style={styles.gameButton}
        textColor={colors.text.primary}
        icon="gamepad-variant"
      >
        {selectedGame || 'Select Game'}
      </Button>

      {selectedImage ? (
        <View style={styles.imagePreviewContainer}>
          <Image
            source={{ uri: selectedImage }}
            style={styles.imagePreview}
            resizeMode="cover"
          />
          <IconButton
            icon="close-circle"
            size={24}
            iconColor={colors.error}
            style={styles.removeImageButton}
            onPress={() => setSelectedImage(null)}
          />
        </View>
      ) : (
        <Button
          mode="outlined"
          onPress={handleSelectImage}
          style={styles.imageButton}
          textColor={colors.text.primary}
          icon="image-plus"
        >
          Add Image
        </Button>
      )}

      <Button
        mode="contained"
        onPress={handlePost}
        style={styles.postButton}
        disabled={!content.trim() || !selectedGame}
      >
        Post
      </Button>

      <Portal>
        <Dialog
          visible={isGameSelectorVisible}
          onDismiss={() => setIsGameSelectorVisible(false)}
          style={styles.dialog}
        >
          <Dialog.Title style={styles.dialogTitle}>Select Game</Dialog.Title>
          <Dialog.Content>
            {availableGames.map((game) => (
              <List.Item
                key={game.id}
                title={game.name}
                onPress={() => {
                  setSelectedGame(game.name);
                  setIsGameSelectorVisible(false);
                }}
                titleStyle={[
                  styles.gameOption,
                  game.name === selectedGame && styles.selectedGameOption,
                ]}
                left={(props) => (
                  <List.Icon
                    {...props}
                    icon="gamepad-variant"
                    color={
                      game.name === selectedGame
                        ? colors.primary.main
                        : colors.text.secondary
                    }
                  />
                )}
              />
            ))}
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    padding: spacing.md,
  },
  contentInput: {
    backgroundColor: colors.background.secondary,
    marginBottom: spacing.md,
    color: colors.text.primary,
  },
  gameButton: {
    marginBottom: spacing.md,
    borderColor: colors.background.tertiary,
  },
  imageButton: {
    marginBottom: spacing.md,
    borderColor: colors.background.tertiary,
  },
  imagePreviewContainer: {
    marginBottom: spacing.md,
    position: 'relative',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: borderRadius.md,
  },
  removeImageButton: {
    position: 'absolute',
    top: -12,
    right: -12,
    backgroundColor: colors.background.primary,
  },
  postButton: {
    backgroundColor: colors.primary.main,
    marginTop: 'auto',
  },
  dialog: {
    backgroundColor: colors.background.secondary,
  },
  dialogTitle: {
    color: colors.text.primary,
    fontSize: typography.sizes.lg,
    fontWeight: '600',
  },
  gameOption: {
    color: colors.text.primary,
    fontSize: typography.sizes.md,
  },
  selectedGameOption: {
    color: colors.primary.main,
    fontWeight: '600',
  },
});

export default CreatePostScreen; 