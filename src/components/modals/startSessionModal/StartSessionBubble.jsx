import { StyleSheet, View, ScrollView, Pressable } from "react-native";
import { Theme } from "../../../config/theme";
import { SelectedTaskItem } from "./SelectedTaskItem";
import { LargeTxt } from "../../../screens/Landing/LandingStyles";

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
      title: "Task 1",
      notes:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribuseius debitis rem quibusdam autem tempora, dicta iste, voluptate",
      hour: "01",
      minute: "30",
    },
    {
      title: "Task 1",
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
          <LargeTxt color={Theme.colors.monoLight}>15.13 - 18.43</LargeTxt>
        </View>
      )}
      <ScrollView
        style={styles.tasksWrapper}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {selectedTasks.map((task, index) => (
          <SelectedTaskItem
            key={index}
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
