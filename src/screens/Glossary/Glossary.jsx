import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DateCard from "../../components/DateCard";
import Calendar from "../../components/Calendar";
import Tasks from "../../components/Tasks";
import ActionModal from "../../components/ActionModal";
import TimePickerModal from "../../components/TimePickerModal";
import CreateTaskModal from "../../components/CreateTaskModal";

export default function Glossary() {
  return (
    <View>
      <DateCard />
      <Calendar />
      <Tasks />
      <ActionModal />
      <TimePickerModal />
      <CreateTaskModal />
    </View>
  );
}

const styles = StyleSheet.create({});
