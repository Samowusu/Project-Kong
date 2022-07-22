import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DateCard from "../../components/DateCard";
import Calendar from "../../components/Calendar";
import Tasks from "../../components/Tasks";
import ActionModal from "../../components/ActionModal";
import TimePickerModal from "../../components/TimePickerModal";
import CreateTaskModal from "../../components/CreateTaskModal";
import TaskItem from "../../components/TaskItem";
import RadioItem from "../../components/RadioItem";
import StartSessionModal from "../../components/StartSessionModal";

export default function Glossary() {
  return <StartSessionModal />;
  return (
    <View>
      <DateCard />
      <Calendar />
      <Tasks />
      <TaskItem />
      <RadioItem />
      <ActionModal />
      <TimePickerModal />
      <CreateTaskModal />
      <StartSessionModal />
    </View>
  );
}

const styles = StyleSheet.create({});
