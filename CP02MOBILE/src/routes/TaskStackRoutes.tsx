import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TaskStackParamList } from "../types/navigation";

import TaskListScreen from "../screens/tasks/TaskListScreen";
import TaskListFormScreen from "../screens/tasks/TaskListFormScreen";
import TaskDetailScreen from "../screens/tasks/TaskDetailScreen";

const Stack = createNativeStackNavigator<TaskStackParamList>();

export default function TaskStackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TaskList" component={TaskListScreen} options={{headerShown: false}} />
      <Stack.Screen name="TaskForm" component={TaskListFormScreen} />
      <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
    </Stack.Navigator>
  );
}