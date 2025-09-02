import { Image } from "expo-image";
import { router } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.navigate("/loginscreen"); // 👈 change to "SignUp" if you want
    }, 20000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (

    <View style={styles.container}>

     <Image
     
     source={require('../assets/images/splash.png')}
     style={styles.logo}
     
     />

    
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
  height:400,
  width:400,
  resizeMode:'center'
  },
});
