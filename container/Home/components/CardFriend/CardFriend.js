import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

export const CardFriend = ({ navigation, friend }) => {
  const goToNextPage = () => {
    navigation.navigate("PerfilFriend");
  };
  return (
    <TouchableOpacity onPress={goToNextPage} style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require("../../../../assets/images/ganguro-girl.png")}
          style={styles.img}
        />
        <Text style={styles.textBold}>{friend.name}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.occupation}>Área de Atuação:</Text>
        <Text style={styles.occupation}>{friend.areaAtuacao}</Text>
        <TouchableOpacity onPress={goToNextPage} style={styles.buttonContent}>
          <Text style={styles.btn}>{friend.button}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fae3eb",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  img: {
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  top: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 8,
    marginHorizontal: 16,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
    marginHorizontal: 16,
  },
  textBold: {
    color: "#000",
    fontWeight: "700",
    fontSize: 16,
    marginTop: 8,
  },
  occupation: {
    color: "#000",
    fontWeight: "300",
    fontSize: 14,
  },
  buttonContent: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    backgroundColor: "#E55588",
    width: "100%",
    height: 28,
    borderRadius: 4,
  },
  btn: {
    color: "#fff",
    fontSize: 14,
  },
});

export default CardFriend;
