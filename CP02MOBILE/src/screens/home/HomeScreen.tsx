import {View, Text} from "react-native"
import { RouteProp } from "@react-navigation/native"
import { TabParamList } from "../../types/navigation"
import { useTheme } from "../../theme/ThemeContext"


type Props = {
    route: RouteProp<TabParamList, "Home">
}

export default function HomeScreen({route} : Props){
    const {userName} = route.params;

    const {currentTheme} = useTheme();

    return(
        <View style={{backgroundColor: currentTheme.background}}>
            <Text style={{color: currentTheme.text}}>HomeScreen</Text>
            <Text style={{color: currentTheme.text}}>{userName}</Text>
        </View>
    )    
}