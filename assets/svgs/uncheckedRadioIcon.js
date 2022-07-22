import Svg, { Path } from "react-native-svg";

function UncheckedRadioIcon({ color }) {
  return (
    <Svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M14.5 27C21.4036 27 27 21.4036 27 14.5C27 7.59644 21.4036 2 14.5 2C7.59644 2 2 7.59644 2 14.5C2 21.4036 7.59644 27 14.5 27Z"
        stroke={color ? color : "#01D9F7"}
        stroke-width="4"
      />
    </Svg>
  );
}

export default UncheckedRadioIcon;
