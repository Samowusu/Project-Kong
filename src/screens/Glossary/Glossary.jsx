import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DateCard from "../../components/DateCard";
import Calendar from "../../components/Calendar";
import Tasks from "../../components/Tasks";
import CreateTaskModal from "../../components/CreateTaskModal";

export default function Glossary() {
  return (
    <View>
      <DateCard />
      <Calendar />
      <Tasks />
      <CreateTaskModal />
    </View>
  );
}

const styles = StyleSheet.create({});
