import { Stack } from "expo-router";
import { SearchScreen } from "@/src/screens/SearchScreen";

export default function Search() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Search",
        }}
      />
      <SearchScreen />
    </>
  );
}
