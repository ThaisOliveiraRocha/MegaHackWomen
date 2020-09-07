import React from "react";
import {
  View,
  ImageBackground,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

export const StepOne = ({ navigation }) => {
  const goToNextPage = () => {
    navigation.navigate("StepTwo");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../../assets/images/backgroundpurple.png")}
          style={styles.image}
        >
          <View style={styles.textContainer}>
            <Text style={styles.title}>Cadastrar Etapa 1/2</Text>
            <TextInput placeholder="Nome" style={styles.input} />
            <TextInput placeholder="Data de Nascimento" style={styles.input} />
            <TextInput placeholder="Celular" style={styles.input} />
            <TextInput placeholder="Estado" style={styles.input} />
            <TextInput placeholder="Cidade" style={styles.input} />
            <TextInput placeholder="Formação" style={styles.input} />
            <TextInput placeholder="Área de Atuação" style={styles.input} />
            <TouchableOpacity
              onPress={goToNextPage}
              style={styles.buttonContainer}
            >
              <Image source={require("../../../../assets/images/arrow.png")} />
            </TouchableOpacity>
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
    marginHorizontal: 16,
    marginVertical: 14,
  },
  buttonContainer: {
    marginVertical: 24,
    marginRight: 24,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 16,
    textAlign: "center",
  },
  textContainer: {
    marginTop: 32,
  },
});

export default StepOne;
