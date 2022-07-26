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
import AddIcon from "../../../assets/svgs/addIcon";
import { TxtBold } from "../../screens/Landing/LandingStyles";
import TaskItem, { MovableTask, TASK_ITEM_HEIGHT } from "./TaskItem";
import { Theme } from "../../config/theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DotIcon from "../../../assets/svgs/dotIcon";
import PlayIcon from "../../../assets/svgs/playIcon";

Tasks.defaultProps = {
  onPress: () => {
    console.log("pressed");
  },
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
    { title: "Task 12", key: "twelve" },
    { title: "Task 13", key: "thirteen" },
  ],
};

export default function Tasks({
  toggleCreateTaskModal,
  toggleStartSessionModal,
  newTasks,
}) {
  const [tasksDataState, setTasksDataState] = useState(newTasks);
  const [chooseTasksState, setChooseTasksState] = useState(false);
  const [selectedTasksState, setSelectedTasksState] = useState([]);

  const selectTaskHandler = (value) => {
    setSelectedTasksState((prevState) => {
      const found = prevState.find((taskId) => taskId === value);
      if (found) {
        return prevState.filter((taskId) => taskId !== found);
      } else {
        return [...prevState, value];
      }
    });
  };

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
      {/* <Pressable onPress={onPress}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/todo.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.taskText}>CLICK TO ADD TASKS</Text>
      </Pressable> */}

      {/* Tasks Lists */}
      <View style={styles.tasksList}>
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
                }}
              >
                <TxtBold color={Theme.colors.primary}>CANCEL</TxtBold>
              </Pressable>
            </View>
          ) : (
            <Pressable
              onPress={() => setChooseTasksState((prevState) => !prevState)}
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

      {/* Add/Play Button */}
      {/* <View style={{ ...styles.buttonContainer, ...styles.boxWithShadow }}>
        <Pressable onPress={onPress}>
          <View style={{ ...styles.button, ...styles.boxWithShadow }}>
            <AddIcon />
          </View>
        </Pressable>
      </View> */}
      {chooseTasksState ? (
        <Button onPress={toggleStartSessionModal}>
          <PlayIcon />
        </Button>
      ) : (
        <Button onPress={toggleCreateTaskModal}>
          <AddIcon />
        </Button>
      )}
    </GestureHandlerRootView>
  );
}

function Button({ children, onPress }) {
  return (
    <View style={{ ...styles.buttonContainer, ...styles.boxWithShadow }}>
      <Pressable onPress={onPress}>
        <View style={{ ...styles.button, ...styles.boxWithShadow }}>
          {children}
        </View>
      </Pressable>
    </View>
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
  imageContainer: {
    width: 250,
    height: 250,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "contain",
  },
  taskText: {
    marginTop: 10,
    textAlign: "center",
    color: Theme.colors.secondaryDark200,
    fontFamily: "Poppins_500Medium",
    fontSize: Theme.fonts.l,
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

  buttonContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    // alignItems: "center",
    // borderWidth: 1,
    // borderColor: "black",
    position: "absolute",
    left: "40%",
    bottom: "5%",
    borderRadius: 100,
    zIndex: 100,
  },
  button: {
    backgroundColor: Theme.colors.primary,
    width: "100%",
    height: "100%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: Theme.colors.monoLight,
  },
  boxWithShadow: {
    shadowColor: "rgba(5, 218, 247, 0.729)",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 8,
  },
});
