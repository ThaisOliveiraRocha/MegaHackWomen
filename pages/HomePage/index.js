import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import Home from "../../container/Home";

export const HomePage = ({ navigation }) => {
  const openMenu = () => {
    navigation.navigate("Menu");
  };
  return (
    <View>
      <TouchableOpacity style={styles.menuContainer} onPress={openMenu}>
        <View style={styles.menuImg}>
          <Image source={require("../../assets/images/menu.png")} />
        </View>
      </TouchableOpacity>
      <Home navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    width: "100%",
    height: 42,
    backgroundColor: "#fff",
    marginTop: 24,
  },
  menuImg: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
});

export default HomePage;
