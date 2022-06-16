import { StyleSheet, Text, View } from "react-native";
import React from "react";

DateCard.defaultProps = {
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
        <Text style={{ ...styles.dateText(index), fontSize: 30 }}>{date}</Text>
        <Text style={{ ...styles.dateText(index), fontSize: 18 }}>{month}</Text>
        <View style={styles.borderLine(index)}></View>
        <Text style={{ ...styles.dateText(index), fontSize: 18 }}>{day}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: (index) => {
    const condition = index == 1;
    const border = condition ? "#01D9F7" : "#647AFE";
    const bgColor = condition ? "#01D9F7" : "#A4B0FF";

    return {
      borderWidth: 5,
      borderColor: border,
      borderRadius: 16,
      height: 150,
      width: 85,
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
    const textColor = index == 1 ? "#fff" : "#707070";

    return {
      fontFamily: "Poppins_400Regular",
      color: textColor,
      textTransform: "uppercase",
    };
  },

  borderLine: (index) => {
    const border = index == 1 ? "#fff" : "#707070";

    return {
      borderWidth: 1,
      height: 27,
      borderColor: border,
    };
  },
});
