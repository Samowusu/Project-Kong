import { StyleSheet, View, Image, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { Txt, TxtBold } from "../../screens/Landing/LandingStyles";
import styled from "styled-components/native";
import { Theme } from "../../config/theme";
import RadioItem from "../radio/RadioItem";
import DragHandleIcon from "../../../assets/svgs/dragHandleIcon";
import DotIcon from "../../../assets/svgs/dotIcon";
import useTimeToDecimal from "../../hooks/useTimeToDecimal";

export const TASK_ITEM_HEIGHT = 70;

TaskItem.defaultProps = {
  selectTasks: false,
  title: "Task 1",
  hour: "03",
  minute: "30",
  drag: () => {},
  isActive: false,
  notes:
    "Task Items Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi neque deleniti facilis, deserunt eos debitis inventore temporibus unde numquam! Iure, repellat perferendis? Nam, sequi. Facere reiciendis saepe tenetur nostrum cumque.",
};
export function TaskItem({
  title,
  drag,
  isActive,
  notes,
  selectTasks,
  checkTaskHandler,
  selected,
  hour,
  minute,
}) {
  const [showNoteState, setShowNoteState] = useState(false);
  const taskDuration = useTimeToDecimal(hour, minute);

  const onToggleTaskNotes = () => {
    if (notes.trim().length > 0) {
      setShowNoteState((prevState) => !prevState);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Pressable
        onPress={onToggleTaskNotes}
        onLongPress={drag}
        disabled={isActive}
      >
        <View style={styles.Titlecontainer}>
          <TitleTextContainer>
            <Txt color={Theme.colors.secondaryDark}>{title}</Txt>

            <DotIcon marginHorizontal={8} />

            <Txt color={Theme.colors.monoDark}>{taskDuration}h</Txt>
          </TitleTextContainer>
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
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
`;
