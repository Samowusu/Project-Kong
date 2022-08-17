import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { TaskItem } from "./TaskItem";
import { Theme } from "../../config/theme";
import { TxtBold } from "../../screens/Landing/LandingStyles";
import DotIcon from "../../../assets/svgs/dotIcon";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import useSelectTasks from "../../hooks/useSelectTasks";

TasksList.defaultProps = {
  newTasks: [
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
  ],
  onTogglePlayButton: (val) => console.log(val),
};
export function TasksList({
  newTasks,
  onTogglePlayButton,
  chooseTasksState,
  setChooseTasksState,
  onDelete,
}) {
  const [tasksDataState, setTasksDataState] = useState(newTasks);
  useEffect(() => {
    setTasksDataState(newTasks);
  }, [newTasks]);

  const [selectedTasksState, selectTaskHandler, setSelectedTasksState] =
    useSelectTasks();

  //Item to render in the draggable list
  const renderItem = ({ item, drag, isActive }) => {
    return (
      <ScaleDecorator>
        <TaskItem
          title={item.title}
          notes={item.notes}
          hour={item.hour}
          minute={item.minute}
          drag={drag}
          isActive={isActive}
          selectTasks={chooseTasksState}
          selected={selectedTasksState.includes(item.key)}
          checkTaskHandler={() => selectTaskHandler(item.key)}
        />
      </ScaleDecorator>
    );
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.tasksList}>
        {/* --LIST TITLES CONTAINER-- */}
        <View style={styles.tasksListTitles}>
          <TxtBold color={Theme.colors.secondaryDark200}>TODO</TxtBold>

          {/* Display 'select' or 'delete/cancel' buttons */}
          {chooseTasksState ? (
            <View style={styles.deleteButtonsContainer}>
              <Pressable onPress={() => onDelete(selectedTasksState)}>
                <TxtBold color={Theme.colors.crimson}>DELETE</TxtBold>
              </Pressable>
              <DotIcon />
              <Pressable
                onPress={() => {
                  setChooseTasksState((prevState) => !prevState);
                  setSelectedTasksState([]);
                  onTogglePlayButton(!chooseTasksState);
                }}
              >
                <TxtBold color={Theme.colors.primary}>CANCEL</TxtBold>
              </Pressable>
            </View>
          ) : (
            <Pressable
              onPress={() => {
                setChooseTasksState((prevState) => !prevState);
                onTogglePlayButton(!chooseTasksState);
              }}
            >
              <TxtBold color={Theme.colors.primary}>SELECT</TxtBold>
            </Pressable>
          )}
        </View>

        {/* Draggable list of tasks */}
        <View style={styles.tasksContainer}>
          <DraggableFlatList
            data={tasksDataState}
            onDragEnd={({ data }) => {
              setTasksDataState(data);
            }}
            keyExtractor={(item) => item.key}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          />
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    alignItems: "center",
    // marginTop: 40,
    borderWidth: 1,
    borderColor: "blue",
    flex: 1,
    backgroundColor: Theme.colors.monoLight200,
  },
  tasksList: {
    // borderWidth: 1,
    // borderColor: "black",
    width: "100%",
    height: "100%",
    // paddingHorizontal: 10,
  },
  tasksListTitles: {
    // borderWidth: 1,
    // borderColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
    marginBottom: 20,
  },
  deleteButtonsContainer: {
    flexDirection: "row",

    width: 150,
    justifyContent: "space-between",
    alignItems: "center",
  },
  tasksContainer: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: "green",
  },
});
