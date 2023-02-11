import styled from "styled-components/native";

export const Container = styled.View`
  align-items: flex-start;
  justify-content: center;
  width: 300px;
  margin-horizontal: 14px;
  padding-left: 14px;
  border-radius:4px;
  background-color: #${props => props.bg};
`;

export const Label = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #FFFFFF;
`;

export const Balance = styled.Text`
  font-size: 30px;
  margin-top: 5px;
  color: #FFFFFF;
`;