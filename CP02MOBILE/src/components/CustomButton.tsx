import { Pressable, Text, StyleSheet } from "react-native";
import { useTheme } from "../hooks/useTheme";

type Props = {
  title: string;
  onPress: () => void;
};

export default function CustomButton({ title, onPress }: Props) {
  const { currentTheme } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: currentTheme.primary }
      ]}
    >
      <Text style={[styles.text, { color: "#fff" }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10
  },
  text: {
    fontWeight: "bold",
  },
});