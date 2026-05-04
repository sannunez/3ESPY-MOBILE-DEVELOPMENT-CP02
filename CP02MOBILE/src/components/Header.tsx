import { View, Text, Pressable, StyleSheet } from "react-native";
import { useAuth } from "../hooks/useAuth";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const { user, logout } = useAuth();
  const { currentTheme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: currentTheme.background,
          borderBottomColor: currentTheme.border,
        },
      ]}
    >
      <View>
        <Text style={[styles.name, { color: currentTheme.text }]}>
          {user?.name}
        </Text>

        <Text style={[styles.role, { color: currentTheme.text }]}>
          Perfil: {user?.role}
        </Text>
      </View>

      <Pressable onPress={logout} style={styles.button}>
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
  },

  role: {
    fontSize: 12,
    opacity: 0.8,
  },

  button: {
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  logoutText: {
    color: "red",
    fontWeight: "bold",
  },
});