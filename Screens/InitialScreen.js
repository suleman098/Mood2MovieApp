import React, { useEffect } from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";

export default function InitialScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("SelectMood");
    }, 2500);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <Text style={styles.logoText}>MOOD2MOVIE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontSize: 48,
    fontFamily: "System", // You might want to use a custom font here
    fontWeight: "700",
    color: "#E50914", // Netflix red
    letterSpacing: -1,
  },
});
