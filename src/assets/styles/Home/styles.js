import styled from "styled-components/native";

export const Background = styled.SafeAreaView`
  flex:1;
  background-color: #F0F4FF;
`;

export const ListBalance = styled.FlatList`
  max-height: 190px;
`;

export const Area = styled.View`
  align-items: baseline;
  flex-direction: row;
  margin-top: 22px;
  padding-top: 14px;
  padding-horizontal: 14px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #FFFFFF;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 14px;
  margin-left: 4px;
  color: #000000;
`;

export const List = styled.FlatList`
  flex:1;
  background-color: #FFFFFF;
`;