import React from "react";
import {
  View,
  ImageBackground,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import ButtonStyled from "../../components/ButtonStyled/ButtonStyled";

export const CadastrarMulher = ({ navigation }) => {
  const goToSplash = () => {
    navigation.navigate("Home");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/backgroundpurple.png")}
          style={styles.image}
        >
          <View style={styles.textContainer}>
            <Text>Cadastro</Text>
            <TextInput placeholder="E-mail" style={styles.input} />
            <TextInput placeholder="E-mail" style={styles.input} />
            <TextInput placeholder="E-mail" style={styles.input} />
            <TextInput placeholder="E-mail" style={styles.input} />
            <TextInput placeholder="E-mail" style={styles.input} />
            <TextInput placeholder="E-mail" style={styles.input} />
            <TextInput placeholder="E-mail" style={styles.input} />
            <TextInput placeholder="E-mail" style={styles.input} />
            <TextInput placeholder="E-mail" style={styles.input} />
            <TextInput placeholder="E-mail" style={styles.input} />
            <TextInput placeholder="E-mail" style={styles.input} />
            <TextInput
              placeholder="Senha"
              secureTextEntry={true}
              style={styles.input}
            />
          </View>

          <View style={styles.buttonContainer}>
            <ButtonStyled
              navigation={navigation}
              title="Entrar"
              routeName="Entrar"
            />
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
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
    borderColor: "#000",
    marginHorizontal: 16,
    marginVertical: 8,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default CadastrarMulher;
