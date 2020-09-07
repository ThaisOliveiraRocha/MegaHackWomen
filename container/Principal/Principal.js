import React from "react";
import { View, Button, Text, Image, StyleSheet } from "react-native";
import ButtonStyled from "../../components/ButtonStyled/ButtonStyled";

export const Principal = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/LogoWoU.png")}
        />
        <Text style={styles.title}>WomenUnited</Text>
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
    backgroundColor: "#fff",
  },
  logo: {
    marginTop: 56,
    marginBottom: 24,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
  },
  title: {
    color: "#272727",
    fontSize: 32,
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: 48,
  },
});

export default Principal;
