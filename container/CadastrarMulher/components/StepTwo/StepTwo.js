import React from "react";
import {
  View,
  ImageBackground,
  TextInput,
  Text,
  StyleSheet,
} from "react-native";
import ButtonStyled from "../../../../components/ButtonStyled";

export const StepOne = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../../assets/images/backgroundpurple.png")}
        style={styles.image}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>Cadastrar Etapa 2/2</Text>
          <TextInput placeholder="E-mail" style={styles.input} />
          <TextInput placeholder="Confirmar E-mail" style={styles.input} />
          <TextInput placeholder="Senha" style={styles.input} />
          <TextInput placeholder="Confirmar senha" style={styles.input} />

          <View style={styles.buttonContainer}>
            <ButtonStyled
              navigation={navigation}
              routeName="Home"
              title="Finalizar"
            />
          </View>
        </View>
      </ImageBackground>
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
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  input: {
    width: 328,
    height: 44,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginVertical: 14,
  },
  buttonContainer: {
    marginVertical: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 32,
    marginBottom: 32,
    textAlign: "center",
  },
  textContainer: {
    marginTop: 100,
    marginBottom: 180,
  },
});

export default StepOne;
