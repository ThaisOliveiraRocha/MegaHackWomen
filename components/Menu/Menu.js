import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export const Menu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topComponent}>
        <Image
          source={require("../../assets/images/avatar.png")}
          style={styles.img}
        />
        <View style={styles.topText}>
          <Text style={styles.name}>Jessica Fernandes</Text>
          <Text style={styles.email}>jessicafs@gmail.com</Text>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Icon name="home" size={24} style={styles.icon} />
          <Text style={styles.title}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Icon name="person" size={24} style={styles.icon} />
          <Text style={styles.title}>Meu Perfil</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Icon name="lock" size={24} style={styles.icon} />
          <Text style={styles.title}>Papo Privado</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Icon name="book" size={24} style={styles.icon} />
          <Text style={styles.title}>Fórum</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Icon name="star" size={24} style={styles.icon} />
          <Text style={styles.title}>Eventos</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Icon name="chat" size={24} style={styles.icon} />
          <Text style={styles.title}>Chat</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Icon name="edit" size={24} style={styles.icon} />
          <Text style={styles.title}>Configurações</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Icon name="close" size={24} style={styles.icon} />
          <Text style={styles.title}>Sair</Text>
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
    paddingVertical: 8,
    flexDirection: "column",
    position: "absolute",
    zIndex: 10,
    marginVertical: 32,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    borderColor: "#CCC",
    marginHorizontal: 8,
    paddingVertical: 16,
    width: 320,
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
  title: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 8,
  },
  icon: {
    color: "#696868",
  },
  topComponent: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#CCC",
    padding: 8,
    width: 320,
    height: 100,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
  },
  email: {
    fontSize: 14,
  },
  img: {
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: "#D5e5f2",
  },
  topText: {
    flexDirection: "column",
    marginLeft: 16,
    paddingVertical: 8,
  },
});

export default Menu;
