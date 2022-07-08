import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import ActionModal from "./ActionModal";
import PlusIcon from "../../assets/svgs/plusIcon";

CreateTaskModal.defaultProps = {
  visible: true,
  toggleCreateTaskModal: () => {
    console.log("toggle create task modal");
  },
  toggleTimePickerModal: () => {
    console.log("toggle time picker modal");
  },
  hour: "03",
  minute: "30",
};

export default function CreateTaskModal({
  visible,
  toggleCreateTaskModal,
  toggleTimePickerModal,
  hour,
  minute,
}) {
  const [showNoteInputState, setShowNoteInputState] = useState(false);

  const toggleCreateTaskModalHandler = () => {
    toggleCreateTaskModal();
    setShowNoteInputState(false);
  };

  const toggleTimePickerModalHandler = () => {
    toggleTimePickerModal();
  };
  return (
    <ActionModal
      visible={visible}
      toggleModal={toggleCreateTaskModalHandler}
      modalHeight={2}
      title="Create Task"
      firstButtonText={"delete"}
      secondButtonText={"add task"}
      buttons
    >
      <View style={styles.inputContainer}>
        <TextInput placeholder="Title" style={styles.inputTitleText} />
        {showNoteInputState && (
          <TextInput
            placeholder="Enter note..."
            style={styles.inputNotesText}
            multiline={true}
            numberOfLines={4}
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
    </ActionModal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "rgba(242, 242, 242, 0.5)",
    borderRadius: 20,
    padding: 15,
  },

  inputTitleText: {
    color: "#909CC6",
    fontSize: 21,
    fontFamily: "Poppins_500Medium",
    // borderBottomColor: "rgba(112, 112, 112, 0.19)",
    // borderBottomWidth: 1,
  },
  inputNotesText: {
    color: "rgba(0, 0, 0, 0.27)",
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },
  addNoteButton: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  addNoteButtonText: {
    color: "#909CC6",
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
    width: 150,
    borderColor: "#909CC6",
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 20,
  },
  durationText: {
    color: "rgba(0, 0, 0, 0.27)",
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
  },
  timerText: {
    color: "#909CC6",
    fontFamily: "Poppins_500Medium",
    fontSize: 45,

    textAlignVertical: "center",
  },
});
