import PrimaryButton from "@/components/PrimaryButton";
import SecoundryButton from "@/components/SecoundryButton";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const getstarted = ({ navigation }: any) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  return (

    <View style={styles.container} >


      <Svg style={styles.toShape}
        viewBox="0 0 200 200">
        <Path
          fill="#DCE6FF" // Light blue shape
          d="M47.7,-62.7C62.6,-52.5,77.1,-39.5,83.4,-22.4C89.7,-5.2,87.7,16,75.4,27.9C63.1,39.8,40.5,42.4,21.3,50.6C2,58.9,-13.8,72.9,-30.7,72.8C-47.7,72.8,-65.8,58.8,-75.8,40.3C-85.8,21.7,-87.7,-1.4,-78.7,-18.7C-69.7,-36,-49.9,-47.6,-32.1,-58.1C-14.3,-68.6,1.4,-78,18.8,-80.4C36.2,-82.7,55.2,-77.3,47.7,-62.7Z"
          transform="translate(100 100)"
        />
      </Svg>



      <Svg style={styles.midShape}
        viewBox="0 0 200 200">

        <Path
          fill="#FA8232" // Light blue shape
          d="M47.7,-62.7C62.6,-52.5,77.1,-39.5,83.4,-22.4C89.7,-5.2,87.7,16,75.4,27.9C63.1,39.8,40.5,42.4,21.3,50.6C2,58.9,-13.8,72.9,-30.7,72.8C-47.7,72.8,-65.8,58.8,-75.8,40.3C-85.8,21.7,-87.7,-1.4,-78.7,-18.7C-69.7,-36,-49.9,-47.6,-32.1,-58.1C-14.3,-68.6,1.4,-78,18.8,-80.4C36.2,-82.7,55.2,-77.3,47.7,-62.7Z"
          transform="translate(100 100)"
        />
      </Svg>

      <Image
        source={require('../assets/images/splash.png')}
        style={styles.yemipic}
      />

      <Text style={styles.title}> “Shop Smart. Shop Yemi.” </Text>


      <PrimaryButton title="Let's get started" onPress={() => router.replace("/registerscreen")} />



      <View style={styles.buttonview}>
        <SecoundryButton title="I already have an account" onPress={() => router.replace("/loginscreen")}

        />


        <Image
          source={require('../assets/images/Button.png')}
          style={styles.buttonicon}
        />

      </View>


    </View>
  );
};

export default getstarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: 'white',
    gap: 10

  },

  toShape: {
    position: "absolute",
    width: 300,
    height: 300,
    top: -70,
    left: -65,

  },
  midShape: {
    position: "absolute",
    width: 150,
    height: 350,
    top: 100,
    right: -75
  },
  yemipic: {
    height: 108,
    width: 270,
    resizeMode: 'center',
    alignSelf: 'center',
    marginTop: 150
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: "#202020",
    marginTop: -30,
    alignSelf: 'center',
    marginBottom: 200

  },

 
  buttonicon: {
    height: 20,
    width: 20,
    marginTop: 10,
  },
  account: {
    fontSize: 15,
    fontWeight: '300'
  },
  buttonview:{
flexDirection: 'row',
    alignContent: 'center',
    gap: 8,
    alignSelf: 'center'
  }



});


