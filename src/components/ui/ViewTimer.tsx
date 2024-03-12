import { useEffect, useState } from "react";
import { Text } from "react-native";
import dateUtils from "../../utils/dateUtils";

const ViewTimer = (props: any) => {
  const { styles, date } = props;
  const [inDate, setInDate] = useState("");

  useEffect(() => {
    setInDate(dateUtils.timeEstimation(date)); //first time
    const interval = setInterval(() => {
      setInDate(dateUtils.timeEstimation(date));
    }, 1000 * 60);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <Text style={styles?.time}>{inDate}</Text>;
};

export default ViewTimer;
