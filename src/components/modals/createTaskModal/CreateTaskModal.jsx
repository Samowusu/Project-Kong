import React, { useState, useEffect } from "react";
import { BaseModal } from "../BaseModal";
import { CreateTask } from "./CreateTask";

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

export function CreateTaskModal({
  visible,
  toggleCreateTaskModal,
  toggleTimePickerModal,
  hour,
  minute,
  onAddNewTasks,
}) {
  const [enteredTitleState, setEnteredTitleState] = useState("");
  const [enteredNoteState, setEnteredNoteState] = useState("");
  const [newTaskObjectState, setNewTaskObjectState] = useState({});

  useEffect(() => {
    setNewTaskObjectState({
      title: enteredTitleState,
      notes: enteredNoteState,
      hour: hour,
      minute: minute,
    });
  }, [enteredTitleState, enteredNoteState, hour, minute]);

  const disableCreateTaskModalHandler = () => {
    toggleCreateTaskModal();
    setEnteredNoteState("");
    setEnteredTitleState("");
  };

  // const toggleTimePickerModalHandler = () => {
  //   toggleTimePickerModal();
  // };
  const onAddTask = (val) => {
    onAddNewTasks(val);
    disableCreateTaskModalHandler();
  };
  return (
    <BaseModal
      title="Create Task"
      firstButtonText={"cancel"}
      secondButtonText={"add task"}
      buttons
      visible={visible}
      toggleModal={disableCreateTaskModalHandler}
      modalHeight={1.8}
      onPressSecondButton={() => onAddTask(newTaskObjectState)}
    >
      <CreateTask
        titleValue={enteredTitleState}
        onChangeTitle={setEnteredTitleState}
        noteValue={enteredNoteState}
        onChangeNote={setEnteredNoteState}
        toggleTimePickerModalHandler={toggleTimePickerModal}
        hour={hour}
        minute={minute}
      />
    </BaseModal>
  );
}
