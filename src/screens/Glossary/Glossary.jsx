import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DateCard from "../../components/calendar/DateCard";
import Calendar from "../../components/calendar/Calendar";
import Tasks from "../../components/task/Tasks";
import BaseModal from "../../components/modal/BaseModal";
import TimePickerModal from "../../components/modal/TimePickerModal";
import CreateTaskModal from "../../components/modal/CreateTaskModal";
import TaskItem from "../../components/task/TaskItem";
import RadioItem from "../../components/radio/RadioItem";
import StartSessionModal from "../../components/modal/StartSessionModal";
import { DoubleScroller } from "../../components/scroller/Scroller";

export default function Glossary() {
  return <StartSessionModal />;
  return (
    <View>
      <DateCard />
      <Calendar />
      <Tasks />
      <TaskItem />
      <RadioItem />
      <BaseModal />
      <TimePickerModal />
      <CreateTaskModal />
      <StartSessionModal />
      <DoubleScroller />
    </View>
  );
}

const styles = StyleSheet.create({});
