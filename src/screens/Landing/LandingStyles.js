import styled from "styled-components/native";
import { Theme } from "../../config/theme";

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

export const SmallTxt = styled(Txt)`
  font-size: ${`${Theme.fonts.s}px`};
`;

export const MediumTxt = styled(Txt)`
  font-size: ${`${Theme.fonts.l}px`};
`;

export const LargeTxt = styled(Txt)`
  font-size: ${`${Theme.fonts.xxl}px`};
`;

export const TxtBold = styled(Txt)`
  font-family: Poppins_600SemiBold;
`;
export const TxtBolder = styled(TxtBold)`
  font-size: ${`${Theme.fonts.xxl}px`};
`;

export const VeryBold = styled(Txt)`
  font-size: ${`${Theme.fonts.mega}px`};
`;
