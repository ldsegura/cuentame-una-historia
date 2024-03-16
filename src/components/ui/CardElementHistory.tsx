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
//@ts-ignore
import book1 from "../../../assets/img/book_1.png";
//@ts-ignore
import book2 from "../../../assets/img/book_2.png";
//@ts-ignore
import book3 from "../../../assets/img/book_3.png";
//@ts-ignore
import book4 from "../../../assets/img/book_4.png";
//@ts-ignore
import book5 from "../../../assets/img/book_5.png";
interface Props {
  history: IHistory;
  onclickHistory?: (item: any) => any;
  onClickCategory?: (keyname: string) => any;
}

const CardElementHistory = (props: Props) => {
  const { history, onclickHistory, onClickCategory } = props;
  const [viewWidth, setViewWidth] = useState(0);
  const randomNumber = Math.floor(Math.random() * 5);
  const books = [
    book1,
    book2,
    book3,
    book4,
    book5,
  ]
  const selectedBook = books[randomNumber];

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
        <ViewTimer date={history?.aproved_at} />
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
              source={selectedBook} //TODO cambiar el libro por numero de ranking o visitas
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
          {history.autor.username}
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
