import styled from "styled-components/native";

export const Background = styled.View`
  flex:1;
  background-color: #F0F4FF;
`;

export const Container = styled.KeyboardAvoidingView`
  flex:1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-bottom: 25px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput`
  font-size: 17px;
  width: 90%;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 8px;
  color: #000000;
  background-color: #FFFFFF;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 90%;
  margin-top: 10px;
  border-radius: 8px;
  background-color: #3B3DBF;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #FFFFFF;
`;

export const Link = styled.TouchableOpacity`
  margin-vertical: 10px;
`;

export const LinkText = styled.Text`
  color: #000000;
`;