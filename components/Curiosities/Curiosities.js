import React from "react";
import {
  View,
  Button,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export const Curiosities = ({
  navigation,
  routeName,
  title,
  description,
  notes,
  imageBackground,
  imageButton,
}) => {
  const goToNext = () => {
    navigation.navigate({ routeName });
  };
  return (
    <TouchableOpacity onPress={goToNext} style={styles.container}>
      <ImageBackground source={imageBackground} style={styles.imageBkg}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.notesContainer}>
            <Text style={styles.notes}>{notes}</Text>
          </View>

          <TouchableOpacity onPress={goToNext} style={styles.btn}>
            <Image source={imageButton} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  imageBkg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  textContainer: {
    flex: 6,
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "left",
    marginStart: 24,
  },
  title: {
    fontSize: 24,
    color: "#000",
    fontWeight: "700",
    width: "80%",
    marginBottom: 16,
  },
  description: {
    color: "#000",
    fontSize: 16,
    fontWeight: "300",
    width: "80%",
  },
  notes: {
    color: "#000",
    fontSize: 12,
    fontWeight: "300",

    width: "80%",
  },
  notesContainer: {
    flex: 1,
    marginStart: 24,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    marginRight: 32,
  },
});

export default Curiosities;
