import { Text, TouchableWithoutFeedback, View } from "react-native";
import colorUtils from "../../utils/colorUtils";

const Tag = (props: any) => {
  const { keyname = "", onPress } = props;
  const onclickLessfont = () => {
    onPress && onPress(keyname);
  };

  return (
    <TouchableWithoutFeedback onPress={onclickLessfont}>
      <View
        style={{
          paddingVertical: 5,
          paddingHorizontal: 10,
          backgroundColor: colorUtils.getColorByCategory(keyname),
          borderRadius: 4,
        }}
      >
        <Text style={{ color: "white" }}>{props.children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Tag;
