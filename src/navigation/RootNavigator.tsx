import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { colors } from "../theme";

import MainTabNavigator from "./MainTabNavigator";
// Import other screens (we'll create these next)
// import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SearchScreen from "../screens/SearchScreen";
import GameDetailsScreen from "../screens/GameDetailsScreen";
// import PostDetailsScreen from "../screens/PostDetailsScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background.secondary,
          },
          headerTintColor: colors.text.primary,
          headerTitleStyle: {
            fontWeight: "600",
          },
          contentStyle: {
            backgroundColor: colors.background.primary,
          },
        }}
      >
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="GameDetails" component={GameDetailsScreen} />
        {/* <Stack.Screen name="PostDetails" component={PostDetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
