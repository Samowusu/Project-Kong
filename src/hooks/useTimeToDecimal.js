import { useState, useEffect } from "react";

//this hook takes the hour and minute bit of a time and converts it to decimal
function useTimeToDecimal(hour, minute) {
  const [timeInDecimalState, setTimeInDecimalState] = useState();

  useEffect(() => {
    const numHr = Number(hour);
    const numMin = Number(minute) / 60;

    setTimeInDecimalState(numHr + numMin);
  }, [hour, minute]);

  return timeInDecimalState;
}

export default useTimeToDecimal;
