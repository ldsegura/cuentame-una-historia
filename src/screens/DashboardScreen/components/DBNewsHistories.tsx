import { Text, View } from "react-native";
import theme from "../../../theme";

const DBNewsHistories = (props: any) => {
  const {count = 0} = props;
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: theme.colors.light,
        borderRadius: 5,
        padding: 10,
        borderColor: theme.colors.secondary,
        borderWidth: 1,
      }}
    >
      <Text style={{ textAlign: "center", fontWeight: "bold" }}>
        {`${count} ${count === 1? "Publicación": "Publicaciones"} nuevas el día de hoy`}
      </Text>
    </View>
  );
};

export default DBNewsHistories;
