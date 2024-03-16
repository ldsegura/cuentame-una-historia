import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import theme from "../../theme";
import { ButtonGoTo } from "../../components/ui/buttons";
import historiesMocks from "../../mocks/historiesMocks";
import CardElementHistory from "../../components/ui/CardElementHistory";
import { IconStar } from "../../components/ui/image/svg";
import ScreenName from "../../constants/ScreenName";
const MyListHistoriesScreen = ({ navigation }: { navigation: any }) => {
  const handleclickHistory = (item: any) => {
    navigation.navigate(ScreenName.ViewHistory, { id: item.id });
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.back,
          justifyContent: "space-around",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 30 }}>
          Listado de mis historias
        </Text>
        <View
          style={{
            flex: 1,
            flexGrow: 1,
            padding: 20,
            borderRadius: 10,
            backgroundColor: theme.colors.light,
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            gap: 40,
          }}
        >
          <View
            style={{
              width: "100%",
              paddingBottom: 20,
              borderBottomWidth: 1,
            }}
          >
            {/*//Todo mostrar sino tiene historias */}
            <ButtonGoTo
              //title="Publica tu primera historía"
              title="Crear una nueva historía"
              justifyContent="center"
              //onPress={() => navigation.navigate("Details")}
            />
          </View>
          <View style={{ gap: 10, width: "100%", paddingBottom: 20 }}>
            {historiesMocks.data.map((item: IHistory, i: number) => {
              return (
                <CardElementHistory
                  key={i}
                  history={item}
                  onclickHistory={handleclickHistory}
                />
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: theme.colors.back,
  },
});
export default MyListHistoriesScreen;
