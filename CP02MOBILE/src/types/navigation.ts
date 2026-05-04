import {NavigatorScreenParams} from "@react-navigation/native"

export type RootStackParamList = {
    Login: undefined,
    TabRoutes: NavigatorScreenParams<TabParamList>,
}

export type TabParamList = {
    Home: undefined;
    Settings: undefined;
    Tasks: undefined;
}


export type TaskStackParamList = {
  TaskList: undefined;
  TaskForm: { taskId?: string } | undefined;
  TaskDetail: { taskId: string };
};