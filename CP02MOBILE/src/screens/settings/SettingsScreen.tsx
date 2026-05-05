import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import { Picker } from "@react-native-picker/picker";

import Header from "../../components/Header";
import CustomButton from "../../components/CustomButton";

export default function SettingsScreen() {
  const { user, salutation, setSalutation } = useAuth();
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <View
        style={[
            styles.container,
            { backgroundColor: currentTheme.background },
        ]}
    >
        <Header />

        <CustomButton title="Mudar tema" onPress={toggleTheme} />

        <View style={styles.section}>
            <Text style={[styles.label, { color: currentTheme.text }]}>
            Perfil:
            </Text>

            <Text style={{ color: currentTheme.text }}>
            Cargo: {user?.role}
            </Text>

            <Text style={{ color: currentTheme.text }}>
            Nome: {user?.name}
            </Text>
        </View>

        <View style={styles.section}>
            <Text style={[styles.label, { color: currentTheme.text }]}>
            Tratamento:
            </Text>

            <Picker
            selectedValue={salutation}
            onValueChange={(value) => setSalutation(value)}
            style={{ color: currentTheme.text }}
            >
            <Picker.Item label="Sr." value="Sr." />
            <Picker.Item label="Sra." value="Sra." />
            <Picker.Item label="Srta." value="Srta." />
            </Picker>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginTop: 20,
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});