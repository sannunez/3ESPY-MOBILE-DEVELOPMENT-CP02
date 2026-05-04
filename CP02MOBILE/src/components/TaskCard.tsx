import { View, Text, Pressable, StyleSheet } from "react-native";
import { Task } from "../types/task";
import StatusBadge from "./StatusBadge";
import { useTheme } from "../hooks/useTheme";

type Props = {
  task: Task;
  onPress: () => void;
};

export default function TaskCard({ task, onPress }: Props) {
  const { currentTheme } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.card,
        {
          backgroundColor: currentTheme.card,
          borderColor: currentTheme.border,
        },
      ]}
    >
      <Text style={[styles.title, { color: currentTheme.text }]}>
        {task.title}
      </Text>

      <StatusBadge status={task.status} />

      <Text style={[styles.text, { color: currentTheme.text }]}>
        Prioridade: {task.priority}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  text: {
    marginTop: 4,
  },
});