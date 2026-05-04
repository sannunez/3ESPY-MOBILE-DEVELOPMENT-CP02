import {View, Text} from "react-native"
import { RouteProp } from "@react-navigation/native"
import { TabParamList } from "../../types/navigation"
import { useTheme } from "../../context/ThemeContext"
import { useAuth } from "../../context/AuthContext";



export default function HomeScreen(){
    const {currentTheme} = useTheme();
    const {user, salutation} = useAuth();

    return(
        <View style={{backgroundColor: currentTheme.background}}>
            <Text style={{color: currentTheme.text}}>{salutation}{user?.name}</Text>
        </View>
    )    
}