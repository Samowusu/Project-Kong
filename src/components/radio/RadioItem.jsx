import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import CheckedRadioIcon from "../../../assets/svgs/checkedRadioIcon";
import UncheckedRadioIcon from "../../../assets/svgs/uncheckedRadioIcon";

const RadioIcon = ({ val, color }) => {
  if (val) {
    return <CheckedRadioIcon color={color} />;
  }

  return <UncheckedRadioIcon color={color} />;
};

export default function RadioItem({ selected, onChange, color }) {
  return (
    <Pressable onPress={onChange}>
      <RadioIcon val={selected} color={color} />
    </Pressable>
  );
}
