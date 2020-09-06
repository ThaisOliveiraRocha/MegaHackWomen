import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const CardPost = ({ navigation, cardPost }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View>
          <Image source={require("../../../../assets/images/avatar.png")} />
        </View>
        <View style={styles.textTopContainer}>
          <Text style={styles.title}>{cardPost.name}</Text>
          <Text style={styles.description}>{cardPost.date}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textBody}>{cardPost.textBody}</Text>
        <View style={styles.bottomContent}>
          <View style={styles.social}>
            <Text style={styles.description}>{cardPost.likes}</Text>
            <Text style={styles.description}>{cardPost.comments}</Text>
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>{cardPost.buttonLike}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>{cardPost.buttonComment}</Text>
            </TouchableOpacity>
          </View>
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
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#fff",
    padding: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 10,
  },
  topContainer: {
    flex: 1,
    flexDirection: "row",
  },
  textTopContainer: {
    marginLeft: 8,
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
    color: "#333333",
  },
  description: {
    color: "#666666",
    fontSize: 14,
    fontWeight: "300",
  },
  textBody: {
    fontSize: 14,
    fontWeight: "300",
    color: "#333333",
    marginVertical: 16,
  },
  bottomContent: {
    flexDirection: "column",
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#CCCCCC",
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E55588",
    width: 150,
    height: 28,
    borderRadius: 4,
  },
  textButton: {
    fontSize: 14,
    fontWeight: "300",
    color: "#fff",
  },
});

export default CardPost;
