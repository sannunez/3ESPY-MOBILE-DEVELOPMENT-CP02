import { View, Text, Pressable } from "react-native";
import { useTasks } from "../../hooks/useTasks";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TaskStackParamList } from "../../types/navigation";

type Props = NativeStackScreenProps<TaskStackParamList, "TaskDetail">;

export default function TaskDetailScreen({ route, navigation }: Props) {
  const { taskId } = route.params;
  const { tasks, deleteTask } = useTasks();

  const task = tasks.find((t) => t.id === taskId);

  if (!task) return null;

  return (
    <View>
        <Text>{task.title}</Text>
        <Text>{task.description}</Text>

        <Pressable onPress={() => navigation.navigate("TaskForm", { taskId })}>
            <Text>Editar</Text>
        </Pressable>

        <Pressable
            onPress={() => {
            deleteTask(taskId);
            navigation.goBack();
            }}
        >
            <Text>Excluir</Text>
        </Pressable>
    </View>
  );
}