import "react-native-gesture-handler";

import React from "react";
import { StatusBar } from "react-native";

import Routes from "./src/routes/index";
import AuthProvider from "./src/contexts/auth";

import { NavigationContainer } from "@react-navigation/native";

export default function App(){
  return(
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          backgroundColor="#F0F4FF"  // Muda a cor de fundo da StatusBar.
          barStyle="dark-content"  // Muda a cor dos ícones da StatusBar.
        />
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  )
}