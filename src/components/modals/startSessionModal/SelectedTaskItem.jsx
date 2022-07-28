import { View, Pressable } from "react-native";
import { useState } from "react";
import { Theme } from "../../../config/theme";
import { Txt, SmallTxt } from "../../../screens/Landing/LandingStyles";
import { TitleTextContainer } from "../../tasks/TaskItem";
import RadioItem from "../../radio/RadioItem";
import DotIcon from "../../../../assets/svgs/dotIcon";
import useTimeToDecimal from "../../../hooks/useTimeToDecimal";

SelectedTaskItem.defaultProps = {
  title: "Task 1",
  notes:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribuseius debitis rem quibusdam autem tempora, dicta iste, voluptate",
  hour: "01",
  minute: "30",
  showTaskDuration: true,
  showNotes: true,
};
export function SelectedTaskItem({
  title,
  notes,
  hour,
  minute,
  showTaskDuration,
  selected,
  checkTaskHandler,
}) {
  const [showNotesState, setshowNotesState] = useState(true);
  const taskDuration = useTimeToDecimal(hour, minute);

  const toggleTaskNotesHandler = () => {
    setshowNotesState((prevState) => !prevState);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 20,
        backgroundColor: Theme.colors.secondary,
      }}
    >
      <View style={{ paddingTop: 5 }}>
        <RadioItem
          uncheckedColor={Theme.colors.monoLight}
          checkedColor={Theme.colors.taskComplete}
          selected={selected}
          onChange={checkTaskHandler}
        />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        {showTaskDuration ? (
          <TitleTextContainer>
            <Txt color={Theme.colors.monoLight}>{title}</Txt>
            {showTaskDuration && <DotIcon color={Theme.colors.monoLight} />}
            {showTaskDuration && (
              <Txt color={Theme.colors.monoLight}>{taskDuration}h</Txt>
            )}
          </TitleTextContainer>
        ) : (
          <Pressable onPress={toggleTaskNotesHandler}>
            <TitleTextContainer>
              <Txt color={Theme.colors.monoLight}>{title}</Txt>
              {showTaskDuration && <DotIcon color={Theme.colors.monoLight} />}
              {showTaskDuration && (
                <Txt color={Theme.colors.monoLight}>{taskDuration}h</Txt>
              )}
            </TitleTextContainer>
          </Pressable>
        )}
        {showNotesState && (
          <View>
            <SmallTxt color={Theme.colors.monoLight}>{notes}</SmallTxt>
          </View>
        )}
      </View>
    </View>
  );
}
