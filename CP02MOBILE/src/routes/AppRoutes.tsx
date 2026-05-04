import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useTheme } from "../context/ThemeContext";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";

import { RootStackParamList } from "../types/navigation";

import { useAuth } from "../context/AuthContext";

import LoginScreen from "../screens/login/LoginScreen";
import TabRoutes from "./TabRoutes";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes(){

    const {theme} = useTheme();

    const {user, loading} = useAuth();

    if(loading){
        return null;
    }

    return(
        <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
            <Stack.Navigator>

            {user ? (
                <Stack.Screen
                name='TabRoutes'
                    component={TabRoutes}
                    options={{headerShown: false}}
                />
            ) : (
                <Stack.Screen
                    name='Login'
                    component={LoginScreen}
                    options={{headerShown: false}}
                />
            )}

            </Stack.Navigator>
        </NavigationContainer>
    )
}