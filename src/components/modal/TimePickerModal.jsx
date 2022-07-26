import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import React, { useRef, useEffect, useState, forwardRef, memo } from "react";
import BaseModal from "./BaseModal";
import { Txt } from "../../screens/Landing/LandingStyles";
import { DoubleScroller } from "../scroller/Scroller";
import { Theme } from "../../config/theme";

TimePickerModal.defaultProps = {
  visible: true,
  toggleModal: () => {
    console.log("toggle modal");
  },
  onChangeHour: () => {
    console.log("change hour");
  },
  onChangeMinute: () => {
    console.log("change minute");
  },
};

const { height } = Dimensions.get("window");
const ITEM_HEIGHT = 70;
const scrollsContainerHeight = height / 2;
const hoursData = ["00", "01", "02", "03", "04", "05", "06"];
const minutesData = ["00", "15", "30", "45"];

export default function TimePickerModal({
  visible,
  toggleModal,
  onChangeHour,
  onChangeMinute,
}) {
  const [selectedHourIndexState, setSelectedHourIndexState] = useState("03");
  const [selectedMinuteIndexState, setSelectedMinuteIndexState] =
    useState("30");

  const setDurationHandler = (selectedHour, selectedMinute) => {
    onChangeHour(selectedHour);
    onChangeMinute(selectedMinute);
    toggleModal();
  };

  return (
    <BaseModal
      modalHeight={1.2}
      title={"Create task"}
      visible={visible}
      duration
      firstButtonText={"cancel"}
      secondButtonText={"start session"}
      toggleModal={toggleModal}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>HH</Text>
          <Text style={styles.titleText}>MM</Text>
        </View>
        <View style={styles.scrollsContainer}>
          <DoubleScroller
            hours={hoursData}
            minutes={minutesData}
            onChangeHour={(val) => setSelectedHourIndexState(val)}
            onChangeMinute={(val) => setSelectedMinuteIndexState(val)}
          />
        </View>
        <Pressable
          onPress={() =>
            setDurationHandler(selectedHourIndexState, selectedMinuteIndexState)
          }
        >
          <View style={styles.setDurationButton}>
            <Text style={styles.setDurationButtonText}>Set Duration</Text>
          </View>
        </Pressable>
      </View>
    </BaseModal>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    // borderColor: "black",
    alignItems: "center",
    paddingTop: 60,
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: Theme.colors.monoDark,
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  titleText: {
    color: "rgba(0, 0, 0, 0.27)",
    fontFamily: "Poppins_500Medium",
    fontSize: Theme.fonts.m,
  },
  scrollsContainer: {
    // borderWidth: 1,
    // borderColor: "green",
    width: "100%",

    width: "50%",
    overflow: "hidden",
    height: scrollsContainerHeight,
  },

  pointer: {
    position: "absolute",
    top: scrollsContainerHeight / 2 - ITEM_HEIGHT / 2,
    borderWidth: 1,
    width: "100%",
    height: ITEM_HEIGHT,
    borderColor: Theme.colors.secondaryDark200,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },

  texts: {
    color: Theme.colors.secondaryDark200,
    fontFamily: "Poppins_500Medium",
    fontSize: Theme.fonts.xxxl,
    textAlign: "center",
  },
  setDurationButton: {
    // borderWidth: 1,
    // borderColor: "black",
    marginTop: 50,
  },
  setDurationButtonText: {
    color: Theme.colors.primary,
    fontFamily: "Poppins_500Medium",
    fontSize: Theme.fonts.l,
    textTransform: "uppercase",
  },
});
