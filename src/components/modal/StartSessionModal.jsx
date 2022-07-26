import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import BaseModal from "./BaseModal";
import { Theme } from "../../config/theme";
import { TitleTextContainer } from "../task/TaskItem";
import {
  Txt,
  SmallTxt,
  TxtBold,
  TxtBolder,
} from "../../screens/Landing/LandingStyles";
import RadioItem from "../radio/RadioItem";
import DotIcon from "../../../assets/svgs/dotIcon";
import ArrowIcon from "../../../assets/svgs/arrowIcon";
import moment from "moment";
import useTimeToDecimal from "../../hooks/useTimeToDecimal";

const StartSessionModal = ({
  selectedTasks,
  toggleTimePickerModal,
  hour,
  minute,
  visible,
  toggleStartSessionModal,
}) => {
  const tasksDuration = 3;
  const currentTime = moment().format("hh: mm A");
  const endTime = moment().add(tasksDuration, "hours").format("hh: mm A");

  // LOGIC FOR CUMULATIVE TIME
  //   const tasks = [{hr:'', min: ''},{hr:'', min: ''},{hr:'', min: ''}]
  // let hrsArray = []
  // let minsArray = []
  // loop through tasks and pick hrs and mins
  // tasks.forEach(task => hrsArray.push(task.hr))
  // tasks.forEach(task => minsArray.push(task.min))

  // get the total hrs by summing your hrsArray
  // get total mins and convert to hrs by dividing by 60

  // sum both to get the cumulative hrs
  return (
    <BaseModal
      title={"start session"}
      modalHeight={1.2}
      buttons
      firstButtonText={"cancel"}
      secondButtonText={"start session"}
      visible={visible}
      toggleModal={toggleStartSessionModal}
    >
      <View style={styles.container}>
        <View style={styles.tasksContainer}>
          <ScrollView
            style={styles.tasksWrapper}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <SelectedTaskItem />
            <SelectedTaskItem />
            <SelectedTaskItem />
            <SelectedTaskItem />
            <SelectedTaskItem />
            <SelectedTaskItem />
          </ScrollView>
        </View>
        <Pressable
          onPress={toggleTimePickerModal}
          style={styles.durationContainer}
        >
          <View style={styles.durationWrapper}>
            <View style={{ flex: 3 }}>
              <SmallTxt color={Theme.colors.greyText}>From</SmallTxt>
              <TxtBolder color={Theme.colors.secondaryDark200}>
                {currentTime}
              </TxtBolder>
            </View>
            <View
              style={{
                flex: 1,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowIcon />
            </View>
            <View style={{ flex: 3 }}>
              <SmallTxt color={Theme.colors.greyText}>To</SmallTxt>
              <TxtBolder color={Theme.colors.secondaryDark200}>
                {endTime}
              </TxtBolder>
            </View>
          </View>
        </Pressable>
      </View>
    </BaseModal>
  );
};

SelectedTaskItem.defaultProps = {
  title: "Task 1",
  notes:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribuseius debitis rem quibusdam autem tempora, dicta iste, voluptate",
  hour: "01",
  minute: "30",
};
function SelectedTaskItem({ title, notes, hour, minute }) {
  const taskDuration = useTimeToDecimal(hour, minute);
  return (
    <View style={{ flexDirection: "row", marginTop: 20 }}>
      <View style={{ paddingTop: 5 }}>
        <RadioItem color={Theme.colors.monoLight} />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <View>
          <TitleTextContainer>
            <Txt color={Theme.colors.monoLight}>{title}</Txt>
            <DotIcon color={Theme.colors.monoLight} />
            <Txt color={Theme.colors.monoLight}>{taskDuration}h</Txt>
          </TitleTextContainer>
        </View>
        <View>
          <SmallTxt color={Theme.colors.monoLight}>{notes}</SmallTxt>
        </View>
      </View>
    </View>
  );
}
export default StartSessionModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  tasksContainer: {
    flex: 3,
  },
  tasksWrapper: {
    backgroundColor: Theme.colors.secondary,
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  durationContainer: {
    flex: 1,
  },
  durationWrapper: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Theme.colors.secondaryDark200,
    marginVertical: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
