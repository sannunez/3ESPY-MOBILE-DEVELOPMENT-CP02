import { View, Text, Pressable} from "react-native";
import { useTheme } from "../../theme/ThemeContext";

export default function SettingsScreen(){

    const {currentTheme, toggleTheme} = useTheme();
    
    return(
        <View style={{backgroundColor: currentTheme.background}}>
            <Text style={{color: currentTheme.text}}>Settings Screen</Text>

            <Pressable onPress={toggleTheme}>
                <Text style={{color: currentTheme.text}}>Mudar tema</Text>
            </Pressable>
        </View>

        
    )
}