import React, {
  useState,
  useContext
} from "react";

import {
  Platform,
  ActivityIndicator
} from "react-native";

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText
} from "../../assets/styles/SignIn/styles";

import { AuthContext } from "../../contexts/auth";

export default function SignUp() {
  const { signUp, loadingAuth } = useContext(AuthContext);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if(nome === "" || email === "" || password === "") return;

    signUp(email, password, nome);
  };

  return (
    <Background>
      <Container
        behavior={
          Platform.OS === "ios" ? "padding" : ""
        }
        enabled
      >
        <AreaInput>
          <Input
            placeholder="Nome"
            value={nome}
            onChangeText={
              (text) => setNome(text)
            }
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Informe o seu e-mail!"
            value={email}
            onChangeText={
              (text) => setEmail(text)
            }
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Informe a sua senha!"
            value={password}
            onChangeText={
              (text) => setPassword(text)
            }
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          {
            loadingAuth ? (
              <ActivityIndicator
                size={20}
                color="#FFFFFF"
              />
            ) : (
              <SubmitText>
                Cadastrar
              </SubmitText>
            )
          }
        </SubmitButton>
      </Container>
    </Background>
  )
}