import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { DateCard } from "../../components/calendar/DateCard";
import { Calendar } from "../../components/calendar/Calendar";
import { FloatingButton, Tasks } from "../../components/tasks/Tasks";
import { TasksList } from "../../components/tasks/TasksList";
import { AddTaskImage } from "../../components/tasks/AddTaskImage";
import { BaseModal } from "../../components/modals/BaseModal";
import { TimePickerModal } from "../../components/modals/timePickerModal/TimePickerModal";
import { TimePicker } from "../../components/modals/timePickerModal/TimePicker";
import { CreateTaskModal } from "../../components/modals/createTaskModal/CreateTaskModal";
import { CreateTask } from "../../components/modals/createTaskModal/CreateTask";
import { TaskItem } from "../../components/tasks/TaskItem";
import RadioItem from "../../components/radio/RadioItem";
import { StartSessionModal } from "../../components/modals/startSessionModal/StartSessionModal";
import { StartSessionContainer } from "../../components/modals/startSessionModal/StartSessionContainer";
import { SelectedTaskItem } from "../../components/modals/startSessionModal/SelectedTaskItem";
import { DoubleScroller } from "../../components/scroller/Scroller";
import { CustomButton } from "../../components/commons/Button";
import { CountdownAnimation } from "../../components/animations/CountdownAnimation";
import { Countdown } from "../../components/countdown/Countdown";
import { StartSessionBubble } from "../../components/modals/startSessionModal/StartSessionBubble";
import { SessionInProgress } from "../../components/sessionInProgress/SessionInProgress";

export default function Glossary() {
  const [showTimePickerModalState, setShowTimePickerModalState] =
    useState(false);
  const [showStartSessionModalState, setShowStartSessionModalState] =
    useState(false);
  const [showCreateTaskModalState, setShowCreateTaskModalState] =
    useState(false);

  const toggleTimePickerModalHandler = () => {
    setShowTimePickerModalState((prevState) => !prevState);
  };

  const toggleStartSessionModalHandler = () => {
    setShowStartSessionModalState((prevState) => !prevState);
  };

  const toggleCreateTaskModalHandler = () => {
    setShowCreateTaskModalState((prevState) => !prevState);
  };
  return <Countdown />;
  return (
    <ScrollView>
      <CustomButton />
      <DateCard />
      <Calendar />
      <TaskItem />
      <Tasks />
      <RadioItem />
      <CreateTask />
      <SelectedTaskItem />
      <StartSessionContainer />
      <TimePicker />
      <DoubleScroller />
      <AddTaskImage />
      <TasksList />
      <CountdownAnimation />
      <StartSessionBubble />
      <Countdown />
      <SessionInProgress />
      <SimpleButton
        title="Timepicker modal"
        onPress={toggleTimePickerModalHandler}
      />
      <TimePickerModal
        visible={showTimePickerModalState}
        toggleModal={toggleTimePickerModalHandler}
      />
      <SimpleButton
        title="startsession modal"
        onPress={toggleStartSessionModalHandler}
      />
      <StartSessionModal
        visible={showStartSessionModalState}
        toggleStartSessionModal={toggleStartSessionModalHandler}
      />
      <SimpleButton
        title="createtask modal"
        onPress={toggleCreateTaskModalHandler}
      />
      <CreateTaskModal
        visible={showCreateTaskModalState}
        toggleCreateTaskModal={toggleCreateTaskModalHandler}
      />
      {/* <BaseModal /> */}
    </ScrollView>
  );
}

function SimpleButton({ title = "open timepicker", onPress }) {
  return (
    <View
      style={{
        width: "100%",
        height: 60,

        alignItems: "center",
      }}
    >
      <Pressable
        style={{
          width: 150,
          height: "100%",
          borderWidth: 1,
          borderColor: "blue",
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={onPress}
      >
        <Text style={{ fontSize: 15, textTransform: "uppercase" }}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({});
