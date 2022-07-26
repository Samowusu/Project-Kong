import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import DateCard from "./DateCard";
import Moment from "moment";
import { extendMoment } from "moment-range";
import { Theme } from "../../config/theme";

export default function Calendar() {
  const [datesState, setDatesState] = useState([]);
  const moment = extendMoment(Moment);

  useEffect(() => {
    function getRange(startDate, endDate, type) {
      let fromDate = moment(startDate);
      let toDate = moment(endDate);
      let diff = toDate.diff(fromDate, type);
      let range = [];
      for (let i = 0; i < diff; i++) {
        range.push(moment(startDate).add(i, type));
      }
      return range;
    }

    let yesterday = moment().add(-1, "days");
    let nextTwoDays = moment().add(3, "days");

    let range = getRange(yesterday, nextTwoDays, "days");

    let dateArray = range.map((dateItem) => {
      const date = moment(dateItem).format("D");
      const day = moment(dateItem).format("ddd");
      const month = moment(dateItem).format("MMM");

      return { date, day, month };
    });

    setDatesState(dateArray);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.calendarText}>Calendar</Text>
      <View style={styles.cardList}>
        {datesState?.map((dateObj, index) => (
          <DateCard key={index} dates={dateObj} index={index} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
  },
  calendarText: {
    fontSize: Theme.fonts.m,
    fontFamily: "Poppins_400Regular",
    color: Theme.colors.monoDark,
  },
  cardList: {
    marginTop: 17,
    flexDirection: "row",
  },
});
