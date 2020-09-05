import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

export const ButtonStyled = ({ navigation, routeName, title }) => {
  const goToNextPage = () => {
    navigation.navigate({ routeName });
  };
  return (
    <View syle={styles.container}>
      <TouchableOpacity onPress={goToNextPage}>
        <View style={styles.btn}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    width: 272,
    height: 52,
    padding: 10,
    marginVertical: 8,
    borderRadius: 20,
    backgroundColor: "#E55588",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ButtonStyled;
