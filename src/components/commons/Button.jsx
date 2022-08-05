import { View, Pressable, StyleSheet, Text } from "react-native";
import ButtonBase from "../../../assets/svgs/buttonBase";
import { Theme } from "../../config/theme";

CustomButton.defaultProps = {
  children: <Text>BTN...</Text>,
  onPress: () => console.log("button pressed"),
};

export function CustomButton({ children, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <View style={{ position: "absolute", width: "108%", height: "108%" }}>
        <ButtonBase />
      </View>
      <View style={styles.button}>{children}</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "blue",
    borderRadius: 100,
    zIndex: 100,
  },
  button: {
    backgroundColor: Theme.colors.primary,
    width: "80%",
    height: "80%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  boxWithShadow: {
    shadowColor: "rgba(5, 218, 247, 0.729)",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 8,
  },
});
