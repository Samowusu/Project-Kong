import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import CheckedRadioIcon from "../../../assets/svgs/checkedRadioIcon";
import UncheckedRadioIcon from "../../../assets/svgs/uncheckedRadioIcon";

const RadioIcon = ({ val, checkedColor, uncheckedColor }) => {
  if (val) {
    return <CheckedRadioIcon color={checkedColor} />;
  }

  return <UncheckedRadioIcon color={uncheckedColor} />;
};

export default function RadioItem({
  selected,
  onChange,
  checkedColor,
  uncheckedColor,
}) {
  return (
    <Pressable onPress={onChange}>
      <RadioIcon
        val={selected}
        checkedColor={checkedColor}
        uncheckedColor={uncheckedColor}
      />
    </Pressable>
  );
}
