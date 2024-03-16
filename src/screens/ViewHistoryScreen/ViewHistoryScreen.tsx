import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import historiesMocks from "../../mocks/historiesMocks";
import theme from "../../theme";
import LabelAutor from "../../components/ui/LabelAutor";
import Tag from "../../components/ui/Tag";
import { useEffect, useState } from "react";
import SectionViewHistory from "./components/SectionViewHistory";
import { supabase } from "../../../lib/supabase";
import { Session } from "@supabase/supabase-js";
import historiesRepositories from "../../repositories/historiesRepositories";
import ScreenName from "../../constants/ScreenName";

const ViewHistoryScreen = (props: any) => {
  const { navigation, route } = props;
  const [sizeFontText, setSizeFontText] = useState(15);
  const [session, setSession] = useState<Session | null>(null);
  const { id } = route.params;
  const [history, setHistory] = useState<IHistory | null | undefined>(null);

  const onclickMorefont = () => {
    const size = sizeFontText + 1;
    setSizeFontText(size >= 45 ? 45 : size);
  };
  const onclickLessfont = () => {
    const size = sizeFontText - 1;
    setSizeFontText(size <= 15 ? 15 : size);
  };
  const onClicktoNavigationCategory = (keyname: string) => {
    navigation.navigate(ScreenName.CategorySelected, { keyname: keyname})
  }
  useEffect(() => {
    const getHistory = async (id: number) => {
      const response = await historiesRepositories.getHistory(id);
      if (response) setHistory(response);
      else setHistory(historiesMocks.data.find((item) => item.id === id));
    };

    if(id > 0)
      getHistory(id);
  }, [id]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (session) {
        setSession(session);
      }
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setSession(session);
      }
    });
  }, []);

  const convertirFormatoFecha = (fechaString: string | number | Date) => {
    // Crear un objeto Date a partir de la cadena de fecha

    if (fechaString == undefined) return "";

    const fecha = new Date(fechaString);

    // Obtener los componentes de la fecha
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const año = fecha.getFullYear();
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();

    // Agregar ceros a la izquierda si es necesario
    const diaFormateado = dia < 10 ? "0" + dia : dia;
    const mesFormateado = mes < 10 ? "0" + mes : mes;
    const horasFormateadas = horas < 10 ? "0" + horas : horas;
    const minutosFormateados = minutos < 10 ? "0" + minutos : minutos;

    // Devolver la fecha formateada en el nuevo formato
    return `${diaFormateado}/${mesFormateado}/${año} ${horasFormateadas}:${minutosFormateados}`;
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            borderColor: theme.colors.dark,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", paddingRight: 2 }}>
                {"Fecha:"}
              </Text>
              <Text>
                {history?.aproved_at
                  ? convertirFormatoFecha(history?.aproved_at)
                  : "Desconocido"}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold", paddingRight: 2 }}>
                {"Autor:"}
              </Text>
              <Text>{history?.autor.username}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableWithoutFeedback onPress={onclickLessfont}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                }}
                source={{
                  uri: "https://img.icons8.com/office/80/zoom-out.png",
                }}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={onclickMorefont}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                }}
                source={{
                  uri: "https://img.icons8.com/office/80/zoom-in--v1.png",
                }}
              />
            </TouchableWithoutFeedback>
          </View>
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
          {history &&
            history.categories.map((item, i) => {
              return (
                <Tag key={i} onPress={onClicktoNavigationCategory} keyname={item.keyname}>
                  {item.name}
                </Tag>
              );
            })}
        </View>
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
            {history?.title}
          </Text>
          <View style={{ flexDirection: "row", paddingTop: 2 }}>
            <LabelAutor by={"escrito por:"} autor={history?.autor.username} />
          </View>
        </View>
        <Text style={{ flex: 1, fontSize: sizeFontText }}>
          {history?.history}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: theme.colors.back,
          padding: 10,
          paddingVertical: 30,
        }}
      >
        <SectionViewHistory
          idHistory={history?.id}
          idSession={session?.user.id}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: theme.colors.light,
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
export default ViewHistoryScreen;
