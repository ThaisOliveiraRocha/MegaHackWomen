import React from "react";
import { View, Image, TextInput, StyleSheet, Text } from "react-native";
import ButtonStyled from "../../components/ButtonStyled/ButtonStyled";

export const Principal = ({ navigation }) => {
  const goToSplash = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/banner.png")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Entrar</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu E-mail"
          autoCompleteType="email"
          autoCorrect={false}
        />
        <TextInput
          placeholder="Digite sua Senha"
          style={styles.input}
          secureTextEntry={true}
          autoCompleteType="password"
        />
        <View style={styles.buttonContainer}>
          <ButtonStyled
            navigation={navigation}
            title="Entrar"
            routeName="Home"
          />
        </View>
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
  image: {
    flex: 4,
  },
  textContainer: {
    flex: 4,
    paddingTop: 24,
  },
  input: {
    width: 328,
    height: 44,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    borderColor: "gray",
    borderWidth: 1,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  buttonContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#E55588",
    textAlign: "center",
  },
});

export default Principal;
