import { View, Text, Pressable} from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import {Picker} from "@react-native-picker/picker"

export default function SettingsScreen(){
    const {user, salutation, setSalutation} = useAuth();

    const {currentTheme, toggleTheme} = useTheme();
    
    
    return(
        <View style={{backgroundColor: currentTheme.background}}>
            <Text style={{color: currentTheme.text}}>Settings Screen</Text>

            <Pressable onPress={toggleTheme}>
                <Text style={{color: currentTheme.text}}>Mudar tema</Text>
            </Pressable>

            <View>
                <Text>Perfil de Usuário: </Text>
                <Text style={{color: currentTheme.text}}>{user?.role}</Text>
                <Text style={{color: currentTheme.text}}>{user?.name}</Text>
            </View>

            <View>
                <Text>Preferência de tratamento:</Text>
                <Picker
                    selectedValue={salutation}
                    onValueChange={(itemValue) => setSalutation(itemValue)}>
                    
                    <Picker.Item label="Sr." value="Sr."/>
                    <Picker.Item label="Sra." value="Sra."/>
                    <Picker.Item label="Srta." value="Srta."/>
                </Picker>
            </View>
        </View>

        
    )
}