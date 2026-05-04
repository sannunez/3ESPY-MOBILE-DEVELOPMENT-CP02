import { useState } from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import { useTasks } from "../../hooks/useTasks";
import { generateId } from "../../utils/generateId";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TaskStackParamList } from "../../types/navigation";

type Props = NativeStackScreenProps<TaskStackParamList, "TaskForm">;

export default function TaskFormScreen({ route, navigation }: Props) {
  const { addTask, updateTask, tasks } = useTasks();

  const taskId = route.params?.taskId;
  const editingTask = tasks.find((t) => t.id === taskId);

  const [title, setTitle] = useState(editingTask?.title || "");
  const [description, setDescription] = useState(
    editingTask?.description || ""
  );

  const handleSave = () => {
    if (!title.trim()) return;

    if (editingTask) {
      updateTask({
        ...editingTask,
        title,
        description,
        updatedAt: new Date().toISOString(),
      });
    } else {
      addTask({
        id: generateId(),
        title,
        description,
        status: "pendente",
        priority: "media",
        category: "geral",
        categoryIcon: "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }

    navigation.goBack();
  };

  return (
    <View style={{ padding: 16 }}>
        <TextInput
            placeholder="Título"
            value={title}
            onChangeText={setTitle}
            style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
        />

        <TextInput
            placeholder="Descrição"
            value={description}
            onChangeText={setDescription}
            style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
        />

        <Pressable onPress={handleSave}>
            <Text>Salvar</Text>
        </Pressable>
    </View>
  );
}