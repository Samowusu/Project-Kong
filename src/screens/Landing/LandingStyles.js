import styled from "styled-components/native";

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #fafbfe;
  padding: 10px 20px;
`;

export const Txt = styled.Text`
  color: "#707070";
  font-size: 16px;
  text-align: left;
  font-family: Poppins_400Regular;
`;

export const TxtBold = styled(Txt)`
  font-family: Poppins_600SemiBold;
`;
