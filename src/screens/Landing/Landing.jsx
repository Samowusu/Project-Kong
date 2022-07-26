import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Container, Txt, TxtBold } from "./LandingStyles";
import Calendar from "../../components/calendar/Calendar";
import Tasks from "../../components/task/Tasks";
import CreateTaskModal from "../../components/modal/CreateTaskModal";
import TimePickerModal from "../../components/modal/TimePickerModal";
import DateCard from "../../components/calendar/DateCard";
import Scroll, { DoubleScroller } from "../../components/scroller/Scroller";
import TaskItem from "../../components/task/TaskItem";
import Glossary from "../Glossary/Glossary";
import StartSessionModal from "../../components/modal/StartSessionModal";

const DUMMY_TASKS = [
  { title: "Task 1", key: "one" },
  { title: "Task 2", key: "two" },
  { title: "Task 3", key: "three" },
  { title: "Task 4", key: "four" },
  { title: "Task 5", key: "five" },
  { title: "Task 6", key: "six" },
  { title: "Task 7", key: "seven" },
  { title: "Task 8", key: "eight" },
  { title: "Task 9", key: "nine" },
  { title: "Task 10", key: "ten" },
  { title: "Task 11", key: "eleven" },
  { title: "Task 12", key: "twelve" },
  { title: "Task 13", key: "thirteen" },
];

export default function Landing() {
  const [showCreateTaskModalState, setShowCreateTaskModalState] =
    useState(false);
  const [showTimePickerModal, setShowTimePickerModal] = useState(false);
  const [showStartSessionModal, setShowStartSessionModal] = useState(false);
  const [selectedHourState, setSelectedHourState] = useState("03");
  const [selectedMinuteState, setSelectedMinuteState] = useState("30");

  const changeHourHandler = (val) => {
    setSelectedHourState(val);
  };

  const changeMinuteHandler = (val) => {
    setSelectedMinuteState(val);
  };

  const toggleCreateTaskModalHandler = () => {
    setShowCreateTaskModalState((prevState) => !prevState);
  };

  const toggleTimePickerModalHandler = () => {
    setShowTimePickerModal((prevState) => !prevState);
  };

  const toggleStartSessionModalHandler = () => {
    setShowStartSessionModal((prevState) => !prevState);
  };

  return <StartSessionModal />;
  return (
    <Container>
      <Txt>A clean slate!</Txt>
      <TxtBold>Let's find something to do...</TxtBold>
      <Calendar />
      <Tasks
        toggleCreateTaskModal={toggleCreateTaskModalHandler}
        toggleStartSessionModal={toggleStartSessionModalHandler}
      />
      <CreateTaskModal
        toggleCreateTaskModal={toggleCreateTaskModalHandler}
        visible={showCreateTaskModalState}
        toggleTimePickerModal={toggleTimePickerModalHandler}
        hour={selectedHourState}
        minute={selectedMinuteState}
      />
      <TimePickerModal
        visible={showTimePickerModal}
        toggleModal={toggleTimePickerModalHandler}
        onChangeHour={changeHourHandler}
        onChangeMinute={changeMinuteHandler}
      />
      <StartSessionModal
        toggleTimePickerModal={toggleTimePickerModalHandler}
        hour={selectedHourState}
        minute={selectedMinuteState}
        visible={showStartSessionModal}
        toggleStartSessionModal={toggleStartSessionModalHandler}
      />
    </Container>
  );
}

const styles = StyleSheet.create({});
