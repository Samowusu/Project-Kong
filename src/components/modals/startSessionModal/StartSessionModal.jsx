import React from "react";
import { BaseModal } from "../BaseModal";
import { StartSessionContainer } from "./StartSessionContainer";

StartSessionModal.defaultProps = {
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
  toggleTimePickerModal: () =>
    console.log("pass down to start session container"),
  hour: "03",
  minute: "30",
  visible: true,
  toggleStartSessionModal: () => console.log("toggle start session modal"),
};
export function StartSessionModal({
  selectedTasks,
  toggleTimePickerModal,
  hour,
  minute,
  visible,
  toggleStartSessionModal,
}) {
  // LOGIC FOR CUMULATIVE TIME
  //   const tasks = [{hr:'', min: ''},{hr:'', min: ''},{hr:'', min: ''}]
  // let hrsArray = []
  // let minsArray = []
  // loop through tasks and pick hrs and mins
  // tasks.forEach(task => hrsArray.push(task.hr))
  // tasks.forEach(task => minsArray.push(task.min))

  // get the total hrs by summing your hrsArray
  // get total mins and convert to hrs by dividing by 60

  // sum both to get the cumulative hrs
  return (
    <BaseModal
      title={"start session"}
      modalHeight={1.1}
      buttons
      firstButtonText={"cancel"}
      secondButtonText={"start session"}
      visible={visible}
      toggleModal={toggleStartSessionModal}
    >
      <StartSessionContainer selectedTasks={selectedTasks} />
    </BaseModal>
  );
}
