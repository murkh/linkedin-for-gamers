import React, { Suspense } from "react";
import { StyleSheet, View, ActivityIndicator, Text, Pressable } from "react-native";
import { ErrorBoundary } from "react-error-boundary";
import ProfileScreen from "@/src/screens/ProfileScreen";
import { colors } from "@/src/theme";

// Loading component
const LoadingFallback = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color={colors.primary.main} />
  </View>
);

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>
      Something went wrong loading your profile. Please try again.
    </Text>
    <Pressable
      onPress={resetErrorBoundary}
      style={styles.retryButton}
    >
      <Text style={styles.retryButtonText}>Try Again</Text>
    </Pressable>
  </View>
);

export default function Profile() {
  return <ProfileScreen />;
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  errorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: colors.text.primary,
  },
  retryButton: {
    backgroundColor: colors.primary.main,
    padding: 12,
    borderRadius: 8,
    minWidth: 120,
    alignItems: "center",
  },
  retryButtonText: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: "600",
  },
});

