import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useRef, useEffect, useState } from "react";
import ActionModal from "./ActionModal";

TimePickerModal.defaultProps = {
  visible: true,
  toggleModal: () => {
    console.log("toggle modal");
  },
};

const ITEM_HEIGHT = 60;
const hoursData = ["00", "01", "02", "03", "04", "05", "06"];
const minutesData = ["00", "15", "30", "45"];

export default function TimePickerModal({
  visible,
  toggleModal,
  onChangeHour,
  onChangeMinute,
}) {
  const [selectedHourIndexState, setSelectedHourIndexState] = useState(0);
  const [selectedMinuteIndexState, setSelectedMinuteIndexState] = useState(0);
  const hourRef = useRef();
  const minuteRef = useRef();

  const setDurationHandler = (selectedHourIndex, selectedMinuteIndex) => {
    onChangeHour(hoursData[selectedHourIndex]);
    onChangeMinute(minutesData[selectedMinuteIndex]);
    toggleModal();
  };

  const scrollToMinute = (index) => {
    minuteRef.current?.scrollTo({ y: index * 43.04 - 5 });
  };

  const scrollToHour = (index) => {
    hourRef.current?.scrollTo({ y: index * 47.714 - 5 });
  };

  useEffect(() => {
    scrollToHour(4);
    scrollToMinute(3);
  }, []);
  return (
    <ActionModal
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
          <ScrollView
            ref={hourRef}
            showsVerticalScrollIndicator={false}
            style={{
              ...styles.hoursScrollView,
              borderBottomLeftRadius: 10,
              borderTopLeftRadius: 10,
            }}
            onMomentumScrollEnd={(e) => {
              const currentIndex = Math.round(
                e.nativeEvent.contentOffset.y / ITEM_HEIGHT
              );
              setSelectedHourIndexState(currentIndex);
            }}
          >
            {hoursData.map((hour) => (
              <Text style={styles.texts} key={hour}>
                {hour}
              </Text>
            ))}
          </ScrollView>
          <ScrollView
            ref={minuteRef}
            style={{
              ...styles.hoursScrollView,
              borderLeftWidth: 0,
              borderRightWidth: 1,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}
            showsVerticalScrollIndicator={false}
            onMomentumScrollEnd={(e) => {
              const currentIndex = Math.round(
                e.nativeEvent.contentOffset.y / ITEM_HEIGHT
              );
              setSelectedMinuteIndexState(currentIndex);
            }}
          >
            {minutesData.map((min) => (
              <Text style={styles.texts} key={min}>
                {min}
              </Text>
            ))}
          </ScrollView>
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
    </ActionModal>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    // borderColor: "black",
    alignItems: "center",
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: "#707070",
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  titleText: {
    color: "rgba(0, 0, 0, 0.27)",
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },
  scrollsContainer: {
    // borderWidth: 1,
    // borderColor: "green",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "50%",
    overflow: "hidden",
    height: 450,
  },
  hoursScrollView: {
    borderWidth: 1,
    borderColor: "#909CC6",
    height: ITEM_HEIGHT,
    overflow: "visible",
    marginTop: 190,
    borderRightWidth: 0,
  },

  texts: {
    color: "#909CC6",
    fontFamily: "Poppins_500Medium",
    fontSize: 40,
    textAlign: "center",
  },
  setDurationButton: {
    // borderWidth: 1,
    // borderColor: "black",
    marginTop: 60,
  },
  setDurationButtonText: {
    color: "#01D9F7",
    fontFamily: "Poppins_500Medium",
    fontSize: 21,
    textTransform: "uppercase",
  },
});
