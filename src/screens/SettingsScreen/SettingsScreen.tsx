import { Pressable, Text, View, Alert, ScrollView, StyleSheet } from "react-native";
import SceneName from "../../constants/SceneName";
import { useDispatch, useSelector } from "../../redux/StoreProvider";
import ScreenName from "../../constants/ScreenName";
import { supabase } from "../../../lib/supabase";
import profileActions from "../../actions/profileActions";
import theme from "../../theme";
import { ButtonGoTo } from "../../components/ui/buttons";
import { ArrowRight, IconStar } from "../../components/ui/image/svg";
import SettingsMainUserEdit from "./components/SettingsMainUserEdit";
import SectionHistoryViewAll from "../../components/sections/SectionHistoryViewAll";
import historiesMocks from "../../mocks/historiesMocks";

const SettingsScreen = ({ navigation }: { navigation: any }) => {
  const profile: ISProfile = useSelector().profile;
  const dispatch = useDispatch();

  const renderPolicy = () => {
    return (
      <>
        <ButtonGoTo
          title="Políticas de privacidad"
          onPress={() => Alert.alert("Ups! se sigue contruyendo...")}
        >
          <ArrowRight height={20} width={20} fill={theme.colors.white} />
        </ButtonGoTo>
        <ButtonGoTo
          title="Legal"
          onPress={() => Alert.alert("Ups! se sigue contruyendo...")}
        >
          <ArrowRight height={20} width={20} fill={theme.colors.white} />
        </ButtonGoTo>
      </>
    );
  };
  const handleclickHistory = (item: any) => {
    navigation.navigate(ScreenName.ViewHistory, { id: item.id });
  };
  const handleConfirm = () => {
    Alert.alert(
      "Confirmar",
      "¿Estás seguro de deseas salir de tu sesión?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Acción cancelada"),
          style: "cancel",
        },
        {
          text: "Aceptar",
          onPress: () => {
            supabase.auth.signOut();
            profileActions.resetProfile(dispatch);
            navigation.navigate(ScreenName.Dashboard);
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.back,
        padding: 20,
        gap: 20,
      }}
    >
      {profile.complete && profile.profile && (
        <>
          <View style={{ alignItems: "flex-start", width: "100%" }}>
            <SettingsMainUserEdit profile={profile.profile} />
          </View>
          <ButtonGoTo
            title="Mis historias"
            onPress={() => navigation.navigate(ScreenName.MyHistories)}
          >
            <ArrowRight height={20} width={20} fill={theme.colors.white} />
          </ButtonGoTo>
          {/* <ButtonGoTo
            title="Guardados"
            onPress={() => Alert.alert("Ups! se sigue contruyendo...")}
          >
            <ArrowRight height={20} width={20} fill={"white"} />
          </ButtonGoTo> */}
          {renderPolicy()}
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
          <ButtonGoTo
            onPress={handleConfirm}
            title="Cerrar sesión"
            justifyContent="center"
            style={{ minHeight: 40 }}
          />
        </>
      )}
      {!profile.complete && !profile.error && !profile.isFetching && (
        <>
          {renderPolicy()}
          <ButtonGoTo
            title="Inisiar sesión"
            justifyContent="center"
            style={{ minHeight: 40 }}
            onPress={() => navigation.navigate(SceneName.Authentication)}
          />
        </>
      )}
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    //backgroundColor: theme.colors.back,
    backgroundColor: "red",
  },
});
export default SettingsScreen;
