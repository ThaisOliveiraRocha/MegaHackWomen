import React from "react";
import {
  View,
  ImageBackground,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import StepOne from "./components/StepOne/StepOne";

export const CadastrarMulher = ({ navigation }) => {
  const goToSplash = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <StepOne navigation={navigation} />
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
