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
        <Stack.Screen name="getstarted " />
        <Stack.Screen name="loginscreen" />
        <Stack.Screen name="registerscreen" />
        <Stack.Screen name="passwordscreen" />
        <Stack.Screen name="typepassword" />
        <Stack.Screen name="forgetpassword" />
        <Stack.Screen name="recoverpassword" />
        <Stack.Screen name="verficationscreen" />
        <Stack.Screen name="newpassword" />
        <Stack.Screen name="hellocard" />
        <Stack.Screen name="tab" />
        <Stack.Screen name="profilescreen" />
        <Stack.Screen name="flashscreen" />
        <Stack.Screen name="productscreen" />
        <Stack.Screen name="productshop" />
        <Stack.Screen name="shopscreen" />
        <Stack.Screen name="categoriesscreen" />
        <Stack.Screen name="product" />
        <Stack.Screen name="productdetails" />
        <Stack.Screen name="viewallreview" />
        <Stack.Screen name="wishlistscreen" />
        <Stack.Screen name="recentlyreview" />
        <Stack.Screen name="addcart2" />
        <Stack.Screen name="addcart1" />
        <Stack.Screen name="paymentmethod" />
        <Stack.Screen name="track_1" />
        <Stack.Screen name="track_2" />
        <Stack.Screen name="history" />
        <Stack.Screen name="settings" />
        <Stack.Screen name="vouchers" />
        <Stack.Screen name="progress" />
        <Stack.Screen name="profilesetting" />
        <Stack.Screen name="paymentsetting" />
        <Stack.Screen name="cardaddingsetting"/>
        <Stack.Screen name="addresssetting"/>

      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
