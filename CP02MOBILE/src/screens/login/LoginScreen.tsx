import { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

import CustomButton from "../../components/CustomButton";

export default function LoginScreen() {
  const { login } = useAuth();
  const { currentTheme } = useTheme();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleLogin = () => {
    const success = login(username, password);

    if (!success) {
      setMensagem("Credenciais inválidas");
    } else {
      setMensagem("");
    }
  };

  return (
    <View
        style={[
            styles.container,
            { backgroundColor: currentTheme.background },
        ]}
    >
        <TextInput
            placeholder="Usuário"
            placeholderTextColor={currentTheme.text}
            value={username}
            onChangeText={setUsername}
            style={[
            styles.input,
            {
                color: currentTheme.text,
                borderColor: currentTheme.text,
            },
            ]}
        />

        <TextInput
            placeholder="Senha"
            placeholderTextColor={currentTheme.text}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={[
            styles.input,
            {
                color: currentTheme.text,
                borderColor: currentTheme.text,
            },
            ]}
        />

        <CustomButton title="Login" onPress={handleLogin} />

        {mensagem !== "" && (
            <Text style={styles.error}>{mensagem}</Text>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    error: {
        marginTop: 10,
        textAlign: "center",
        color: "red",
    },
});