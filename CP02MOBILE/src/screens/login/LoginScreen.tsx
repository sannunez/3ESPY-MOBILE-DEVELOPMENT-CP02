import { useState } from "react";
import {View, TextInput, Pressable, Text} from "react-native";
import { useAuth } from "../../context/AuthContext";

export default function LoginScreen(){
    const {login, user} = useAuth();

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[mensagem, setMensagem] = useState("");
    
    const handleLogin = () => {
        const success = login(username, password);
    
        if(!success) {
            setMensagem("Credenciais inválidas")
        } else {
            setMensagem("")
        }
    }

    return(
        <View>
            <TextInput 
            placeholder="Usuário" 
            onChangeText={setUsername} 
            value={username}/>

            <TextInput 
            placeholder="Senha" 
            onChangeText={setPassword} 
            value={password}
            secureTextEntry/>

            <Pressable onPress={handleLogin}>
                <Text>Log in</Text>
            </Pressable>

            <Text>{mensagem}</Text>
        </View>
    )
}