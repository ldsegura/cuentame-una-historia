import { Alert, Text, TouchableWithoutFeedback, View } from "react-native";
import { IconStar } from "../../../components/ui/image/svg";
import theme from "../../../theme";
import { useSelector } from "../../../redux/StoreProvider";
import { useEffect, useState } from "react";
import { ButtonGoTo } from "../../../components/ui/buttons";

const SectionViewHistory = (props: any) => {
  const { idHistory = 0, idSession } = props;
  const profile: ISProfile = useSelector().profile;
  const [rate, setRate] = useState(-1);
  const arr = [0, 1, 2, 3, 4];
  useEffect(() => {
    setRate(-1);

  }, [idHistory]);

  const onClickRate = (rt: number) => {
    setRate(rt);
  };
  const onSubmit = () => {
    if(profile.complete && profile.profile && idSession) {
      if(rate <= 0) {
        Alert.alert("Agregale la puntuación");
      }
      else
        Alert.alert(`enviar ${rate + 1} estrellas a ${idHistory} historia, por id: ${idSession} usuario`);
    }
    else {
      Alert.alert("Inicia sesión para aydar a tu autor favorito");
    }
  };

  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 8,
        padding: 15,
        backgroundColor: theme.colors.light,
      }}
    >
      <View style={{ gap: 10 }}>
        <View>
          <Text>Ayudalo a crecer como escritor.</Text>
          <Text style={{ fontWeight: "bold" }}>
            ¿Qué puntuación tendrá su historía?{" "}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            width: "100%",
            flex: 1,
          }}
        >
          {arr.map((_item, index) => {
            return (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => {
                  onClickRate(index);
                }}
              >
                <View>
                  {IconStar && (
                    <IconStar
                      fill={
                        index <= rate ? theme.colors.primary : theme.colors.dark
                      }
                      width={40}
                      height={40}
                    />
                  )}
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
        <ButtonGoTo
          title="Enviar Recomendación"
          onPress={onSubmit}
          justifyContent="center"
          style={{ minHeight: "auto", padding: 20 }}
          styleText={{ fontSize: 18 }}
        />
      </View>
    </View>
  );
};

export default SectionViewHistory;
