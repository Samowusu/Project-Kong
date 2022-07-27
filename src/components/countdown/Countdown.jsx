import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { CountdownAnimation } from "../animations/CountdownAnimation";
import { VeryBold, SmallTxt } from "../../screens/Landing/LandingStyles";
import { Theme } from "../../config/theme";
import useTimeToDecimal from "../../hooks/useTimeToDecimal";

const { height } = Dimensions.get("window");
const animationHeight = height / 2;

Countdown.defaultProps = {
  hour: "03",
  minute: "11",
};
export function Countdown({ hour, minute }) {
  const timeLeft = useTimeToDecimal(hour, minute);
  return (
    <View
      style={{
        height: animationHeight,
        borderWidth: 1,
        borderColor: "red",
        position: "relative",
      }}
    >
      <CountdownAnimation />
      <View
        style={{
          alignItems: "center",
          position: "absolute",
          bottom: "30%",
          left: "35%",
        }}
      >
        <VeryBold color={Theme.colors.secondary}>{timeLeft}</VeryBold>
        <SmallTxt color={Theme.colors.secondary}>2/5 complete</SmallTxt>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
