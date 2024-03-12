import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import theme from "../../theme";
import ItemButtonCategory from "./components/ItemButtonCategory";
import categoriesMocks from "../../mocks/categoriesMocks";
import ScreenName from "../../constants/ScreenName";
const CategoryScreen = (props: any) => {
  const { navigation } = props;
  const onClick = (item: ICategory) => {
    navigation.navigate(ScreenName.CategorySelected, { keyname: item.keyname})
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          gap: 10,
        }}
      >
        <View
          style={{
            paddingBottom: 30,
            paddingTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {"Explora las categorías"}
          </Text>
        </View>
        {categoriesMocks.data.map((item, i) => {
          return <ItemButtonCategory onPress={onClick} category={item} key={i} />
        })}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: theme.colors.back,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
export default CategoryScreen;
