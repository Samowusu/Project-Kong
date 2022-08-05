import React from "react";
import { BaseModal } from "../BaseModal";
import { TimePicker } from "./TimePicker";

TimePickerModal.defaultProps = {
  visible: true,
  toggleModal: () => {
    console.log("toggle modal");
  },
  onChangeHour: () => {
    console.log("change hour");
  },
  onChangeMinute: () => {
    console.log("change minute");
  },
};

export function TimePickerModal({
  visible,
  toggleModal,
  onChangeHour,
  onChangeMinute,
}) {
  return (
    <BaseModal
      modalHeight={1.2}
      title={"Create task"}
      visible={visible}
      duration
      toggleModal={toggleModal}
      buttons={false}
    >
      <TimePicker
        onChangeHour={onChangeHour}
        onChangeMinute={onChangeMinute}
        toggleModal={toggleModal}
      />
    </BaseModal>
  );
}
