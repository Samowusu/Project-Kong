import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Theme } from "../../config/theme";

AddTaskImage.defaultProps = {
  onPress: () => console.log("image pressed"),
};
export function AddTaskImage({ onPress }) {
  return (
    <Pressable onPress={onPress} style={{ alignItems: "center" }}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/todo.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.taskText}>CLICK TO ADD TASKS</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 250,
    height: 250,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "contain",
  },
  taskText: {
    marginTop: 10,
    textAlign: "center",
    color: Theme.colors.secondaryDark200,
    fontFamily: "Poppins_500Medium",
    fontSize: Theme.fonts.l,
  },
});
