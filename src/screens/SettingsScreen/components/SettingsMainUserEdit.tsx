import { Alert, Text, View } from "react-native";
import { ButtonGoTo } from "../../../components/ui/buttons";
import theme from "../../../theme";

interface Props {
  profile: User;
}
const SettingsMainUserEdit = (props: Props) => {
  const { profile } = props;
  console.log(profile);
  return (
    <View style={{ padding: 10, paddingBottom: 20, gap: 5 }}>
      <View style={{ flexDirection: "column" }}>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={{ fontSize: 20 }}>Hola</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {`${profile && profile.name ? profile.name : "desconocido!"}`}
          </Text>
        </View>
        {profile && profile.username && (
          <View>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: theme.colors.primary,
              }}
            >
              @{profile.username}
            </Text>
          </View>
        )}
      </View>
      <View style={{ alignItems: "flex-start", width: "100%" }}>
        <ButtonGoTo
          title="Editar tu perfil"
          onPress={() => Alert.alert("Ups! se sigue contruyendo...")}
          style={{
            borderRadius: 30,
            padding: 5,
            minHeight: "auto",
            width: "auto",
          }}
        />
      </View>
    </View>
  );
};

export default SettingsMainUserEdit;
