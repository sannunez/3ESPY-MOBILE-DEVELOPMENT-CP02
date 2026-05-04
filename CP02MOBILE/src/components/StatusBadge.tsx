import { View, Text, StyleSheet } from "react-native";

type Props = {
  status: "pendente" | "em_andamento" | "concluida";
};

export default function StatusBadge({ status }: Props) {
  const colorMap = {
    pendente: "#f39c12",
    em_andamento: "#3498db",
    concluida: "#2ecc71",
  };

  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: colorMap[status] },
      ]}
    >
      <Text style={styles.text}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginTop: 4,
  },
  text: {
    color: "#fff",
    fontSize: 12,
  },
});