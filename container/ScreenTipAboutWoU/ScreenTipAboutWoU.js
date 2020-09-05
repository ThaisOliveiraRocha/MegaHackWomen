import React from "react";
import { View, Button, Text, ImageBackground, StyleSheet } from "react-native";
import Curiosities from "../../components/Curiosities/Curiosities";

export const ScreenTipAboutWoU = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Curiosities
        navigation={navigation}
        routeName="Cadastrar"
        title="Sobre a WoU"
        description="O nosso objetivo é conectar mulheres e motivá-las a seguir na área de TI.
        Somos uma plataforma feita por mulheres, para mulheres."
        imageBackground={require("../../assets/images/pink-background.png")}
        imageButton={require("../../assets/images/arrow.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});

export default ScreenTipAboutWoU;
