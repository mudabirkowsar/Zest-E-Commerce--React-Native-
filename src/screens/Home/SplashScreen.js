import React, { useEffect, useRef } from "react";
import { View, Text, Image, Animated, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default function SplashScreen({navigation}) {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  setTimeout(() => {
    navigation.replace("StartingScreen")
  }, 2000);

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        friction: 4,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../../assets/logoApp.png")} // replace with your logo path
        style={[
          styles.logo,
          {
            transform: [{ scale: scaleAnim }],
            opacity: opacityAnim,
          },
        ]}
        resizeMode="contain"
      />
      {/* <Animated.Text
        style={[
          styles.title,
          {
            opacity: opacityAnim,
          },
        ]}
      >
        Zest
      </Animated.Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // set your brand color
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: width * 0.5,
    height: height * 0.25,
  },
  title: {
    fontSize: 42,
    fontWeight: "700",
    color: "#ff6600", // brand color for Zest
    marginTop: 20,
    letterSpacing: 2,
    fontStyle:"italic",
  },
});
