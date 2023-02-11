import React, {useContext} from "react";

import {
  View,
  Text,
  Image
} from "react-native";

import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem  // Funciona como se fosse uma página/item específico.
} from "@react-navigation/drawer";

import { AuthContext } from "../../contexts/auth";

export default function CustomDrawer(props) {
  const {
    user,
    signOut
  } = useContext(AuthContext);

  return (
    <DrawerContentScrollView>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 25
        }}
      >
        <Image
          source={require("../../assets/img/logo.png")}
          style={{
            height: 90,
            width: 90
          }}
          resizeMode="contain"
        />

        <Text
          style={{
            fontSize: 22,
            marginTop: 15,
            color: "#000000"
          }}
        >
          Bem-vindo(a),
        </Text>

        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 15,
            paddingHorizontal: 22,
            color: "#000000"
          }}
        >
          {user && user.name}
        </Text>
      </View>

      <DrawerItemList
        {...props}
      />
    </DrawerContentScrollView>
  )
}