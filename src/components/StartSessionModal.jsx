import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import ActionModal from "./ActionModal";
import { Theme } from "../theme/default";
import { TitleTextContainer } from "./TaskItem";
import {
  Txt,
  SmallTxt,
  TxtBold,
  TxtBolder,
} from "../screens/Landing/LandingStyles";
import RadioItem from "./RadioItem";
import DotIcon from "../../assets/svgs/dotIcon";
import ArrowIcon from "../../assets/svgs/arrowIcon";

const StartSessionModal = () => {
  return (
    <ActionModal
      title={"start session"}
      modalHeight={1.2}
      buttons
      firstButtonText={"cancel"}
      secondButtonText={"start session"}
    >
      <View style={styles.container}>
        <View style={styles.tasksContainer}>
          <ScrollView
            style={styles.tasksWrapper}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <SelectedTaskItem />
            <SelectedTaskItem />
            <SelectedTaskItem />
            <SelectedTaskItem />
            <SelectedTaskItem />
            <SelectedTaskItem />
          </ScrollView>
        </View>
        <View style={styles.durationContainer}>
          <View style={styles.durationWrapper}>
            <View style={{ flex: 3 }}>
              <SmallTxt color={Theme.colors.greyText}>From</SmallTxt>
              <TxtBolder color={Theme.colors.secondaryDark200}>
                01: 00 PM
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
                02: 00 PM
              </TxtBolder>
            </View>
          </View>
        </View>
      </View>
    </ActionModal>
  );
};

function SelectedTaskItem() {
  return (
    <View style={{ flexDirection: "row", marginTop: 20 }}>
      <View style={{ paddingTop: 5 }}>
        <RadioItem color={Theme.colors.monoLight} />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <View>
          <TitleTextContainer>
            <Txt color={Theme.colors.monoLight}>Task 1</Txt>
            <DotIcon color={Theme.colors.monoLight} />
            <Txt color={Theme.colors.monoLight}>1.5h</Txt>
          </TitleTextContainer>
        </View>
        <View>
          <SmallTxt color={Theme.colors.monoLight}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            eius debitis rem quibusdam autem tempora, dicta iste, voluptate
          </SmallTxt>
        </View>
      </View>
    </View>
  );
}
export default StartSessionModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  tasksContainer: {
    flex: 3,
  },
  tasksWrapper: {
    backgroundColor: Theme.colors.secondary,
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
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
