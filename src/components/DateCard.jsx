import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Theme } from "../theme/default";

DateCard.defaultProps = {
  index: 1,
  dates: {
    date: "2",
    month: "May",
    day: "Tue",
  },
};

export default function DateCard({ index, dates: { date, month, day } }) {
  return (
    <View style={styles.cardContainer(index)}>
      <View style={styles.cardContents}>
        <Text style={{ ...styles.dateText(index), fontSize: Theme.fonts.xxl }}>
          {date}
        </Text>
        <Text style={{ ...styles.dateText(index), fontSize: Theme.fonts.m }}>
          {month}
        </Text>
        <View style={styles.borderLine(index)}></View>
        <Text style={{ ...styles.dateText(index), fontSize: Theme.fonts.m }}>
          {day}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: (index) => {
    const condition = index == 1;
    const border = condition ? Theme.colors.primary : Theme.colors.secondary;
    const bgColor = condition ? Theme.colors.primary : "#A4B0FF";

    return {
      borderWidth: 5,
      borderColor: border,
      borderRadius: 16,
      height: 150,
      flex: 1,
      backgroundColor: bgColor,
      marginRight: 10,
    };
  },
  cardContents: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  dateText: (index) => {
    const textColor =
      index == 1 ? Theme.colors.monoLight : Theme.colors.monoDark200;

    return {
      fontFamily: "Poppins_400Regular",
      color: textColor,
      textTransform: "uppercase",
    };
  },

  borderLine: (index) => {
    const border =
      index == 1 ? Theme.colors.monoLight : Theme.colors.monoDark200;

    return {
      borderWidth: 1,
      height: 27,
      borderColor: border,
    };
  },
});
