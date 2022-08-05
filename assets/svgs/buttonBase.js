import * as React from "react";
import Svg, { Path, Defs, RadialGradient, Stop } from "react-native-svg";

const ButtonBase = () => (
  <Svg
    width={"100%"}
    height={"100%"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 88 88"
  >
    <Path
      d="M44 88c24.3 0 44-19.7 44-44S68.3 0 44 0 0 19.7 0 44s19.7 44 44 44Z"
      fill="url(#a)"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 44 -44 0 44 44)"
      >
        <Stop offset={0.427} stopColor="#01D9F7" />
        <Stop offset={1} stopColor="#01D9F7" stopOpacity={0} />
      </RadialGradient>
    </Defs>
  </Svg>
);

export default ButtonBase;
