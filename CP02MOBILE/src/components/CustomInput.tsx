import { TextInput, StyleSheet } from "react-native";
import { useTheme } from "../hooks/useTheme";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
};

export default function CustomInput(props: Props) {
  const { currentTheme } = useTheme();

  return (
    <TextInput
        {...props}
        style={[
            styles.input,
            {
            borderColor: currentTheme.border,
            color: currentTheme.text,
            },
        ]}
        placeholderTextColor={currentTheme.text}
    />
  );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
});