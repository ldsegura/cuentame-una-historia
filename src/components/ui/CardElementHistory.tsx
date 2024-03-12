import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Tag from "./Tag";
import { useState } from "react";
import theme from "../../theme";
import ViewTimer from "./ViewTimer";

interface Props {
  history: IHistory;
  onclickHistory?: (item: any) => any;
  onClickCategory?: (keyname: string) => any;
}

const CardElementHistory = (props: Props) => {
  const { history, onclickHistory, onClickCategory } = props;
  const [viewWidth, setViewWidth] = useState(0);

  const onLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;
    setViewWidth(width);
  };
  const handleclickHistory = () => {
    onclickHistory && onclickHistory(history);
  };
  const handleclickCategory = (keyname: string) => {
    onClickCategory && onClickCategory(keyname);
  };

  return (
    <View style={stylesH.container}>
      <View
        style={{
          justifyContent: "center", //centrado verticalmente
          alignSelf: "flex-end",
        }}
      >
        <ViewTimer date={history?.created_at} />
      </View>
      <TouchableWithoutFeedback onPress={handleclickHistory}>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            paddingBottom: 4,
            width: "100%",
            flexGrow: 1,
          }}
        >
          <View style={{ alignItems: "center", width: 66 }}>
            <Image
              style={{
                width: 66,
                height: 58,
              }}
              source={{
                uri: "https://img.icons8.com/arcade/64/book.png",
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              flexGrow: 1,
              width: viewWidth - 66,
            }}
            onLayout={onLayout}
          >
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={{ fontSize: 15, fontWeight: "bold", flexShrink: 1 }}
            >
              {history.title}
            </Text>
            <Text
              numberOfLines={3}
              ellipsizeMode="tail"
              style={{ flexShrink: 1 }}
            >
              {history.resumen}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View
        style={{
          justifyContent: "center", //centrado verticalmente
          alignSelf: "flex-end",
          flexDirection: "row",
          paddingVertical: 10,
        }}
      >
        <Text style={{ paddingRight: 2, fontSize: 12 }}>creado por</Text>
        <Text style={{ fontWeight: "bold", fontSize: 12 }}>
          {history.autor.nickname}
        </Text>
      </View>
      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          borderTopColor: theme.colors.back,
          alignItems: "flex-start",
          borderTopWidth: 1,
          paddingTop: 8,
          gap: 4,
          width: "100%",
        }}
      >
        {history.categories.map((item, i) => {
          return (
            <Tag key={i} onPress={handleclickCategory} keyname={item.keyname}>
              {item.name}
            </Tag>
          );
        })}
      </View>
    </View>
  );
};

export default CardElementHistory;

const stylesH = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: theme.colors.light,
    //alignItems: "center",
    //justifyContent: "space-around",
    width: "100%",
    borderRadius: 15,
    padding: 10,
  },
});
