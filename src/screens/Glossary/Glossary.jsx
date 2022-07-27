import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { DateCard } from "../../components/calendar/DateCard";
import { Calendar } from "../../components/calendar/Calendar";
import { Tasks } from "../../components/tasks/Tasks";
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
import { Button } from "../../components/commons/Button";
import { CountdownAnimation } from "../../components/animations/CountdownAnimation";
import { Countdown } from "../../components/countdown/Countdown";
import { StartSessionBubble } from "../../components/modals/startSessionModal/StartSessionBubble";
import { SessionInProgress } from "../../components/sessionInProgress/SessionInProgress";

export default function Glossary() {
  return <Countdown />;
  return (
    <ScrollView>
      <Button />
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
      {/* <TimePickerModal /> */}
      {/* <StartSessionModal /> */}
      {/* <BaseModal />
      <CreateTaskModal /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
