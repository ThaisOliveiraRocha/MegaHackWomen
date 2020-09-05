import React from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";
import ButtonStyled from "../../components/ButtonStyled/ButtonStyled";
import { TextInput } from "react-native-gesture-handler";

export const Principal = ({ navigation }) => {
  const goToSplash = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/wavy.png")}
        style={styles.image}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>Bem Vinda a WoU</Text>
          <Text style={styles.description}>
            O espaço ideal para mulheres compartilharem experiências,
            conversarem sobre tecnologia e estabelecerem novas conexões.
          </Text>
          <Text style={styles.description}>Nos diga quem você é:</Text>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonStyled
            navigation={navigation}
            title="Mulher Incrível"
            routeName="CadastrarMulher"
          />
          <ButtonStyled
            navigation={navigation}
            title="Instituição Apoiadora"
            routeName="CadastrarInstituicao"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50%",
  },
  title: {
    width: 180,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    color: "#000",
    fontWeight: "bold",
    fontSize: 32,
  },
  description: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 16,
    paddingHorizontal: 24,
    color: "#565252",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default Principal;
