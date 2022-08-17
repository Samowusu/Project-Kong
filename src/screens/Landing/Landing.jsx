import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  Container,
  Txt,
  TxtBold,
  TxtBolder,
  MediumTxt,
  BoldMediumTxt,
  LargerTxt,
  LargeTxt,
} from "./LandingStyles";
import { Calendar } from "../../components/calendar/Calendar";
import { FloatingButton, Tasks } from "../../components/tasks/Tasks";
import { CreateTaskModal } from "../../components/modals/createTaskModal/CreateTaskModal";
import { TimePickerModal } from "../../components/modals/timePickerModal/TimePickerModal";
import DateCard from "../../components/calendar/DateCard";
import Scroll, { DoubleScroller } from "../../components/scroller/Scroller";
import { TaskItem } from "../../components/tasks/TaskItem";
import Glossary from "../Glossary/Glossary";
import { StartSessionModal } from "../../components/modals/startSessionModal/StartSessionModal";
import { AddTaskImage } from "../../components/tasks/AddTaskImage";
import { TasksList } from "../../components/tasks/TasksList";
import { get } from "react-native/Libraries/Utilities/PixelRatio";
import useSelectTasks from "../../hooks/useSelectTasks";

const DUMMY_TASKS = [
  { title: "Task 1", key: "one" },
  { title: "Task 2", key: "two" },
  { title: "Task 3", key: "three" },
  { title: "Task 4", key: "four" },
  { title: "Task 5", key: "five" },
  { title: "Task 6", key: "six" },
  { title: "Task 7", key: "seven" },
  { title: "Task 8", key: "eight" },
  { title: "Task 9", key: "nine" },
  { title: "Task 10", key: "ten" },
  { title: "Task 11", key: "eleven" },
  { title: "Task 12", key: "twelve" },
  { title: "Task 13", key: "thirteen" },
];

export default function Landing() {
  const [showCreateTaskModalState, setShowCreateTaskModalState] =
    useState(false);
  const [showTimePickerModal, setShowTimePickerModal] = useState(false);
  const [showStartSessionModal, setShowStartSessionModal] = useState(false);
  const [selectedHourState, setSelectedHourState] = useState("00");
  const [selectedMinuteState, setSelectedMinuteState] = useState("00");
  const [enteredTasksState, setEnteredTasksState] = useState([]);
  const [chooseTasksState, setChooseTasksState] = useState(false);

  const [selectedTasksKeys] = useSelectTasks();

  const getData = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const jsonValue = await AsyncStorage.getItem("addedTasks");
        resolve(jsonValue != null ? JSON.parse(jsonValue) : null);
      } catch (e) {
        // error reading value
      }
    });
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("addedTasks", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const initFxn = async () => {
    const enteredTasks = await getData();
    // console.log({ enteredTasksVal: enteredTasks ?? [], enteredTasks });
    setEnteredTasksState(enteredTasks ?? []);
  };
  useEffect(() => {
    initFxn();
  }, []);

  // when all tasks are deleted, switch the floating button from "play" to "add"
  useEffect(() => {
    if (enteredTasksState?.length < 1) {
      setChooseTasksState(false);
    }
  }, [enteredTasksState]);

  const onAddNewTasks = (val) => {
    setEnteredTasksState((prevState) => {
      const updatedEnteredTasks = [
        ...prevState,
        { ...val, key: Math.random().toString() },
      ];
      storeData(updatedEnteredTasks);
      return updatedEnteredTasks;
    });
    setSelectedHourState("00");
    setSelectedMinuteState("00");
  };

  const onDeleteTasks = (keys) => {
    setEnteredTasksState((prevTasks) => {
      let deletedTasksArray = [];
      let undeletedTasksArray = [];
      for (let i = 0; i < prevTasks?.length; i++) {
        const deleted = keys.includes(prevTasks[i].key);
        if (deleted) {
          deletedTasksArray.push(prevTasks[i]);
        } else {
          undeletedTasksArray.push(prevTasks[i]);
        }
      }
      storeData(undeletedTasksArray);
      return undeletedTasksArray;
    });
  };

  const changeHourHandler = (val) => {
    setSelectedHourState(val);
  };

  const changeMinuteHandler = (val) => {
    setSelectedMinuteState(val);
  };

  const toggleCreateTaskModalHandler = () => {
    setShowCreateTaskModalState((prevState) => !prevState);
  };

  const toggleTimePickerModalHandler = () => {
    setShowTimePickerModal((prevState) => !prevState);
  };

  const toggleStartSessionModalHandler = () => {
    setShowStartSessionModal((prevState) => !prevState);
  };

  // return <Glossary />;
  return (
    <Container>
      <Txt>
        {enteredTasksState?.length >= 1
          ? "Looks like there’s a lot to be done"
          : "A clean slate!"}
      </Txt>
      <LargeTxt>
        {enteredTasksState?.length >= 1
          ? "What shall we start with?"
          : "Let's find something todo..."}
      </LargeTxt>
      <Calendar />
      <View
        style={{
          flex: 1,
          // borderWidth: 1,
          // borderColor: "red",
          position: "relative",
          marginTop: 40,
        }}
      >
        {enteredTasksState?.length >= 1 ? (
          <TasksList
            newTasks={enteredTasksState}
            chooseTasksState={chooseTasksState}
            setChooseTasksState={setChooseTasksState}
            onDelete={onDeleteTasks}
          />
        ) : (
          <AddTaskImage onPress={toggleCreateTaskModalHandler} />
        )}
        <FloatingButton
          toggleCreateTaskModal={toggleCreateTaskModalHandler}
          chooseTasksState={chooseTasksState}
        />
      </View>

      <CreateTaskModal
        toggleCreateTaskModal={toggleCreateTaskModalHandler}
        visible={showCreateTaskModalState}
        toggleTimePickerModal={toggleTimePickerModalHandler}
        hour={selectedHourState}
        minute={selectedMinuteState}
        onAddNewTasks={onAddNewTasks}
      />
      <TimePickerModal
        visible={showTimePickerModal}
        toggleModal={toggleTimePickerModalHandler}
        onChangeHour={changeHourHandler}
        onChangeMinute={changeMinuteHandler}
      />
      {/* <StartSessionModal
        toggleTimePickerModal={toggleTimePickerModalHandler}
        hour={selectedHourState}
        minute={selectedMinuteState}
        visible={showStartSessionModal}
        toggleStartSessionModal={toggleStartSessionModalHandler}
      /> */}
    </Container>
  );
}

const styles = StyleSheet.create({});

//my deleting tasks logic

// let deletedTasksArray = [];
// let undeletedTasksArray = [];
// for (i = 0; i < prevTasks?.length; i++) {
//   const deleted = keys.includes(prevTasks[i].key);
//   if (deleted) {
//     deletedTasksArray.push(prevTasks[i]);
//   } else {
//     undeletedTasksArray.push(prevTasks[i]);
//   }
// }
// storeData(undeletedTasksArray);
// return undeletedTasksArray;

// const results = tasks.filter((task)=> keys.includes(task.key))
