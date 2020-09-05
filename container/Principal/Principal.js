import React from "react";
import { View, Button, Text, Image, StyleSheet } from "react-native";
import ButtonStyled from "../../components/ButtonStyled/ButtonStyled";

export const Principal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/girls.png")} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>WoU</Text>
      </View>

      <View style={styles.buttonContainer}>
        <ButtonStyled
          navigation={navigation}
          title="Entrar"
          routeName="Entrar"
        />
        <ButtonStyled
          navigation={navigation}
          title="Cadastrar"
          routeName="DidYouKnow"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#122173",
    fontSize: 32,
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});

export default Principal;
