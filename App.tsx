import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  createStackNavigator,
  //CardStyleInterpolators,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SceneName from "./src/constants/SceneName";
import MainScreen from "./src/screens/MainScreen";
import LoginScreen from "./src/screens/LoginScreen";
import StoreProvider from "./src/redux/StoreProvider";
import theme from "./src/theme";

const Stack = createStackNavigator();
const App = () => {
  return (
    <StoreProvider>
      <SafeAreaView style={{ flex: 1, }}>
        <StatusBar style="dark" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={SceneName.Main}
            screenOptions={{
              headerShown: false,
              // headerBackTitle: "Volver",
              // headerTitleAlign: "center",
              // headerStyle: {
              //   backgroundColor: theme.colors.headerBackground,
              // },
              // headerTitleStyle: {
              //   fontFamily: theme.typography.fontFamily.bold,
              //   fontSize: 20,
              //   color: theme.colors.text,
              // },
              // cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
            }}
          >
            {/* <Stack.Group>
              <Stack.Screen
                name={SceneName.Authentication}
                component={LoginScreen}
              />
              <Stack.Screen
                name={SceneName.Registration}
                component={RegistrationView}
              />
            </Stack.Group> */}
            <Stack.Group>
              <Stack.Screen name={SceneName.Main} component={MainScreen} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </StoreProvider>
  );
};

export default App;
