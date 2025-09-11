// import { useState, useRef } from "react";
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { Image } from "expo-image";
// import { router } from "expo-router";
// import Svg, { Path } from "react-native-svg";
// import SecoundryButton from "@/components/SecoundryButton";

// const TypePassword = () => {
//   const [password, setPassword] = useState("");
//   const maxLength = 6; // number of password dots
//   const inputRef = useRef<TextInput>(null);

//   // Render dots dynamically
//   const renderDots = () => {
//     return Array.from({ length: maxLength }).map((_, index) => (
//       <Image
//         key={index}
//         source={
//           index < password.length
//             ? require("../assets/images/ellispse 01.png") // filled dot
//             : require("../assets/images/ellispsewhite.png") // empty dot
//         }
//         style={styles.ellips}
//       />
//     ));
//   };

//   return (
//     <View style={styles.container}>
//       {/* Background Shapes */}
//       <Svg style={styles.midShape} viewBox="0 0 200 200">
//         <Path
//           fill="#DCE6FF"
//           d="M47.7,-62.7C62.6,-52.5,77.1,-39.5,83.4,-22.4C89.7,-5.2,87.7,16,75.4,27.9C63.1,39.8,40.5,42.4,21.3,50.6C2,58.9,-13.8,72.9,-30.7,72.8C-47.7,72.8,-65.8,58.8,-75.8,40.3C-85.8,21.7,-87.7,-1.4,-78.7,-18.7C-69.7,-36,-49.9,-47.6,-32.1,-58.1C-14.3,-68.6,1.4,-78,18.8,-80.4C36.2,-82.7,55.2,-77.3,47.7,-62.7Z"
//           transform="translate(100 100)"
//         />
//       </Svg>
//       <View style={styles.topShape} />

//       {/* Profile */}
//       <View style={styles.profileView}>
//         <Image
//           source={require("../assets/images/profile.png")}
//           style={styles.profile}
//         />
//       </View>

//       {/* Text */}
//       <View style={styles.textview}>
//         <Text style={styles.username}>Hello, Romina!!</Text>
//         <Text style={styles.passwordtext}>Type your password</Text>
//       </View>

//       {/* Password dots (Touchable → focus input) */}
//       <TouchableOpacity
//         style={styles.cardsview}
//         activeOpacity={0.8}
//         onPress={() => inputRef.current?.focus()}
//       >
//         {renderDots()}
//       </TouchableOpacity>

//       {/* Hidden Input */}
//       <TextInput
//         ref={inputRef}
//         style={styles.input}
//         value={password}
//         onChangeText={(text) => setPassword(text.slice(0, maxLength))}
//         secureTextEntry
//         autoFocus
//       />

//       {/* Cancel Button */}
//       <SecoundryButton title="Cancel" onPress={() => router.back()} />
//     </View>
//   );
// };

// export default TypePassword;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     paddingHorizontal: 16,
//     backgroundColor: "white",
//     gap: 8,
//     alignItems: "center",
//   },
//   topShape: {
//     position: "absolute",
//     top: -100,
//     left: -70,
//     width: 270,
//     height: 270,
//     backgroundColor: "#FA8232",
//     borderBottomRightRadius: 220,
//     borderTopRightRadius: 250,
//     borderBottomLeftRadius: 220,
//   },
//   midShape: {
//     position: "absolute",
//     width: 300,
//     height: 350,
//     top: -70,
//     left: -25,
//   },
//   profile: {
//     height: 100,
//     width: 100,
//   },
//   profileView: {
//     height: 110,
//     width: 110,
//     borderWidth: 10,
//     borderColor: "white",
//     borderRadius: 60,
//     marginBottom: 20,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   textview: {
//     gap: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   username: {
//     fontFamily: "Raleway",
//     color: "#202020",
//     fontWeight: "700",
//     fontSize: 28,
//   },
//   passwordtext: {
//     fontFamily: "Nunito Sans",
//     color: "#202020",
//     fontSize: 14,
//     fontWeight: "300",
//   },
//   cardsview: {
//     flexDirection: "row",
//     gap: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 60,
//   },
//   ellips: {
//     height: 20,
//     width: 20,
//   },
//   input: {
//     position: "absolute",
//     opacity: 0, // hide input but still functional
//   },
// });
