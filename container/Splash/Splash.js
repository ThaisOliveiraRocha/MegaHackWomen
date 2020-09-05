import React from "react";
import {
  View,
  Button,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import ButtonStyled from "../../components/ButtonStyled";

const Splash = ({ navigation }) => {
  const goToPrincipal = () => {
    navigation.navigate("Principal");
  };
  return (
    <TouchableOpacity onPress={goToPrincipal} style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/wavy.png")}
        style={styles.image}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>WomenUnited</Text>
          <Text style={styles.subtitle}>Juntas podemos mais</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    color: "#e55587",
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#9C98A6",
    fontSize: 14,
  },
});

export default Splash;
