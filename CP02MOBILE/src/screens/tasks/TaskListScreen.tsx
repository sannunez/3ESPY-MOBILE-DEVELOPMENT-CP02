import { View, Text, FlatList, Pressable } from "react-native";
import { useTasks } from "../../hooks/useTasks";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TaskStackParamList } from "../../types/navigation";

type Props = NativeStackScreenProps<TaskStackParamList, "TaskList">;

export default function TaskListScreen({ navigation }: Props) {
  const { tasks } = useTasks();

  return (
    <View>
        <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={<Text>Nenhuma tarefa</Text>}
            renderItem={({ item }) => (
            <Pressable
                onPress={() =>
                navigation.navigate("TaskDetail", { taskId: item.id })
                }
            >
                <Text>{item.title}</Text>
                <Text>{item.status}</Text>
            </Pressable>
            )}
        />

        <Pressable onPress={() => navigation.navigate("TaskForm")}>
            <Text>Nova tarefa</Text>
        </Pressable>
    </View>
  );
}