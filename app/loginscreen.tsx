import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    console.log("Email:", email, "Password:", password);


    navigation.replace("App"); // 👈 Make sure "App" or TabNavigator is registered in AppNavigator
  };


  return (

    <View style={styles.container} >


      <Svg style={styles.midShape}
        viewBox="0 0 200 200">
        <Path
          fill="#DCE6FF" // Light blue shape
          d="M47.7,-62.7C62.6,-52.5,77.1,-39.5,83.4,-22.4C89.7,-5.2,87.7,16,75.4,27.9C63.1,39.8,40.5,42.4,21.3,50.6C2,58.9,-13.8,72.9,-30.7,72.8C-47.7,72.8,-65.8,58.8,-75.8,40.3C-85.8,21.7,-87.7,-1.4,-78.7,-18.7C-69.7,-36,-49.9,-47.6,-32.1,-58.1C-14.3,-68.6,1.4,-78,18.8,-80.4C36.2,-82.7,55.2,-77.3,47.7,-62.7Z"
          transform="translate(100 100)"
        />
      </Svg>
      <Svg
        style={styles.topShape}
        viewBox="0 0 200 200"
      >

        <View style={styles.topShape}></View>

      </Svg>
      <Svg
        style={styles.rightShape}
        viewBox="0 0 200 200"
      >
        <Path
          fill="#FA8232"
          d="M47.7,-62.7C62.6,-52.5,77.1,-39.5,83.4,-22.4C89.7,-5.2,87.7,16,75.4,27.9C63.1,39.8,40.5,42.4,21.3,50.6C2,58.9,-13.8,72.9,-30.7,72.8C-47.7,72.8,-65.8,58.8,-75.8,40.3C-85.8,21.7,-87.7,-1.4,-78.7,-18.7C-69.7,-36,-49.9,-47.6,-32.1,-58.1C-14.3,-68.6,1.4,-78,18.8,-80.4C36.2,-82.7,55.2,-77.3,47.7,-62.7Z"
          transform="translate(100 100)"
        />
      </Svg>

      <Text style={styles.title}> Login </Text>


      <View style={styles.topview}>

        <Text>Good to see you back!</Text>

        <Ionicons

          name="heart-outline" size={22} color='black'

        />

      </View>


      <View style={styles.inputmainview}>

        <TextInput

          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"

        />

      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}> Next </Text>

      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("/registerscreen")}>

        <Text style={styles.Cancel}>Cancel</Text>

      </TouchableOpacity>

      <View style={styles.bottomShape}></View>

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: 'white'


  },
  topShape: {
    position: "absolute",
    top: -100,
    left: -70,
    width: 270,
    height: 270,
    backgroundColor: '#FA8232',
    borderBottomRightRadius: 180
  },
  midShape: {
    position: "absolute",
    width: 300,
    height: 300,
    top: -70,
    left: -25
  },
  rightShape: {
    position: "absolute",
    right: -120,
    width: 200,
    height: 200,
    marginBottom: 300
  },

  title: {
    fontSize: 50,
    fontWeight: 700,
    color: "#202020",
    marginBottom: 20,
    marginTop: 100
  },
  topview: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 50
  },
  inputmainview: {
    paddingHorizontal: 15,
    marginBottom: 15,
    width: '100%',
    zIndex: 1,

  },
  input: {
    height: 50,
    backgroundColor: "#F8F8F8",
    borderRadius: 40,
    padding: 10

  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#FA8232",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,

  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  Cancel: {
    fontSize: 14,
    marginTop: 10,
    alignSelf: 'center',
    zIndex: 1,
  },
  bottomShape: {
    position: "absolute",
    bottom: -20,      // push more downward so button is fully on top
    right: -60,
    width: 300,
    height: 200,
    backgroundColor: "#DCE6FF",
    borderTopLeftRadius: 200,
    zIndex: 0,         // stay in background
  },
});

