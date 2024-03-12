import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import theme from "../../theme";
import categoriesMocks from "../../mocks/categoriesMocks";
import { useEffect, useState } from "react";
import historiesMocks from "../../mocks/historiesMocks";
import CardElementHistory from "../../components/ui/CardElementHistory";
import ScreenName from "../../constants/ScreenName";
const CategorySelectScreen = (props: any) => {
  const { navigation, route } = props;
  const { keyname } = route.params;
  const [histories, setHistories] = useState<Array<IHistory>>([]);
  const category = categoriesMocks.findCategorybyKeyname(keyname);
  useEffect(() => {

    setHistories(historiesMocks.getHistoriesbyCategory(keyname) as Array<IHistory>);
  }, [keyname]);
  const onClicktoNavigationHistory = (item: any) => {
    navigation.navigate(ScreenName.ViewHistory, { id: item.id})
  }
  const onClicktoNavigationCategory = (keyname: string) => {
    navigation.navigate(ScreenName.CategorySelected, { keyname: keyname})
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
            {`Explora las categorías: ${category?.name}`}
          </Text>
        </View>
        {histories && histories.map((item: IHistory, i: number) => {
          return (
            <CardElementHistory
              key={i}
              history={item}
              onclickHistory={onClicktoNavigationHistory}
              onClickCategory={onClicktoNavigationCategory}
            />
          );
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
export default CategorySelectScreen;
