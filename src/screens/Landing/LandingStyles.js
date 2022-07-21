import styled from "styled-components/native";
import { Theme } from "../../theme/default";

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${Theme.colors.monoLight};
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${Theme.colors.monoLight200};
  padding: 10px 25px;
`;

export const Txt = styled.Text`
  color: ${(props) => props.color ?? Theme.colors.monoDark200};
  font-size: ${`${Theme.fonts.m}px`};
  text-align: left;
  font-family: Poppins_400Regular;
`;

export const TxtBold = styled(Txt)`
  font-family: Poppins_600SemiBold;
`;
