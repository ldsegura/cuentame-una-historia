import { Text, TouchableWithoutFeedback, View } from "react-native";
import theme from "../../../theme";
import colorUtils from "../../../utils/colorUtils";
import { useEffect, useState } from "react";
interface Props {
  category: ICategory;
  onPress: (item: ICategory) => any;
}
const ItemButtonCategory = (props: Props) => {
  const { category, onPress } = props;
  const [bgColor, setBgColor] = useState(
    colorUtils.getColorByCategory(category?.keyname || "")
  );

  useEffect(() => {
    if (category && category.keyname)
      setBgColor(colorUtils.getColorByCategory(category.keyname));
  }, [category]);
  function formatNumber(number: number) {
    if (number >= 1000000000) {
      return (number / 1000000000).toFixed(1) + "B";
    } else if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + "K";
    } else {
      return number.toString();
    }
  }
  function generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const onClick = () => {
    onPress && onPress(category);
  }
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View
        style={{
          width: "100%",
          backgroundColor: theme.colors.light,
          borderColor: bgColor,
          borderRadius: 10,
          borderWidth: 1,
          padding: 20,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: bgColor,
          }}
        >
          {category.name}
        </Text>
        <Text
          style={{
            textAlign: "center",
            color: bgColor,
          }}
        >
          {`${formatNumber(generateRandomNumber(100, 10000))} Historias`}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ItemButtonCategory;
