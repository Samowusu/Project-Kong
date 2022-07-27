import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { MediumTxt } from "../../screens/Landing/LandingStyles";
import { Theme } from "../../config/theme";
import { StartSessionBubble } from "../modals/startSessionModal/StartSessionBubble";

export function SessionInProgress() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{ paddingBottom: 20 }}>
        <MediumTxt color={Theme.colors.secondaryDark}>
          SESSION IN PROGRESS
        </MediumTxt>
      </View>
      <StartSessionBubble showTaskDuration={false} />
    </View>
  );
}

const styles = StyleSheet.create({});
