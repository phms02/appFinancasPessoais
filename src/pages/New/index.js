import React, { useState } from "react";

import {
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";

import {
  Background,
  Input,
  SubmitButton,
  SubmitText
} from "../../assets/styles/New/styles";

import Header from "../../components/Header";
import RegisterTypes from "../../components/RegisterTypes";

import api from "../../services/api";

import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";

export default function New() {
  const navigation = useNavigation();

  const [labelInput, setLabelInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [type, setType] = useState("receita");

  function handleSubmit() {
    Keyboard.dismiss();

    if(isNaN(parseFloat(valueInput)) || type === null) {
      alert("Preencha todos os campos!");
      return;
    };

    Alert.alert(
      "Confirmando dados",
      `Tipo: ${type} - Valor: ${valueInput}`,
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Continuar",
          onPress: () => handleAdd()
        }
      ]
    );
  };

  async function handleAdd() {
    Keyboard.dismiss();

    await api.post("/receive", {
      description: labelInput,
      value: Number(valueInput),
      type: type,
      date: format(new Date(), "dd/MM/yyyy")
    });

    setLabelInput("");
    setValueInput("");
    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback 
      onPress={
        () => Keyboard.dismiss()
      }
    >
      <Background>
        <Header
          title="Registro de movimentos"
        />

        <SafeAreaView
          style={{
            alignItems: "center",
            marginTop: 14
          }}
        >
          <Input
            placeholder="Descreva esse registro!"
            value={labelInput}
            onChangeText={
              (text) => setLabelInput(text)
            }
          />

          <Input
            placeholder="Informe o valor desejado!"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={
              (text) => setValueInput(text)
            }
          />

          <RegisterTypes
            type={type}
            sendTypeChanged={
              (item) => setType(item)
            }
          />

          <SubmitButton
            onPress={handleSubmit}
          >
            <SubmitText>
              Registrar
            </SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  )
}