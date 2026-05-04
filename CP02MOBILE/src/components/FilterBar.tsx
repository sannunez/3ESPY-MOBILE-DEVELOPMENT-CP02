import { View, Pressable, Text, StyleSheet } from "react-native";
import { Task } from "../types/task";
import { useTheme } from "../context/ThemeContext";

type FilterValue = "todos" | Task["status"];

type Props = {
  selected: FilterValue;
  onSelect: (value: FilterValue) => void;
};

export default function FilterBar({ selected, onSelect }: Props) {
  const { currentTheme } = useTheme();

  const filters: FilterValue[] = [
    "todos",
    "pendente",
    "em_andamento",
    "concluida",
  ];

  return (
    <View style={styles.container}>
      {filters.map((item) => {
        const active = selected === item;

        return (
          <Pressable
            key={item}
            onPress={() => onSelect(item)}
            style={[
              styles.button,
              {
                backgroundColor: active
                  ? currentTheme.text
                  : "transparent",
                borderColor: currentTheme.text,
              },
            ]}
          >
            <Text
              style={{
                color: active
                  ? currentTheme.background
                  : currentTheme.text,
              }}
            >
              {item}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        padding: 8,
        borderWidth: 1,
        borderRadius: 6,
    },
});