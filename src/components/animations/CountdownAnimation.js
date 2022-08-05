import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";

export function CountdownAnimation() {
  const animationRef = useRef();

  return (
    <LottieView
      source={require("../../../assets/lottieView.json")}
      ref={animationRef}
      autoPlay
      style={{
        backgroundColor: "#fff",
        width: "100%",
        height: 300,
      }}
    />
  );
}

const styles = StyleSheet.create({});
