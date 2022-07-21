import { useState } from "react";
import { ScrollView, View, Text, Dimensions, StyleSheet } from "react-native";

const ITEM_HEIGHT = 100;
const SAMPLE_ARRAY = Array(10).fill(1);

const { height } = Dimensions.get("window");

const Scroll = ({
  list = SAMPLE_ARRAY,
  onChange = (val) => console.log({ val }),
}) => {
  const [selectedItemState, setSelectedItemState] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "red",
      }}
    >
      {/* <View
        style={{
          height: ITEM_HEIGHT,
          overflow: "visible",
          borderWidth: 3,
          borderColor: "yellow",
        }}
      > */}
      <ScrollView
        onMomentumScrollEnd={(e) => {
          // console.log({ e });
          const currentIndex = e.nativeEvent.contentOffset.y / ITEM_HEIGHT;
          console.log({ currentIndex });
          setSelectedItemState(currentIndex);
          onChange(list[currentIndex]);
        }}
        style={{
          height: ITEM_HEIGHT,
          // width: 80,
          overflow: "visible",
          borderWidth: 3,
          borderColor: "black",
        }}
        contentContainerStyle={{
          borderWidth: 3,
          borderColor: "green",
          paddingVertical: height / 2 - ITEM_HEIGHT / 2,
        }}
        snapToInterval={ITEM_HEIGHT}
      >
        {list.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                //   flex: 1,
                height: ITEM_HEIGHT,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "red",
              }}
            >
              <Text style={{ fontSize: 45 }}>{item}</Text>
            </View>
          );
        })}
      </ScrollView>
      <View
        pointerEvents="none"
        style={{
          position: "absolute",
          top: height / 2 - ITEM_HEIGHT / 2,
          borderWidth: 1,
          width: "100%",
          height: ITEM_HEIGHT,
          borderWidth: 3,
          borderColor: "blue",
        }}
      />
      {/* </View> */}
    </View>
  );
};

export default Scroll;
