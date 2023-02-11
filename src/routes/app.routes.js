// Arquivo de configuração de rotas e drawer da HOME, de PERFIL, etc.!

import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import New from "../pages/New";
import Profile from "../pages/Profile";
import CustomDrawer from "../components/CustomDrawer";

const AppDrawer = createDrawerNavigator();

export default function AppRoutes(){
  return (
    <AppDrawer.Navigator
      drawerContent={
        (props) => <CustomDrawer {...props} />
      }

      screenOptions={{
        headerShown:false,

        drawerStyle:{
          backgroundColor: "#FFFFFF",
          paddingTop: 20,
        },

        drawerActiveBackgroundColor:"#3b3dbf",
        drawerActiveTintColor: "#FFFFFF",

        drawerInactiveBackgroundColor: "#F0F2FF",
        drawerInactiveTintColor: "#000000"

      }}
    >
      <AppDrawer.Screen
        name="Home"
        component={Home}
      />

      <AppDrawer.Screen
        name="Registrar"
        component={New}
      />

      <AppDrawer.Screen
        name="Meu perfil"
        component={Profile}
      />
    </AppDrawer.Navigator>
  )
}