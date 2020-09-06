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
import Home from "./container/Home";

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
      Home: Home,
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
