import { Text, View } from "react-native";
import theme from "../../../theme";

const DBInfoInitial = () => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: theme.colors.light,
        borderRadius: 5,
        padding: 30,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: theme.colors.primary,
        }}
      >
        ¡Descubre nuevas historias!
      </Text>
    </View>
  );
};

export default DBInfoInitial;
