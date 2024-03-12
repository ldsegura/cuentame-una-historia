import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import ScreenName from "../constants/ScreenName";
import { CategoryScreen, DashboardScreen, ViewHistoryScreen } from "../screens";
import CategorySelectScreen from "./CategorySelectScreen";

function SettingsScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

function ProfileScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function DetailsScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const CategoryStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const MainScreen = () => {
  const navigatorNames = {
    initial: "Inicio",
    tabCategory: "Categoría",
    tabSettings: "settings",
  };
  return (
    <Tab.Navigator
      initialRouteName={navigatorNames.initial}
      screenOptions={{ headerShown: false }}
    >
      {/* <Tab.Screen name="First">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Settings"
                component={SettingsScreen}
              />
              <SettingsStack.Screen name="Profile" component={ProfileScreen} />
            </SettingsStack.Navigator>
          )}
        </Tab.Screen> */}
      <Tab.Screen name={navigatorNames.initial}>
        {() => (
          <HomeStack.Navigator screenOptions={{ headerShown: true }}>
            <HomeStack.Screen name={ScreenName.Dashboard} component={DashboardScreen} options={{ headerShown: false}} />
            <HomeStack.Screen name={ScreenName.ViewHistory} component={ViewHistoryScreen} options={{
              headerTitle: "Historias", //TODO metiendo al contexto el elemento visible puedo recuperar el nombre y agregarlo aqui
              headerBackTitle: "Regresar",
            }} />
          </HomeStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name={navigatorNames.tabCategory}>
        {() => (
          <CategoryStack.Navigator>
            <CategoryStack.Screen name={ScreenName.CategoryHome}
              options={{
                headerBackTitle: "Regresar",
                headerTitle: "Categorías" //TODO metiendo al contexto el elemento visible puedo recuperar el nombre y agregarlo aqui
              }}
              component={CategoryScreen} />
            <CategoryStack.Screen name={ScreenName.CategorySelected}
              options={{
                headerBackTitle: "Regresar",
                headerTitle: "Categorías" //TODO metiendo al contexto el elemento visible puedo recuperar el nombre y agregarlo aqui
              }}
              component={CategorySelectScreen} />
            {/* <CategoryStack.Screen name="Profile"
              options={{
                headerBackTitle: "Regresar",
                headerTitle: "Categorias" //TODO metiendo al contexto el elemento visible puedo recuperar el nombre y agregarlo aqui
              }}
              component={ProfileScreen} /> */}
            <CategoryStack.Screen name="Details" component={DetailsScreen} />
          </CategoryStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name={navigatorNames.tabSettings}>
        {() => (
          <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            <SettingsStack.Screen name="Details" component={DetailsScreen} />
          </SettingsStack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default MainScreen;
