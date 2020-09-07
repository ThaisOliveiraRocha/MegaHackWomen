import React from "react";
import { creatAppContainer, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Splash from "./container/Splash";
import Principal from "./container/Principal";
import Login from "./container/Login";
import Cadastrar from "./container/Cadastrar";
import CadastrarMulher from "./container/CadastrarMulher";
import ScreenTipDidYouKnow from "./container/ScreenTipDidYouKnow";
import ScreenTipAboutWoU from "./container/ScreenTipAboutWoU";
import HomePage from "./pages/HomePage";
import Menu from "./components/Menu/Menu";
import PapoPrivadoPage from "./pages/PapoPrivadoPage";
import ChatSecreto from "./container/PapoPrivado/components/ChatSecreto";
import StepTwo from "./container/CadastrarMulher/components/StepTwo";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Splash: Splash,
      Principal: Principal,
      Entrar: Login,
      Cadastrar: Cadastrar,
      CadastrarMulher: CadastrarMulher,
      DidYouKnow: ScreenTipDidYouKnow,
      AboutWoU: ScreenTipAboutWoU,
      Home: HomePage,
      PapoPrivado: PapoPrivadoPage,
      ChatSecreto: ChatSecreto,
      Menu: Menu,
      StepTwo: StepTwo,
    },
    {
      headerMode: "none",
      navigationOptions: {
        headerVisible: false,
      },
    }
  )
);

export default Routes;
