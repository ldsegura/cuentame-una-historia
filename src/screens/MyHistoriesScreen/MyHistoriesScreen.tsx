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
import { IconStar } from "../../components/ui/image/svg";
import ScreenName from "../../constants/ScreenName";
import SectionHistoryViewAll from "../../components/sections/SectionHistoryViewAll";
const MyHistoriesScreen = ({ navigation }: { navigation: any }) => {
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
              paddingBottom: 40,
              marginBottom: 20,
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
          <SectionHistoryViewAll
            componentTitle={
              <>
                <IconStar width={30} height={30} />
                <Text style={{ fontSize: 12 }}>Mis Recomendados</Text>
              </>
            }
            onPressAll={() => navigation.navigate(ScreenName.MyListHistoriesRate)}
            onPressHistory={handleclickHistory}
            histories={historiesMocks.histories}
          />
          <SectionHistoryViewAll
            componentTitle={<Text style={{ fontSize: 12 }}>Mis Historias</Text>}
            onPressAll={() => navigation.navigate(ScreenName.MyListHistories)}
            onPressHistory={handleclickHistory}
            histories={historiesMocks.histories}
          />
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
export default MyHistoriesScreen;
