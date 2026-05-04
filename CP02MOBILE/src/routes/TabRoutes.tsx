import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabParamList } from "../types/navigation";
import { useAuth } from "../context/AuthContext";
import { Image } from "react-native";

import HomeScreen from "../screens/home/HomeScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";
import TaskStackRoutes from "./TaskStackRoutes";

const Tab = createBottomTabNavigator<TabParamList>();

const icons = {
  Home: {
    active: require("../../assets/home-active.png"),
    inactive: require("../../assets/home.png"),
  },
  Tasks: {
    active: require("../../assets/task-active.png"),
    inactive: require("../../assets/task.png"),
  },
  Settings: {
    active: require("../../assets/settings-active.png"),
    inactive: require("../../assets/settings.png"),
  },
};

export default function TabRoutes() {
  const { user } = useAuth();

  return (
    <Tab.Navigator
      initialRouteName={user?.role === "admin" ? "Settings" : "Home"}
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused }) => {
          const routeIcons = icons[route.name as keyof typeof icons];

          const icon = focused
            ? routeIcons?.active
            : routeIcons?.inactive;

          return (
            <Image
              source={icon}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          );
        },

        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
        
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tasks" component={TaskStackRoutes} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}