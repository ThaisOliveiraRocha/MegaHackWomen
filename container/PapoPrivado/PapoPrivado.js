import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const PapoPrivado = ({ navigation }) => {
  const goToNextPage = () => {
    navigation.navigate("ChatSecreto");
  };
  return (
    <TouchableOpacity style={styles.screen} onPress={goToNextPage}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Papo Privado</Text>
        <Image source={require("../../assets/images/girls.png")} />
        <Text style={styles.title}>WomenUnited</Text>
      </View>
      <View>
        <Text style={styles.description}>
          Este é um espaço para que nós mulheres possamos conversar anonimamente
          sobre diversos assuntos.
        </Text>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={require("../../assets/images/arrow.png")} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  topContainer: {
    flexDirection: "column",
    marginTop: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#E55588",
    marginVertical: 16,
  },
  description: {
    fontSize: 14,
    fontWeight: "300",
    marginBottom: 16,
    color: "#666666",
    textAlign: "center",
  },
  imageContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginRight: 16,
    marginBottom: 42,
  },
});

export default PapoPrivado;
