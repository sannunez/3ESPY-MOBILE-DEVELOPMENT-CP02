import { View, Text, FlatList, StyleSheet } from "react-native";
import { useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TaskStackParamList } from "../../types/navigation";

import Header from "../../components/Header";
import FilterBar from "../../components/FilterBar";
import TaskCard from "../../components/TaskCard";
import CustomButton from "../../components/CustomButton";

import { Task } from "../../types/task";
import { useTheme } from "../../context/ThemeContext";

type Props = NativeStackScreenProps<TaskStackParamList, "TaskList">;

export default function TaskListScreen({ navigation }: Props) {
  const { tasks } = useTasks();
  const { currentTheme } = useTheme();

  const [filter, setFilter] = useState<"todos" | Task["status"]>("todos");

  const filteredTasks = tasks.filter((task) =>
    filter === "todos" ? true : task.status === filter
  );

  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <Header />

      <FilterBar selected={filter} onSelect={setFilter} />

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onPress={() =>
              navigation.navigate("TaskDetail", { taskId: item.id })
            }
          />
        )}
        ListEmptyComponent={
          <Text style={{ color: currentTheme.text, textAlign: "center" }}>
            Nenhuma tarefa encontrada
          </Text>
        }
      />

      <CustomButton
        title="Nova tarefa"
        onPress={() => navigation.navigate("TaskForm")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});