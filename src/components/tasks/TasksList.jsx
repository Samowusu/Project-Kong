import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
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
  ],
  onTogglePlayButton: (val) => console.log(val),
};
export function TasksList({ newTasks, onTogglePlayButton }) {
  const [tasksDataState, setTasksDataState] = useState(newTasks);

  const [chooseTasksState, setChooseTasksState] = useState(false);
  //   const [selectedTasksState, setSelectedTasksState] = useState([]);

  //   const selectTaskHandler = (value) => {
  //     setSelectedTasksState((prevState) => {
  //       const found = prevState.find((taskId) => taskId === value);
  //       if (found) {
  //         return prevState.filter((taskId) => taskId !== found);
  //       } else {
  //         return [...prevState, value];
  //       }
  //     });
  //   };
  const [selectedTasksState, selectTaskHandler, setSelectedTasksState] =
    useSelectTasks();

  //Item to render in the draggable list
  const renderItem = ({ item, drag, isActive }) => {
    return (
      <ScaleDecorator>
        <TaskItem
          title={item.title}
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
              <Pressable>
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
    marginTop: 40,
    // borderWidth: 1,
    // borderColor: "red",
    flex: 1,
    position: "relative",
    backgroundColor: Theme.colors.monoLight200,
  },
  tasksList: {
    // borderWidth: 1,
    // borderColor: "black",
    width: "100%",
    height: "100%",
    paddingHorizontal: 15,
  },
  tasksListTitles: {
    // borderWidth: 1,
    // borderColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
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
