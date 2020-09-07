import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import PapoPrivado from "../../container/PapoPrivado";

export const PapoPrivadoPage = ({ navigation }) => {
  const openMenu = () => {
    navigation.navigate("Menu");
  };
  return (
    <View>
      <TouchableOpacity style={styles.menuContainer} onPress={openMenu}>
        <View style={styles.menuImg}>
          <Image source={require("../../assets/images/open-menu.png")} />
        </View>
      </TouchableOpacity>
      <PapoPrivado navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    width: "100%",
    height: 72,
    backgroundColor: "#fae3eb",
  },
  menuImg: {
    marginTop: 12,
    paddingVertical: 20,
    paddingHorizontal: 8,
  },
});

export default PapoPrivadoPage;
