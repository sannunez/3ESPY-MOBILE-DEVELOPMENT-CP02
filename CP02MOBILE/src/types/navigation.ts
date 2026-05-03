import {NavigatorScreenParams} from "@react-navigation/native"

export type RootStackParamList = {
    Login: undefined,
    TabRoutes: NavigatorScreenParams<TabParamList>,
}

export type TabParamList = {
    Home: {userName: string};
    Settings: undefined;
    Tasks: undefined;
}
