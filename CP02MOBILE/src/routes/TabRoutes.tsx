import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabParamList } from "../types/navigation";
import { useAuth } from "../context/AuthContext";

import HomeScreen from "../screens/home/HomeScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";
import TaskStackRoutes from "./TaskStackRoutes";

const Tab = createBottomTabNavigator<TabParamList>();


export default function TabRoutes(){
  const {user} = useAuth();

  return (
    <Tab.Navigator initialRouteName={user?.role === "admin" ? "Settings" : "Home"}>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Tasks" component={TaskStackRoutes}/>
      <Tab.Screen name="Settings" component={SettingsScreen}/>
    </Tab.Navigator>
  )
}