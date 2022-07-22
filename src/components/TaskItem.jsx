import { StyleSheet, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Txt, TxtBold } from "../screens/Landing/LandingStyles";
import styled from "styled-components/native";
import { Theme } from "../theme/default";
import RadioItem from "./RadioItem";
import DragHandleIcon from "../../assets/svgs/dragHandleIcon";
import DotIcon from "../../assets/svgs/dotIcon";

export const TASK_ITEM_HEIGHT = 70;

TaskItem.defaultProps = {
  title: "Task 1",
  drag: () => {},
  isActive: false,
  notes:
    "Task Items Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi neque deleniti facilis, deserunt eos debitis inventore temporibus unde numquam! Iure, repellat perferendis? Nam, sequi. Facere reiciendis saepe tenetur nostrum cumque.",
};
export default function TaskItem({
  title,
  drag,
  isActive,
  notes,
  selectTasks,
  checkTaskHandler,
  selected,
}) {
  const [showNoteState, setShowNoteState] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Pressable
        onPress={() => setShowNoteState((prevState) => !prevState)}
        onLongPress={drag}
        disabled={isActive}
      >
        <View style={styles.Titlecontainer}>
          <View style={styles.titleTextContainer}>
            <Txt color={Theme.colors.secondaryDark}>{title}</Txt>

            {showNoteState && <DotIcon />}
            {showNoteState && <Txt color={Theme.colors.monoDark}>1.5h</Txt>}
          </View>
          {selectTasks ? (
            <RadioItem onChange={checkTaskHandler} selected={selected} />
          ) : (
            <DragHandleIcon />
          )}
        </View>
        {showNoteState && (
          <View style={styles.taskNotesContainer}>
            <Txt color={Theme.colors.monoDark}>{notes}</Txt>
          </View>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // borderWidth: 1,
    // borderColor: "red",
    padding: 20,
    borderRadius: 20,
    // height: TASK_ITEM_HEIGHT,
    backgroundColor: Theme.colors.monoLight,
    marginTop: 10,
  },
  Titlecontainer: {
    // borderWidth: 1,
    // borderColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleTextContainer: {
    // borderWidth: 1,
    // borderColor: "blue",
    minWidth: 90,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskDurationContainer: {
    flexDirection: "row",
    marginLeft: 5,
  },
  taskNotesContainer: {
    marginTop: 10,
  },
});

export const TitleTextContainer = styled.View`
  width: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
