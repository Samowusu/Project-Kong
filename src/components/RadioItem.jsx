import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import CheckedRadioIcon from "../../assets/svgs/checkedRadioIcon";
import UncheckedRadioIcon from "../../assets/svgs/uncheckedRadioIcon";

const RadioIcon = ({ val }) => {
  if (val) {
    return <CheckedRadioIcon />;
  }

  return <UncheckedRadioIcon />;
};

export default function RadioItem({ selected, onChange }) {
  return (
    <Pressable onPress={onChange}>
      <RadioIcon val={selected} />
    </Pressable>
  );
}
