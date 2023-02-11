import styled from "styled-components/native";

export const RegisterContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
`;

export const RegisterTypeButton = styled.TouchableOpacity`
  justify-content: center;
  align-items:center;
  flex-direction: row;
  margin-bottom: 14px;
  height: 45px;
  width: 47%;
  border-radius: 4px;
  border-width: 1.5px;
  border-color: ${
    props => props.checked ? "#3B3DBF" : "transparent"
  };
  background-color: ${
    props => props.checked ? "#FFFFFF" : "#E7E7E7"
  };
`;

export const RegisterLabel = styled.Text`
  margin-left: 8px;
  font-size: 17px;
`;