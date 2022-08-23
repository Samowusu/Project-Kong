import { StyleSheet, View, ScrollView, Pressable } from "react-native";
import { useState } from "react";
import { Theme } from "../../../config/theme";
import { SelectedTaskItem } from "./SelectedTaskItem";
import { LargerTxt } from "../../../screens/Landing/LandingStyles";
import useSelectTasks from "../../../hooks/useSelectTasks";

StartSessionBubble.defaultProps = {
  selectedTasks: [
    {
      title: "Task 1",
      notes:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribuseius debitis rem quibusdam autem tempora, dicta iste, voluptate",
      hour: "01",
      minute: "30",
    },
    {
      title: "Task 2",
      notes:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribuseius debitis rem quibusdam autem tempora, dicta iste, voluptate",
      hour: "01",
      minute: "30",
    },
    {
      title: "Task 3",
      notes:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribuseius debitis rem quibusdam autem tempora, dicta iste, voluptate",
      hour: "01",
      minute: "30",
    },
  ],
  header: true,
};
export function StartSessionBubble({
  selectedTasks,
  header,
  showTaskDuration,
}) {
  // ==SHOULD BE A HOOK==
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

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Theme.colors.secondary,
        borderRadius: 20,
      }}
    >
      {header && (
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: Theme.colors.monoLight,
            backgroundColor: Theme.colors.secondary,
            marginHorizontal: 20,
            paddingVertical: 15,
          }}
        >
          <LargerTxt color={Theme.colors.monoLight}>15.13 - 18.43</LargerTxt>
        </View>
      )}
      <ScrollView
        style={styles.tasksWrapper}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {selectedTasks.map((task) => (
          <SelectedTaskItem
            key={task.key}
            hour={task.hour}
            minute={task.minute}
            notes={task.notes}
            title={task.title}
            showTaskDuration={showTaskDuration}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tasksWrapper: {
    backgroundColor: Theme.colors.secondary,
    flex: 1,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});
