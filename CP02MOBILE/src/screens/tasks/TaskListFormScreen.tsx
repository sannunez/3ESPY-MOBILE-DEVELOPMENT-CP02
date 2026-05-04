import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { useTasks } from "../../hooks/useTasks";
import { generateId } from "../../utils/generateId";
import { TaskStackParamList } from "../../types/navigation";
import { Task } from "../../types/task";

import Header from "../../components/Header";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import { useTheme } from "../../context/ThemeContext";

type Props = NativeStackScreenProps<TaskStackParamList, "TaskForm">;

export default function TaskFormScreen({ route, navigation }: Props) {
  const { tasks, addTask, updateTask } = useTasks();
  const { currentTheme } = useTheme();

  const taskId = route.params?.taskId;
  const editingTask = tasks.find((t) => t.id === taskId);

  const [title, setTitle] = useState(editingTask?.title ?? "");
  const [description, setDescription] = useState(editingTask?.description ?? "");
  const [status, setStatus] = useState<Task["status"]>(
    editingTask?.status ?? "pendente"
  );
  const [priority, setPriority] = useState<Task["priority"]>(
    editingTask?.priority ?? "media"
  );

  const handleSave = () => {
    if (!title.trim()) return;

    if (editingTask) {
      updateTask({
        ...editingTask,
        title,
        description,
        status,
        priority, // 👈 novo campo
        updatedAt: new Date().toISOString(),
      });
    } else {
      addTask({
        id: generateId(),
        title,
        description,
        status,
        priority, // 👈 novo campo
        category: "geral",
        categoryIcon: "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }

    navigation.goBack();
  };

  return (
    <View
        style={[
            styles.container,
            { backgroundColor: currentTheme.background },
        ]}
    >
        <Header />

        <CustomInput
            placeholder="Título"
            value={title}
            onChangeText={setTitle}
        />

        <CustomInput
            placeholder="Descrição"
            value={description}
            onChangeText={setDescription}
        />

        <Text style={[styles.label, { color: currentTheme.text }]}>
            Status
        </Text>

        <Picker
            selectedValue={status}
            onValueChange={(v) => setStatus(v)}
            style={{ color: currentTheme.text }}
        >
            <Picker.Item label="Pendente" value="pendente" />
            <Picker.Item label="Em andamento" value="em_andamento" />
            <Picker.Item label="Concluída" value="concluida" />
        </Picker>

        <Text style={[styles.label, { color: currentTheme.text }]}>
            Prioridade
        </Text>

       <Picker
            selectedValue={priority}
            onValueChange={(v) => setPriority(v)}
            style={{ color: currentTheme.text }}
        >
            <Picker.Item label="Baixa" value="baixa" />
            <Picker.Item label="Média" value="media" />
            <Picker.Item label="Alta" value="alta" />
        </Picker>

        <CustomButton title="Salvar tarefa" onPress={handleSave} />
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        gap: 12,
    },
    label: {
        marginTop: 10,
        marginBottom: 4,
        fontWeight: "600",
    },
});