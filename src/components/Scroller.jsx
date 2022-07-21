import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { Theme } from "../theme/default";

Scroller.defaultProps = {
  data: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"],
  itemsToShow: 5,
  onChange: (val) => console.log(val),
};

const ITEM_HEIGHT = 100;

export default function Scroller({ data, itemsToShow, onChange }) {
  const containerHeight = ITEM_HEIGHT * itemsToShow;
  const [selectedIndexState, setSelectedIndexState] = useState(
    data.length % 2 == 0
      ? Math.floor(containerHeight / 2 / ITEM_HEIGHT)
      : Math.ceil(containerHeight / 2 / ITEM_HEIGHT)
  );
  const scrollRef = useRef();
  useEffect(() => {
    setTimeout(
      () =>
        scrollRef.current.scrollTo({
          y:
            data.length % 2 == 0
              ? containerHeight / 2 - 50
              : containerHeight / 2 + 50,
          animate: true,
        }),
      300
    );
  }, []);

  return (
    <View style={{ flex: 1, height: containerHeight }}>
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const currentIndex = Math.round(
            e.nativeEvent.contentOffset.y / ITEM_HEIGHT
          );
          setSelectedIndexState(currentIndex);
          onChange(data[currentIndex]);
        }}
        contentContainerStyle={{
          paddingVertical: containerHeight / 2 - ITEM_HEIGHT / 2,
        }}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        onScroll={(e) => {
          const scrollIndex = Math.round(
            e.nativeEvent.contentOffset.y / ITEM_HEIGHT
          );
          setSelectedIndexState(scrollIndex);
        }}
      >
        {data.map((item, index) => (
          <View
            key={index}
            style={{
              height: ITEM_HEIGHT,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                ...styles.texts,
                fontSize:
                  selectedIndexState === index
                    ? Theme.fonts.xxxl
                    : Theme.fonts.xxl,
              }}
            >
              {item}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

DoubleScroller.defaultProps = {
  hours: ["01", "02", "03"],
  minutes: ["00", "15", "30"],
  onChangeHour: (hour) => console.log(hour),
  onChangeMinute: (minute) => console.log(minute),
};

export function DoubleScroller({
  hours,
  minutes,
  onChangeHour,
  onChangeMinute,
}) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Scroller data={hours} onChange={onChangeHour} />
      <Scroller data={minutes} onChange={onChangeMinute} />
      <View style={styles.pointer} pointerEvents="none">
        <Image source={require("../../assets/ellipse.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texts: {
    color: Theme.colors.secondaryDark200,
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
  },

  pointer: {
    position: "absolute",
    // top: scrollsContainerHeight / 2 - ITEM_HEIGHT / 2,
    borderWidth: 1,
    width: "100%",
    height: ITEM_HEIGHT,
    borderColor: Theme.colors.secondaryDark200,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
