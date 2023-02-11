import styled from "styled-components/native";

export const Container = styled.View`
  margin-vertical: 10px;
  margin-bottom: 14px;
  padding: 12px;
  border-radius: 4px;
  background-color: #F0F3FF;
`;

export const Tipo = styled.View`
  flex-direction: row;
`;

export const TipoText = styled.Text`
  font-size: 17px;
  font-style: italic;
  color: #FFFFFF;
`;

export const IconView = styled.View`
  flex-direction: row;
  margin-bottom: 2px;
  padding-vertical: 4px;
  padding-horizontal: 8px;
  border-radius: 4px;
  background-color: ${
    props => props.tipo === "despesa" ? "#C62C22" : "#049300"
  };
`;

export const ValorText = styled.Text`
  font-size: 22px;
  color: #000000;
`;