import React from "react";
import { View, Button, Text, ImageBackground, StyleSheet } from "react-native";
import Curiosities from "../../components/Curiosities/Curiosities";

export const ScreenTipDidYouKnow = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Curiosities
        navigation={navigation}
        routeName="AboutWoU"
        title="Você sabia?"
        description="Entre 100 vagas no mercado de tecnologia, apenas 37 são ocupadas por mulheres.  No mesmo setor, 46% delas dizem receber salários inferiores aos homens."
        imageBackground={require("../../assets/images/white-background.png")}
        imageButton={require("../../assets/images/arrow.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
});

export default ScreenTipDidYouKnow;
