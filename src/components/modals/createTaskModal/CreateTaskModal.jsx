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
}) {
  // const toggleCreateTaskModalHandler = () => {
  //   toggleCreateTaskModal();
  //   setShowNoteInputState(false);
  // };

  // const toggleTimePickerModalHandler = () => {
  //   toggleTimePickerModal();
  // };
  return (
    <BaseModal
      title="Create Task"
      firstButtonText={"cancel"}
      secondButtonText={"add task"}
      buttons
    >
      <CreateTask />
    </BaseModal>
  );
}
