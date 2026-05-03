import { useState } from "react";
import {View, TextInput, Pressable, Text} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/nativeStackRoutes";

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Login">;
};

export default function LoginScreen({navigation} : Props){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const [mensagemDeLogin, setMensagemDeLogin] = useState("")

    const handleLogin = () => {
        const user = users.find(
            (u) => u.username === username && u.password === password
        );

        if(user){
            console.log("OK", user.name)
            setMensagemDeLogin(`Login realizado, seja bem vindo ${username}`)
            navigation.navigate("Home", {userName: `${username}`})
        } else {
            setMensagemDeLogin(`Credenciais inválidas`)
        }
    }

    const users = [
        {
            id: 1,
            username: 'admin',
            password: '123',
            role: 'admin',
            name: 'Administrador',
        },
        {
            id: 2,
            username: 'user',
            password: '123',
            role: 'user',
            name: 'Usuário Comum',
        },
    ];

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

            <Text>{mensagemDeLogin}</Text>
        </View>
    )
}