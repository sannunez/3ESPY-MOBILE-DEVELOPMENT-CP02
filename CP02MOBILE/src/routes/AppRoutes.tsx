import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "../types/navigation";

import LoginScreen from "../screens/login/LoginScreen";
import TabRoutes from "./TabRoutes";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Login'
                    component={LoginScreen}
                    options={{title: "Login"}}
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