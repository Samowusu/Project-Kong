import { useState, useEffect } from "react";

//this hook takes the hour and minute bit of a time and converts it to decimal
function useTimeToDecimal(hour, minute) {
  const [timeInDecimalState, setTimeInDecimalState] = useState(3.17);

  useEffect(() => {
    const numHr = Number(hour);
    const numMin = Number(minute) / 60;

    setTimeInDecimalState(numHr + numMin);
  }, [hour, minute]);

  if (String(timeInDecimalState).length > 4) {
    return timeInDecimalState.toFixed(2);
  }
  return timeInDecimalState;
}

export default useTimeToDecimal;
