import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>

      <Stack
        initialRouteName="splashscreen"
        screenOptions={{ headerShown: false }}
      >
        
        <Stack.Screen name="splashscreen" />
        <Stack.Screen name="getstarted "/>
        <Stack.Screen name="loginscreen" />
        <Stack.Screen name="registerscreen" />
        <Stack.Screen name="passwordscreen"/>
        <Stack.Screen name="typepassword"/>
        <Stack.Screen name="forgetpassword"/>
        <Stack.Screen name="recoverpassword"/>
        <Stack.Screen name="verficationscreen"/>
        <Stack.Screen name="newpassword"/>
        <Stack.Screen name="hellocard"/>
        <Stack.Screen name="tab"/>

      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
