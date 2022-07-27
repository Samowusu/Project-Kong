import { View, Pressable, StyleSheet, Text } from "react-native";
import { Theme } from "../../config/theme";

Button.defaultProps = {
  children: <Text>Button...</Text>,
  onPress: () => console.log("button pressed"),
};

export function Button({ children, onPress }) {
  return (
    <View style={{ ...styles.buttonContainer, ...styles.boxWithShadow }}>
      <Pressable onPress={onPress}>
        <View style={{ ...styles.button, ...styles.boxWithShadow }}>
          {children}
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    // alignItems: "center",
    // borderWidth: 1,
    // borderColor: "black",
    position: "absolute",
    left: "40%",
    bottom: "5%",
    borderRadius: 100,
    zIndex: 100,
  },
  button: {
    backgroundColor: Theme.colors.primary,
    width: "100%",
    height: "100%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
