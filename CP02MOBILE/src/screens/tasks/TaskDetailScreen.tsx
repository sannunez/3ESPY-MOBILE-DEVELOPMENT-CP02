import { View, Text, StyleSheet } from "react-native";
import { useTasks } from "../../hooks/useTasks";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TaskStackParamList } from "../../types/navigation";

import Header from "../../components/Header";
import CustomButton from "../../components/CustomButton";
import { useTheme } from "../../context/ThemeContext";

type Props = NativeStackScreenProps<TaskStackParamList, "TaskDetail">;

export default function TaskDetailScreen({ route, navigation }: Props) {
  const { taskId } = route.params;
  const { tasks, deleteTask } = useTasks();
  const { currentTheme } = useTheme();

  const task = tasks.find((t) => t.id === taskId);

  if (!task) return null;

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
        <Header />

        <Text style={[styles.title, { color: currentTheme.text }]}>
            {task.title}
        </Text>

        <Text style={{ color: currentTheme.text }}>
            {task.description}
        </Text>

        <CustomButton
            title="Editar"
            onPress={() =>
            navigation.navigate("TaskForm", { taskId })
            }
        />

        <CustomButton
            title="Excluir"
            onPress={() => {
            deleteTask(taskId);
            navigation.goBack();
            }}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 16 
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
});