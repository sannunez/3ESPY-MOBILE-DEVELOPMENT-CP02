import {View, Text} from "react-native"
import { RouteProp } from "@react-navigation/native"
import { TabParamList } from "../../types/navigation"

type Props = {
    route: RouteProp<TabParamList, "Home">
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