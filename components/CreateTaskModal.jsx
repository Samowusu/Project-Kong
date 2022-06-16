import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import PlusIcon from "../assets/svgs/plusIcon";

export default function CreateTaskModal({ visible, toggleModal }) {
  const [showNoteInputState, setShowNoteInputState] = useState(false);

  const disableModalHandler = () => {
    toggleModal();
    setShowNoteInputState(false);
  };
  return (
    <Modal visible={visible} animationType={"slide"} transparent={true}>
      <TouchableWithoutFeedback onPress={disableModalHandler}>
        <View style={styles.disableModal}></View>
      </TouchableWithoutFeedback>
      <View style={styles.modalContainer}>
        <View style={styles.newTasksContainer}>
          <Text style={styles.titleText}>Create Task</Text>
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
            <View style={styles.duration}>
              <Text style={styles.durationText}>Duration</Text>
              <Text style={styles.timerText}>03.30</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable>
            <Text style={{ ...styles.titleText, color: "#fff" }}>DELETE</Text>
          </Pressable>
          <Pressable>
            <View style={styles.addTaskButton}>
              <Text style={styles.titleText}>Add Task</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  disableModal: {
    flex: 2,
    backgroundColor: "transparent",
  },
  modalContainer: {
    flex: 3,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderRadius: 50,
    backgroundColor: "#01D9F7",
  },
  newTasksContainer: {
    flex: 5,
    padding: 20,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  titleText: {
    fontSize: 21,
    fontFamily: "Poppins_500Medium",
    color: "#01D9F7",
    textTransform: "uppercase",
  },
  inputContainer: {
    backgroundColor: "rgba(242, 242, 242, 0.5)",
    borderRadius: 20,
    padding: 15,
    marginTop: 20,
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

    marginTop: 26,
  },
  duration: {
    width: 200,
    borderColor: "#909CC6",
    borderWidth: 1,
    borderRadius: 30,
    paddingTop: 10,
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
    fontSize: 58,
  },
  buttonsContainer: {
    flex: 1,
    borderRadius: 50,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
  },
  addTaskButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
});
