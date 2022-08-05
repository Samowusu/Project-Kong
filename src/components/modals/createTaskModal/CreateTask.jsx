import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import PlusIcon from "../../../../assets/svgs/plusIcon";
import { Theme } from "../../../config/theme";

CreateTask.defaultProps = {
  hour: "03",
  minute: "30",
  toggleTimePickerModalHandler: () => console.log("toggle time handler"),
};
export function CreateTask({
  hour,
  minute,
  toggleTimePickerModalHandler,
  titleValue,
  onChangeTitle,
  noteValue,
  onChangeNote,
}) {
  const [showNoteInputState, setShowNoteInputState] = useState(false);

  // const toggleCreateTaskModalHandler = () => {
  //   toggleCreateTaskModal();
  //   setShowNoteInputState(false);
  // };

  // const toggleTimePickerModalHandler = () => {
  //   toggleTimePickerModal();
  // };

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Title"
          style={styles.inputTitleText}
          value={titleValue}
          onChangeText={(title) => onChangeTitle(title)}
        />
        {showNoteInputState && (
          <TextInput
            placeholder="Enter note..."
            style={styles.inputNotesText}
            multiline={true}
            numberOfLines={4}
            value={noteValue}
            onChangeText={(note) => onChangeNote(note)}
          />
        )}
      </View>
      {!showNoteInputState && (
        <Pressable
          onPress={() => setShowNoteInputState((prevState) => !prevState)}
        >
          <View style={styles.addNoteButton}>
            <PlusIcon />
            <Text style={styles.addNoteButtonText}>Add note</Text>
          </View>
        </Pressable>
      )}

      <View style={styles.durationContainer}>
        <Pressable onPress={toggleTimePickerModalHandler}>
          <View style={styles.duration}>
            <Text style={styles.durationText}>Duration</Text>
            <Text style={styles.timerText}>
              {hour}·{minute}
            </Text>
          </View>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "rgba(242, 242, 242, 0.5)",
    borderRadius: 20,
    padding: 15,
  },

  inputTitleText: {
    color: Theme.colors.secondaryDark200,
    fontSize: Theme.fonts.l,
    fontFamily: "Poppins_500Medium",
    // borderBottomColor: "rgba(112, 112, 112, 0.19)",
    // borderBottomWidth: 1,
  },
  inputNotesText: {
    color: "rgba(0, 0, 0, 0.27)",
    fontSize: Theme.fonts.m,
    fontFamily: "Poppins_500Medium",
  },
  addNoteButton: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  addNoteButtonText: {
    color: Theme.colors.secondaryDark200,
    fontSize: 20,
    fontFamily: "Poppins_500Medium",
    textTransform: "uppercase",
    marginLeft: 5,

    textAlignVertical: "center",
    paddingTop: 5,
  },
  durationContainer: {
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "red",
    marginTop: 20,
  },
  duration: {
    width: 190,
    borderColor: Theme.colors.secondaryDark200,
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 20,
    paddingTop: 10,
    backgroundColor: Theme.colors.monoLight200,
  },
  durationText: {
    color: "rgba(0, 0, 0, 0.27)",
    fontFamily: "Poppins_500Medium",
    fontSize: Theme.fonts.s,
  },
  timerText: {
    color: Theme.colors.secondaryDark200,
    fontFamily: "Poppins_500Medium",
    fontSize: Theme.fonts.xxxl,

    textAlignVertical: "center",
  },
});
