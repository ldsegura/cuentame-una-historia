import { useState } from "react";
import {
  StyleSheet,
  View,
  Alert,
  AppState,
  KeyboardAvoidingView,
} from "react-native";
import { Button, Input } from "react-native-elements";
import { supabase } from "../../../lib/supabase";
import SceneName from "../../constants/SceneName";
import ScreenName from "../../constants/ScreenName";

// AppState.addEventListener("change", (state) => {
//   if (state === "active") {
//     supabase.auth.startAutoRefresh();
//   } else {
//     supabase.auth.stopAutoRefresh();
//   }
// });

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  //console.log(navigation.canGoBack())
  async function signInWithEmail() {
    setLoading(true);
    const response = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    setLoading(false);
    if (response.error) Alert.alert(response.error.message);
    else {
      //ocultar la ventana antes de abrirla
      if (navigation.canGoBack())
        navigation.goBack();
      navigation.navigate(ScreenName.Dashboard);
    }
    //else navigation.navigate(SceneName.Main);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session)
      Alert.alert("Please check your inbox for email verification!");
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Input
            label="Email"
            leftIcon={{ type: "font-awesome", name: "envelope" }}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="email@address.com"
            autoCapitalize={"none"}
          />
        </View>
        <View style={styles.verticallySpaced}>
          <Input
            label="Password"
            leftIcon={{ type: "font-awesome", name: "lock" }}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize={"none"}
          />
        </View>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Button
            title="Login"
            disabled={loading}
            onPress={() => signInWithEmail()}
          />
        </View>
        <View style={styles.verticallySpaced}>
          <Button
            title="Create account"
            disabled={loading}
            onPress={() => signUpWithEmail()}
          />
        </View>
        <View style={[styles.verticallySpaced, styles.mt40]}>
          <Button
            title="Regresar"
            disabled={loading}
            onPress={() => navigation.navigate(SceneName.Main)}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
  mt40: {
    marginTop: 40,
  },
});
export default LoginScreen;
