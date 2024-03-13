import { Session } from "@supabase/supabase-js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import ScreenName from "../constants/ScreenName";
import {
  CategoryScreen,
  DashboardScreen,
  ViewHistoryScreen,
  CategorySelectScreen,
  SettingsScreen,
} from "../screens";
import SceneName from "../constants/SceneName";
import { useEffect, useState } from "react";
import { AppState } from "react-native";
import { supabase } from "../../lib/supabase";
import { useDispatch, useSelector } from "../redux/StoreProvider";
import profileActions from "../actions/profileActions";
import LoginScreen from "./LoginScreen";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import {
  IconCategory,
  IconHome,
  IconSettings,
} from "../components/ui/image/svg";
import theme from "../theme";

//actualiza continuamente la sesion creo que deberia ir en la raiz
AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});


function ProfileScreen({ navigation }: { navigation: any }) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        backgroundColor: theme.colors.white,
        height: 60,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Text>Profile Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}


const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const CategoryStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const MainScreen = () => {
  const [session, setSession] = useState<Session | null>(null);
  const dispatch = useDispatch();
  //const { profile } = useSelector();

  const navigatorNames = {
    initial: "Inicio",
    tabCategory: "Categoría",
    tabSettings: "settings",
  };

  //TODO debe ir mas arriba para que sigua actualizando
  //TODO esto me sirve solo para interno hay que pasarlo a contexto global
  //TODO creo que deberia meter el usuario a sesion
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (session) {
        setSession(session);
        profileActions.findProfileFromUUID(session?.user.id, dispatch);
      }
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setSession(session);
        profileActions.findProfileFromUUID(session?.user.id, dispatch);
      }
    });
  }, []);

  return (
    <Tab.Navigator
      initialRouteName={navigatorNames.initial}
      screenOptions={{
        headerShown: false,
        //tabBarShowLabel: false,
        //tabBarStyle: { display: "none"}
        tabBarStyle: {
          backgroundColor: theme.colors.back,
          borderTopWidth: 0,
        }
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused, children }) => (
            <Text
              style={{
                color: focused ? theme.colors.primary : theme.colors.dark,
                fontSize: 12,
              }}
            >
              {children}
            </Text>
          ),
          tabBarIcon: ({ focused, color }) => (
            <IconHome
              fill={focused ? theme.colors.primary : theme.colors.dark}
            />
          ),
        }}
        name={navigatorNames.initial}
      >
        {() => (
          <HomeStack.Navigator screenOptions={{ headerShown: true }}>
            <HomeStack.Screen
              name={ScreenName.Dashboard}
              component={DashboardScreen}
              options={{ headerShown: false }}
            />
            <HomeStack.Screen
              name={ScreenName.ViewHistory}
              component={ViewHistoryScreen}
              options={{
                headerTitle: "Historias", //TODO metiendo al contexto el elemento visible puedo recuperar el nombre y agregarlo aqui
                headerBackTitle: "Regresar",
              }}
            />
          </HomeStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused, children }) => (
            <Text
              style={{
                color: focused ? theme.colors.primary : theme.colors.dark,
                fontSize: 12,
              }}
            >
              {children}
            </Text>
          ),
          tabBarIcon: ({ focused, color }) => (
            <IconCategory
              fill={focused ? theme.colors.primary : theme.colors.dark}
            />
          ),
        }}
        name={navigatorNames.tabCategory}
      >
        {() => (
          <CategoryStack.Navigator>
            <CategoryStack.Screen
              name={ScreenName.CategoryHome}
              options={{
                headerBackTitle: "Regresar",
                headerTitle: "Categorías", //TODO metiendo al contexto el elemento visible puedo recuperar el nombre y agregarlo aqui
              }}
              component={CategoryScreen}
            />
            <CategoryStack.Screen
              name={ScreenName.CategorySelected}
              options={{
                headerBackTitle: "Regresar",
                headerTitle: "Categorías", //TODO metiendo al contexto el elemento visible puedo recuperar el nombre y agregarlo aqui
              }}
              component={CategorySelectScreen}
            />
            {/* <CategoryStack.Screen name="Details" component={DetailsScreen} /> */}
          </CategoryStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen
        name={navigatorNames.tabSettings}
        //options={{ tabBarStyle: { display: "none"}}}
        options={({
          route,
          navigation,
        }: {
          route: RouteProp<ParamListBase, string>;
          navigation: any;
        }) => {
          return {
            tabBarStyle: {
              //display: route.state && route.state.index === 0 ? "none" : "flex",
              backgroundColor: theme.colors.back,
              borderTopWidth: 0,
            },
            tabBarLabel: ({ focused, children }) => (
              <Text
                style={{
                  color: focused ? theme.colors.primary : theme.colors.dark,
                  fontSize: 12,
                }}
              >
                {children}
              </Text>
            ),
            tabBarIcon: ({ focused, color }) => (
              <IconSettings
                fill={focused ? theme.colors.primary : theme.colors.dark}
              />
            ),
          };
        }}
      >
        {() => (
          <>
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name={"Settings"}
                component={SettingsScreen}
                options={{
                  headerShown: true,
                  headerTitle: "Ajustes",
                }}
              />
              <SettingsStack.Screen
                name={SceneName.Authentication}
                component={LoginScreen}
                options={{
                  headerShown: true,
                  headerTitle: "Iniciar sesión",
                  headerBackTitle: "Regresar",
                }}
              />
              {/* <SettingsStack.Screen
                name="Settings"
                component={ProfileScreen}
                options={{ headerShown: false }}
              />
              <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
            </SettingsStack.Navigator>
          </>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default MainScreen;
