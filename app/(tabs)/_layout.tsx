import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs, useRouter } from "expo-router";
import { Pressable, View, Text } from "react-native";
import { ErrorBoundary } from "react-error-boundary";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/src/theme";

// Error fallback component
const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    }}
  >
    <Text style={{ fontSize: 16, marginBottom: 10, textAlign: "center" }}>
      Something went wrong. Please try again.
    </Text>
    <Pressable
      onPress={resetErrorBoundary}
      style={{
        backgroundColor: colors.primary.main,
        padding: 10,
        borderRadius: 5,
      }}
    >
      <Text style={{ color: "white" }}>Try Again</Text>
    </Pressable>
  </View>
);

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const handleError = (error: Error) => {
    // Log error to your error tracking service
    console.error("Tab navigation error:", error);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.background.secondary,
            borderTopWidth: 1,
            borderTopColor: colors.border,
          },
          tabBarActiveTintColor: colors.primary.main,
          tabBarInactiveTintColor: colors.text.muted,
          headerStyle: {
            backgroundColor: colors.background.secondary,
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
          },
          headerTintColor: colors.text.primary,
          headerTitleStyle: {
            fontWeight: "600",
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "500",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" size={24} color={color} />
            ),
            headerRight: () => (
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? "light"].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </ErrorBoundary>
  );
}
