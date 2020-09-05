import React from "react";
import { View, Button, Text, ImageBackground, StyleSheet } from "react-native";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});

export default Home;
