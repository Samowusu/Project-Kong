import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Container, Txt, TxtBold } from "./LandingStyles";
import Calendar from "../../components/Calendar";
import Tasks from "../../components/Tasks";
import CreateTaskModal from "../../components/CreateTaskModal";

export default function Landing() {
  const [showModalState, setShowModalState] = useState(false);

  const toggleModalHandler = () => {
    setShowModalState((prevState) => !prevState);
  };

  return (
    <Container>
      <Txt>A clean slate!</Txt>
      <TxtBold>Let's find something to do...</TxtBold>
      <Calendar />
      <Tasks onPress={toggleModalHandler} />
      <CreateTaskModal
        toggleModal={toggleModalHandler}
        visible={showModalState}
      />
    </Container>
  );
}

const styles = StyleSheet.create({});
