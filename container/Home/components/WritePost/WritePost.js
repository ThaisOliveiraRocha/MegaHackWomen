import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

export const WritePost = ({ navigation, routeName }) => {
  const goToNextPage = () => {
    navigation.navigate({ routeName });
  };
  return (
    <TouchableOpacity onPress={goToNextPage}>
      <View style={styles.container}>
        <Image source={require("../../../../assets/images/note.png")} />
        <Text style={styles.title}>No que você está pensando?</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 8,
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "left",
    paddingVertical: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "300",
    color: "#333333",
    marginLeft: 8,
  },
});

export default WritePost;
