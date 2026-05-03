import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useTheme } from "../theme/ThemeContext";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";

import { RootStackParamList } from "../types/navigation";

import LoginScreen from "../screens/login/LoginScreen";
import TabRoutes from "./TabRoutes";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes(){

    const {theme} = useTheme();

    return(
        <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
            <Stack.Navigator>
                <Stack.Screen
                    name='Login'
                    component={LoginScreen}
                    options={{headerShown: false}}
                />

                <Stack.Screen
                    name='TabRoutes'
                    component={TabRoutes}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}