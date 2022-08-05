import { StyleSheet, View, ScrollView, Pressable } from "react-native";
import { Theme } from "../../../config/theme";
import {
  SmallTxt,
  TxtBolder,
  LargerTxt,
} from "../../../screens/Landing/LandingStyles";
import ArrowIcon from "../../../../assets/svgs/arrowIcon";
import moment from "moment";
import { StartSessionBubble } from "./StartSessionBubble";

StartSessionContainer.defaultProps = {
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
  toggleTimePickerModal: () => console.log("toggle time picker modal"),
  startTime: moment().format("hh: mm A"),
  endTime: moment().add(3, "hours").format("hh: mm A"),
};

export function StartSessionContainer({
  selectedTasks,
  toggleTimePickerModal,
  startTime,
  endTime,
}) {
  // const tasksDuration = 3;
  // const startTime = moment().format("hh: mm A");
  // const endTime = moment().add(tasksDuration, "hours").format("hh: mm A");
  return (
    <View style={styles.container}>
      <View style={styles.tasksContainer}>
        <StartSessionBubble header={false} />
      </View>

      {/* --TASK DURATION-- */}
      <Pressable
        onPress={toggleTimePickerModal}
        style={styles.durationContainer}
      >
        <View style={styles.durationWrapper}>
          <View style={{ flex: 3 }}>
            <SmallTxt color={Theme.colors.greyText}>From</SmallTxt>
            <TxtBolder color={Theme.colors.secondaryDark200}>
              {startTime}
            </TxtBolder>
          </View>
          <View
            style={{
              flex: 1,

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ArrowIcon />
          </View>
          <View style={{ flex: 3 }}>
            <SmallTxt color={Theme.colors.greyText}>To</SmallTxt>
            <TxtBolder color={Theme.colors.secondaryDark200}>
              {endTime}
            </TxtBolder>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  tasksContainer: {
    flex: 3,
  },

  durationContainer: {
    flex: 1,
  },
  durationWrapper: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Theme.colors.secondaryDark200,
    marginVertical: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
