import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import Header from "../../components/Header";

export default function HomeScreen() {
  const { currentTheme } = useTheme();
  const { user, salutation } = useAuth();

  return (
    <View
        style={[
            styles.container,
            { backgroundColor: currentTheme.background },
        ]}
    >
        <Header />

        <Text style={[styles.text, { color: currentTheme.text }]}>
            {salutation} {user?.name}
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 18,
        marginTop: 20,
        paddingHorizontal: 16,
    },
});