import { useState } from "react";
import { ScrollView, View, Text } from "react-native";

const ITEM_HEIGHT = 100;
const SAMPLE_ARRAY = Array(50).fill(1);

const Scroller = ({
  list = SAMPLE_ARRAY,
  onChange = (val) => console.log({ val }),
}) => {
  const [selectedItemState, setSelectedItemState] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: ITEM_HEIGHT,
          overflow: "visible",
        }}
      >
        <ScrollView
          onMomentumScrollEnd={(e) => {
            console.log({ e });
            const currentIndex = e.nativeEvent.contentOffset.y / ITEM_HEIGHT;
            console.log({ currentIndex });
            setSelectedItemState(currentIndex);
            onChange(list[currentIndex]);
          }}
          showsVerticalScrollIndicator={false}
          pagingEnabled
          style={{
            height: ITEM_HEIGHT,
            width: 80,
            overflow: "visible",
            borderWidth: 1,
            borderColor: "red",
          }}
          contentContainerStyle={{
            alignItems: "center",
          }}
          contentOffset={{ x: 300, y: 300 }}
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
            borderWidth: 1,
            width: 80,
            height: "100%",
          }}
        />
      </View>
    </View>
  );
};

export default Scroller;
