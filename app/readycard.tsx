import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const readycard = () => {
  return (
    <View style={styles.container}>
      {/* Top Shape */}
      <View style={styles.topShape}></View>

      {/* Card */}
      <View style={styles.card}>
        <Image
          source={require("../assets/images/readycard.png")}
          style={styles.image}
          contentFit="cover"
        />

        <View style={styles.textBox}>
          <Text style={styles.title}>Ready</Text>
          <Text style={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
      </View>

      {/* Dots Indicator */}
      <View style={styles.dots}>
         <View style={styles.dot} />
        <View style={[styles.dot, { backgroundColor: "#FA8232" }]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  );
};

export default readycard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 40,
  },
  topShape: {
    position: "absolute",
    top: -70,
    left: -30,
    width: 280,
    height: 350,
    backgroundColor: "#FA8232",
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 200,
    transform: [{ rotate: "15deg" }],
  },
  card: {
    marginTop: 100,
    width: "85%",
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 350,
  },
  textBox: {
    padding: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
    color: "#202020",
  },
  desc: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    lineHeight: 20,
  },
  dots: {
    flexDirection: "row",
    marginTop: 30,
    gap: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#D9D9D9",
  },
});
