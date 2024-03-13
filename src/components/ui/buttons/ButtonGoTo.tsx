import { Pressable, StyleProp, Text, ViewStyle } from "react-native";
import theme from "../../../theme";

interface Props {
  justifyContent?: "space-between" | "center";
  title: string;
  children?: React.ReactElement;
  style?: StyleProp<ViewStyle> | null | {};
  styleText?: StyleProp<ViewStyle> | null | {};
  onPress?: (any?: any) => void;
}

const ButtonGoTo = (props: Props) => {
  const { title = "", justifyContent = "space-between", style = {}, styleText= {} } = props;
  return (
    <Pressable
      style={{
        backgroundColor: theme.colors.primary,
        width: "100%",
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20,
        minHeight: 60,
        justifyContent: justifyContent,
        flexDirection: "row",
        alignItems: "center",
        ...style,
      }}
      onPress={props.onPress}
    >
      <Text style={{ color: theme.colors.white, ...styleText }}>{title}</Text>
      {props.children && props.children}
    </Pressable>
  );
};

export default ButtonGoTo;
