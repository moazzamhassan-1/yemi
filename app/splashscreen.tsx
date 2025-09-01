import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { router } from "expo-router";

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.navigate("/loginscreen"); // 👈 change to "SignUp" if you want
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🚀 MyApp</Text>
      <ActivityIndicator size="large" color="#4CAF50" />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // white background
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#4CAF50", // green accent
  },
});
