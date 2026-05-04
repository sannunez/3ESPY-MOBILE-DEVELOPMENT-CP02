import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../hooks/useTheme";

type Props = {
  message: string;
};

export default function EmptyState({ message }: Props) {
  const { currentTheme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: currentTheme.text }]}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 16,
  },
});