import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: rgba(34, 34, 34, 0.4);
`;

export const ModalContent = styled.View`
  flex: 2;
  justify-content: center;
  background-color: #FFFFFF
  padding: 15px;
`;

export const ButtonFilter = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 45px;
  border-radius: 5px;
  background-color: #3B3DBF;
`;

export const ButtonFilterText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #FFFFFF;
`;