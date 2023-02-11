import React from "react";

import {
  TouchableWithoutFeedback,
  Alert
} from "react-native";

import {
  Container,
  TipoText,
  Tipo,
  IconView,
  ValorText
} from "../../assets/styles/HistoricoList/styles";

import Icon from "react-native-vector-icons/Feather";

export default function HistoricoList({ data, deleteItem }){
  function handleDeleteItem() {
    Alert.alert(
      "Atenção",
      "Você tem certeza que quer deletar o registro?",
      [
        {
          text: "Não",
          style: "cancel"
        },

        {
          text: "Sim",
          onPress: () => deleteItem(data.id)
        }
      ]
    )
  }

  return (
    <TouchableWithoutFeedback
      onLongPress={handleDeleteItem}
    >
      <Container>
        <Tipo>
          <IconView
            tipo={data.type}
          >
            <Icon 
              name={
                data.type === "despesa" ? "arrow-down" : "arrow-up"
              }
              size={20}
              color="#FFFFFF"
            />

            <TipoText>
              {data.type}
            </TipoText>
          </IconView>
        </Tipo>

        <ValorText>
          R$ {data.value}
        </ValorText>
      </Container>
    </TouchableWithoutFeedback>
  )
}