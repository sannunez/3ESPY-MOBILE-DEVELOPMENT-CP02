import {View, Text} from "react-native"
import { RouteProp } from "@react-navigation/native"
import { RootStackParamList } from "../../types/nativeStackRoutes"


type Props = {
    route: RouteProp<RootStackParamList, "Home">
}

export default function HomeScreen({route} : Props){
    const {userName} = route.params;

    return(
        <View>
            <Text>HomeScreen</Text>
            <Text>{userName}</Text>
        </View>
    )    
}