import styled from "styled-components/native";

export const Container = styled.SafeAreaView `
  flex: 1;
  alignItems: center;
  background-color: #F0F4FF;
`;

export const Message = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-top: 24px;
  color: #000000;
`;

export const Name = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 25px;
  padding: 0 14px;
  color: #000000;
`;

export const NewLink = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 90%;
  margin-bottom: 15px;
  border-radius: 8px;
  background-color: #3B3DBF;
`;

export const NewText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFFFFF;
`;

export const LogoutButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 90%;
  border-width: 1px;
  border-radius: 8px;
  border-color: #C62C36;
`;

export const LogoutText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #C62C36;
`;