import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export default function GetStarted() {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={require("../../../assets/images/yemigetstart.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Let's get started</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.signupButton]}>
        <Text style={styles.buttonText}>I already have an account</Text>
        <Ionicons name="arrow-forword" size={64} color="#4CAF50" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
