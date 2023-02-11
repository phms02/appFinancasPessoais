import React, {useContext} from "react";

import {
  Container,
  Message,
  Name,
  NewLink,
  NewText,
  LogoutButton,
  LogoutText
} from "../../assets/styles/Profile/styles";

import Header from "../../components/Header";
import { AuthContext } from "../../contexts/auth";

import { NavigationHelpersContext, useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation();

  const {
    user,
    signOut
  } = useContext(AuthContext);

  return (
    <Container>
      <Header
        title="Meu perfil"
      />

      <Message
        numberOfLines={1}  // Garante que o texto fique em uma determinada quantidade de linhas.
      >
        Como é bom te ver de volta,
      </Message>

      <Name
        numberOfLines={1}  // Garante que o texto fique em uma determinada quantidade de linhas.
      >
        {user && user.name}!
      </Name>

      <NewLink
        onPress={
          () => navigation.navigate("Registrar")
        }
      >
        <NewText>
          Registrar gastos
        </NewText>
      </NewLink>

      <LogoutButton
        onPress={
          () => signOut()
        }
      >
        <LogoutText>
          Sair
        </LogoutText>
      </LogoutButton>
    </Container>
  )
}